"use client";
import React from "react";
import "./index.scss";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { BiMouse } from "react-icons/bi";
import ButtonPrim from "../buttonPrim";
import useNavigation from "@/hooks/useNavigate";
const ContentBannerAffiliateMarketing = () => {
  return (
    <div className="content-banner-home">
      <p className="content-banner-home-title">
        Chương trình giới thiệu - Giải thưởng không giới hạn
      </p>
      <h2>GIỚI THIỆU BẠN BÈ </h2>
      <h2>NHẬN THÊM ƯU ĐÃI</h2>
      <BiMouse className="content-banner-home-btn-mouse" />
    </div>
  );
};

export default ContentBannerAffiliateMarketing;
