import React, { useLayoutEffect, useState } from "react";
import "./index.scss";
import { RiHome6Line } from "react-icons/ri";
import { CiBoxes } from "react-icons/ci";
import { FaMoneyCheck, FaRegUserCircle } from "react-icons/fa";
import {
  MdOutlineAdminPanelSettings,
  MdOutlineInventory2,
} from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdOutlineCategory } from "react-icons/md";
import { IoMdGift } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../store/reducers/sidebar.reducer";
import { Tooltip } from "antd";
import { IoLockClosedOutline } from "react-icons/io5";
const sidebarItems = [
  {
    link: "/dashboard",
    name: "Trang chủ",
    icon: <RiHome6Line className="wrapper-sidebar-navigation_item_icon" />,
  },
  {
    link: "/products",
    name: "Sản phẩm",
    icon: <CiBoxes className="wrapper-sidebar-navigation_item_icon" />,
  },
  {
    link: "/category",
    name: "Danh mục",
    icon: (
      <MdOutlineCategory className="wrapper-sidebar-navigation_item_icon" />
    ),
  },
  {
    link: "/revenue",
    name: "Thống kê thu nhập",
    icon: <FaMoneyCheck className="wrapper-sidebar-navigation_item_icon" />,
  },
  {
    link: "/inventory",
    name: "Hàng tồn kho",
    icon: (
      <MdOutlineInventory2 className="wrapper-sidebar-navigation_item_icon" />
    ),
  },
];

const sidebarItemsAccount = [
  {
    link: "/users",
    name: "Quản lý người dùng",
    icon: <FaRegUserCircle className="wrapper-sidebar-navigation_item_icon" />,
  },
  {
    link: "/voucher",
    name: "Quản lý Gift code",
    icon: <IoMdGift className="wrapper-sidebar-navigation_item_icon" />,
  },
];

const sidebarItemsStaff = [
  {
    link: "/staff",
    name: "Quản lý nhân viên",
    icon: (
      <MdOutlineAdminPanelSettings className="wrapper-sidebar-navigation_item_icon" />
    ),
  },
  // {
  //   link: "/role",
  //   name: "Quản lý phân quyền",
  //   icon: (
  //     <IoLockClosedOutline className="wrapper-sidebar-navigation_item_icon" />
  //   ),
  // },
];

const Sidebar = () => {
  const updateSidebar = useSelector((state: any) => state.sidebarUpdate);
  const location = useLocation();
  const [sidebarWidth, setSidebarWidth] = useState(250);
  useLayoutEffect(() => {
    const sidebarWidth = Number(localStorage.getItem("sidebar"));
    if (!sidebarWidth) {
      localStorage.setItem("sidebar", JSON.stringify(250));
    } else {
      setSidebarWidth(sidebarWidth);
    }
  }, [updateSidebar]);

  const dispatch = useDispatch();

  const handleToggleSidebar = () => {
    const sidebarWidth = Number(localStorage.getItem("sidebar"));
    if (sidebarWidth == 250) {
      localStorage.setItem("sidebar", JSON.stringify(100));
    } else {
      localStorage.setItem("sidebar", JSON.stringify(250));
    }
    dispatch(toggle());
  };

  return (
    <aside style={{ width: `${sidebarWidth}px` }} className="wrapper-sidebar">
      <div
        style={sidebarWidth == 100 ? { justifyContent: "center" } : {}}
        className="wrapper-sidebar-top"
      >
        <div className="wrapper-sidebar-logo">
          <img src="/img/logo-sidebar.png" alt="" />
          {sidebarWidth == 250 ? <span>Logo</span> : ""}
        </div>
        {sidebarWidth == 250 ? (
          <IoIosArrowBack
            onClick={handleToggleSidebar}
            className="wrapper-sidebar-toggle"
          />
        ) : (
          ""
        )}
      </div>
      <div className="wrapper-sidebar-navigation">
        {sidebarItems.map((item) => {
          return sidebarWidth == 100 ? (
            <Tooltip title={item.name} placement="right">
              <Link
                key={item.link}
                className={
                  location.pathname.includes(item.link)
                    ? "wrapper-sidebar-navigation_item_only-icon active"
                    : "wrapper-sidebar-navigation_item_only-icon"
                }
                to={item.link}
              >
                {item.icon}{" "}
              </Link>
            </Tooltip>
          ) : (
            <Link
              key={item.link}
              className={
                location.pathname.includes(item.link)
                  ? "wrapper-sidebar-navigation_item active"
                  : "wrapper-sidebar-navigation_item"
              }
              to={item.link}
            >
              {item.icon} {sidebarWidth == 250 ? <span>{item.name}</span> : ""}
            </Link>
          );
        })}
      </div>
      <p
        style={sidebarWidth == 100 ? { fontSize: 10, margin: "10px 0" } : {}}
        className="wrapper-sidebar-account"
      >
        TÀI KHOẢN
      </p>
      <div className="wrapper-sidebar-navigation">
        {sidebarItemsAccount.map((item) => {
          return sidebarWidth == 100 ? (
            <Tooltip title={item.name} placement="right">
              <Link
                key={item.link}
                className={
                  location.pathname.includes(item.link)
                    ? "wrapper-sidebar-navigation_item_only-icon active"
                    : "wrapper-sidebar-navigation_item_only-icon"
                }
                to={item.link}
              >
                {item.icon}{" "}
              </Link>
            </Tooltip>
          ) : (
            <Link
              key={item.link}
              className={
                location.pathname.includes(item.link)
                  ? "wrapper-sidebar-navigation_item active"
                  : "wrapper-sidebar-navigation_item"
              }
              to={item.link}
            >
              {item.icon} {sidebarWidth == 250 ? <span>{item.name}</span> : ""}
            </Link>
          );
        })}
      </div>
      <p
        style={sidebarWidth == 100 ? { fontSize: 9.5, margin: "10px 0" } : {}}
        className="wrapper-sidebar-account"
      >
        NHÂN VIÊN
      </p>
      <div className="wrapper-sidebar-navigation">
        {sidebarItemsStaff.map((item) => {
          return sidebarWidth == 100 ? (
            <Tooltip title={item.name} placement="right">
              <Link
                key={item.link}
                className={
                  location.pathname.includes(item.link)
                    ? "wrapper-sidebar-navigation_item_only-icon active"
                    : "wrapper-sidebar-navigation_item_only-icon"
                }
                to={item.link}
              >
                {item.icon}{" "}
              </Link>
            </Tooltip>
          ) : (
            <Link
              key={item.link}
              className={
                location.pathname.includes(item.link)
                  ? "wrapper-sidebar-navigation_item active"
                  : "wrapper-sidebar-navigation_item"
              }
              to={item.link}
            >
              {item.icon} {sidebarWidth == 250 ? <span>{item.name}</span> : ""}
            </Link>
          );
        })}
        {sidebarWidth == 100 ? (
          <IoIosArrowForward
            style={sidebarWidth == 100 ? { marginLeft: 16 } : {}}
            onClick={handleToggleSidebar}
            className="wrapper-sidebar-toggle"
          />
        ) : (
          ""
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
