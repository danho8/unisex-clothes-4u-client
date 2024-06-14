import BannerHome from "@/components/bannerHome";
import ForgotPasswordComponent from "@/components/forgotPassword";
import ScrollTopBtn from "@/components/scrollTopBtn";
import TopHeader from "@/components/topHeader";
import DefaultLayout from "@/layouts/defaultLayout";
import React from "react";

const ForgotPassword = () => {
  return (
    <DefaultLayout>
      <TopHeader />
      <ScrollTopBtn />
      <BannerHome
        minHeight={"auto"}
        heightAbsoulute={"calc(100vh - var(--height-top-header))"}
        bgImg="/img/home/home-banner.png"
        content={<ForgotPasswordComponent />}
      />
    </DefaultLayout>
  );
};

export default ForgotPassword;
