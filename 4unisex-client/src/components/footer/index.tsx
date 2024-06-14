import React from "react";
import "./index.scss";
import { RiMapPinRangeLine } from "react-icons/ri";
import { SlPhone } from "react-icons/sl";
import { RiMailSendLine } from "react-icons/ri";
import { CiFacebook } from "react-icons/ci";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { RiTiktokLine } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import useNavigation from "@/hooks/useNavigate";

const iconMonitor = [
  <CiFacebook />,
  <AiOutlineInstagram />,
  <BsLinkedin />,
  <BsTwitterX />,
  <AiOutlineYoutube />,
  <RiTiktokLine />,
];

const Footer = () => {
  const { navigateTo } = useNavigation();

  return (
    <footer className="main-footer">
      <div className="main-footer-logo">
        <img
          style={{ cursor: "pointer" }}
          src="/img/main-logo-prim.png"
          alt="4Unisex"
        />
      </div>
      <div className="main-footer-content">
        <div className="main-footer-content-inner">
          <ul>
            <p className="main-footer-content-inner-header">Liên hệ</p>
            <li>
              <span>
                <RiMapPinRangeLine />
              </span>
              123 Nguyễn văn linh, Hải châu, Đà nẵng
            </li>
            <li>
              <span>
                <SlPhone />
              </span>
              10905.123.456
            </li>
            <li>
              <span>
                <RiMailSendLine />
              </span>
              4ut@gmail.com
            </li>
          </ul>
        </div>
        <div className="main-footer-content-inner">
          <ul>
            <p className="main-footer-content-inner-header">Danh mục</p>
            <li
              onClick={() => {
                navigateTo("/");
              }}
            >
              Home
            </li>
            <li
              onClick={() => {
                navigateTo("/products");
              }}
            >
              Sản phẩm
            </li>
            <li
              onClick={() => {
                navigateTo("/affiliate-marketing");
              }}
            >
              Tiếp thị liên kết
            </li>
            <li>Giftcode</li>
          </ul>
        </div>
        <div className="main-footer-content-inner">
          <ul>
            <p className="main-footer-content-inner-header">Chính sách</p>
            <li>Chính sách đổi trả</li>
            <li>Chính sách thanh toán - vận chuyển</li>
            <li>Chính sách bảo mật</li>
          </ul>
        </div>
      </div>
      <div className="main-footer-monitor">
        <span>THEO DÕI CHÚNG TÔI</span>
        <div className="main-footer-monitor-main">
          {iconMonitor.map((item, index) => {
            return (
              <div key={index} className="main-footer-monitor-icon">
                {item}
              </div>
            );
          })}
        </div>
      </div>
      <div className="main-footer-copy">
        <span>Copyright © 2024 . Thiết kế & phát triển bởi 4UT</span>
      </div>
    </footer>
  );
};

export default Footer;
