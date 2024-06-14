"use client";
import React from "react";
import "./index.scss";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { BiMouse } from "react-icons/bi";
import ButtonPrim from "../buttonPrim";
import useNavigation from "@/hooks/useNavigate";
const ContentBannerHome = () => {
  const { navigateTo } = useNavigation();

  const handleRedirect = () => {
    navigateTo("/products");
  };

  return (
    <div className="content-banner-home">
      <p className="content-banner-home-title">Khám phá thế giới của bạn</p>
      <h2>MUA THOẢI MÁI</h2>
      <h2>MẶC ÊM ÁI</h2>
      <ButtonPrim
        onClick={handleRedirect}
        text="Xem sản phẩm"
        icon={
          <FaRegArrowAltCircleRight className="content-banner-home-btn-icon" />
        }
      />
      <BiMouse className="content-banner-home-btn-mouse" />
    </div>
  );
};

export default ContentBannerHome;
