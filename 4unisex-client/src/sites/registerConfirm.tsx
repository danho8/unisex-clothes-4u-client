import BannerHome from "@/components/bannerHome";
import ForgotPasswordComponent from "@/components/forgotPassword";
import RegisterConfirmComponent from "@/components/registerConfirm";
import ScrollTopBtn from "@/components/scrollTopBtn";
import TopHeader from "@/components/topHeader";
import DefaultLayout from "@/layouts/defaultLayout";
import React from "react";

const RegisterConfirm = () => {
  return (
    <DefaultLayout>
      <ScrollTopBtn />
      <TopHeader />
      <BannerHome
        minHeight={"auto"}
        heightAbsoulute={"calc(100vh - var(--height-top-header))"}
        bgImg="/img/home/home-banner.png"
        content={<RegisterConfirmComponent />}
      />
    </DefaultLayout>
  );
};

export default RegisterConfirm;
