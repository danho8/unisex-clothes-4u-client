"use client";
import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";
import "./index.scss";
import { IoMdMenu } from "react-icons/io";
import { FiShoppingBag } from "react-icons/fi";
import { IoSearchSharp } from "react-icons/io5";
import {
  FaRegArrowAltCircleRight,
  FaRegHeart,
  FaRegUser,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggle } from "@/store/reducers/sidebar.reducer";
import { toggleCart } from "@/store/reducers/cart.reducer";
import { toggleSearch } from "@/store/reducers/search.reducer";
import { Popover } from "antd";
import Link from "next/link";
import { RiAdminLine } from "react-icons/ri";
import useNavigation from "@/hooks/useNavigate";

const MainHeader = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(30);
  const [checkToken, setCheckToken] = useState<string | null>("");

  const dispatch = useDispatch();
  const { navigateTo } = useNavigation();

  useEffect(() => {
    const getToken = localStorage.getItem("auth-token");
    setCheckToken(getToken);
  }, []);

  const handleRedirectLogin = () => {
    const returnUrl = window.location.href;
    navigateTo(`/auth?returnUrl=${encodeURIComponent(returnUrl)}`);
  };
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);
  const openDrawer = () => {
    console.log(1);
    dispatch(toggle());
  };
  const openCart = () => {
    dispatch(toggleCart());
  };

  const openSearch = () => {
    dispatch(toggleSearch());
  };

  const [arrow, setArrow] = useState("Show");

  const mergedArrow = useMemo(() => {
    if (arrow === "Hide") {
      return false;
    }

    if (arrow === "Show") {
      return true;
    }

    return {
      pointAtCenter: true,
    };
  }, [arrow]);

  return (
    <header className="main-header ">
      <div className="main-header-menu disappear-mobile " onClick={openDrawer}>
        <IoMdMenu className="main-header-actions-icon" />
        <strong>Khám phá</strong>
      </div>
      <img
        style={{ cursor: "pointer" }}
        src="/img/main-logo-white.png"
        alt="4Unisex"
      />
      <div className="main-header-actions">
        <IoMdMenu
          className="main-header-actions-icon show-mobile"
          onClick={openDrawer}
        />
        <IoSearchSharp
          className="main-header-actions-icon"
          onClick={openSearch}
        />
        <Popover
          style={{ backgroundColor: "#1C1C1C" }}
          placement="bottomLeft"
          content={
            checkToken ? (
              <div className="popup-user">
                <h3>nguyen le phan tran tieu my</h3>
                <p>binhdesignerdn@gmail.com</p>
                <Link href={"/"}>
                  <FaRegHeart size={18} /> Danh sách yêu thích
                </Link>
                <Link href={"/account"}>
                  <RiAdminLine size={18} /> Tài khoản của tôi
                </Link>
                <button>Đăng xuất</button>
              </div>
            ) : (
              <div className="popup-user no-auth">
                <button onClick={handleRedirectLogin}>Đăng nhập</button>
              </div>
            )
          }
          arrow={false}
          className="disappear-mobile"
        >
          <FaRegUser className="main-header-actions-icon" />
        </Popover>
        <FiShoppingBag
          className="main-header-actions-icon"
          onClick={openCart}
        />
      </div>
    </header>
  );
};

export default MainHeader;
