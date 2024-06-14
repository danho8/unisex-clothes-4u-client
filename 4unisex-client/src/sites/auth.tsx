"use client";
import AuthComponent from "@/components/authComponent";
import BannerHome from "@/components/bannerHome";
import Footer from "@/components/footer";
import LoadingCommon from "@/components/loading/loadingCommon";
import ScrollTopBtn from "@/components/scrollTopBtn";
import TopHeader from "@/components/topHeader";
import DefaultLayout from "@/layouts/defaultLayout";
import React, { useState } from "react";

const AuthPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const hideLoading = () => {
    setIsLoading(false);
  };

  const showLoading = () => {
    setIsLoading(true);
  };

  return (
    <DefaultLayout>
      <TopHeader />
      {isLoading ? <LoadingCommon /> : <></>}
      <ScrollTopBtn />
      <BannerHome
        minHeight={"auto"}
        heightAbsoulute={"calc(100vh - var(--height-top-header))"}
        bgImg="/img/home/home-banner.png"
        content={
          <AuthComponent showLoading={showLoading} hideLoading={hideLoading} />
        }
      />
    </DefaultLayout>
  );
};

export default AuthPage;
