import React, { useEffect, useState } from "react";
import "./index.scss";
import { Drawer, Button } from "antd";
import {
  AiOutlineUser,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";
import { GrFormNextLink } from "react-icons/gr";
import { FaHeadphones } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { RiTiktokLine } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store";
import { toggle } from "@/store/reducers/sidebar.reducer";
import Link from "next/link";

function DrawerLeft() {
  const isOpen = useSelector((state: any) => state.sidebarCatalog.toggleDrawer);
  const dispatch: AppDispatch = useDispatch();
  const [showCatalogProduct, setShowCatalogProduct] = useState(false);

  const onClose = () => {
    dispatch(toggle());
  };

  const catalog = [
    {
      id: 1,
      name: "4UNISEX",
      link: "/",
    },
    {
      id: 2,
      name: "Sản phẩm",
      link: "/products",
    },
    {
      id: 3,
      name: "Tạo pack",
      link: "/pack",
    },
    {
      id: 4,
      name: "Tiếp thị liên kết",
      link: "/affiliate-marketing",
    },
    {
      id: 5,
      name: "Chia sẻ tip",
      link: "/pack",
    },
    {
      id: 6,
      name: "Giftcode",
      link: "/pack",
    },
  ];
  const catalogProduct = [
    { id: 1, name: "Đầm ngủ" },
    { id: 2, name: "Bikini" },
    { id: 3, name: "Đồ bơi" },
    { id: 4, name: "Đồ mặc nhà" },
    { id: 5, name: "Áo ngực" },
    { id: 5, name: "Bra set" },
  ];
  const iconMonitor = [
    <CiFacebook />,
    <AiOutlineInstagram />,
    <BsLinkedin />,
    <BsTwitterX />,
    <AiOutlineYoutube />,
    <RiTiktokLine />,
  ];

  const handleHover = (item: any) => {
    if (item.id === 2) {
      setShowCatalogProduct(true);
    } else {
      setShowCatalogProduct(false);
    }
  };

  return (
    <>
      <Drawer
        onClose={onClose}
        open={isOpen}
        placement="left"
        width={!showCatalogProduct ? 350 : 715}
        className="drawer-left"
      >
        <div className="drawer-left-container">
          <div
            className="drawer-container"
            style={{
              width: !showCatalogProduct ? "100%" : "50%",
            }}
          >
            <div className="catalog">
              {catalog.map((item) => (
                <Link
                  onClick={() => {
                    dispatch(toggle());
                  }}
                  href={item.link}
                  key={item.id}
                  className="catalog-item"
                >
                  <span onMouseEnter={() => handleHover(item)}>
                    {item.name}
                  </span>
                  {item.id == 2
                    ? showCatalogProduct && (
                        <GrFormNextLink className="catalog-item-icon" />
                      )
                    : null}
                </Link>
              ))}
            </div>
            <div className="contact">
              <div className="contact-container">
                <Link
                  onClick={() => {
                    dispatch(toggle());
                  }}
                  href={"/contact"}
                  className="contact-item"
                >
                  <FaHeadphones /> <span> Liên hệ</span>
                </Link>
                <Link
                  onClick={() => {
                    dispatch(toggle());
                  }}
                  href={"/account"}
                  className="contact-item"
                >
                  <AiOutlineUser />
                  <span>Tài khoản</span>
                </Link>
              </div>
              <div className="information">
                {iconMonitor.map((item, index) => (
                  <div key={index} className="information-monitor">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {showCatalogProduct && (
            <div className="c-p">
              <div className="c-p__list-item">
                {catalogProduct.map((item) => (
                  <ul className="c-p__item" key={item.id}>
                    <li className="c-p__item-name">{item.name}</li>
                  </ul>
                ))}
              </div>
            </div>
          )}
        </div>
      </Drawer>
    </>
  );
}

export default DrawerLeft;
