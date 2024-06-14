"use client";
import BannerHome from "@/components/bannerHome";
import Footer from "@/components/footer";
import DefaultLayout from "@/layouts/defaultLayout";
import React from "react";
import ScrollTopBtn from "@/components/scrollTopBtn";
import AccountContent from "@/components/accountContent";
import TopHeader from "@/components/topHeader";

const MyAccountPage = () => {
  return (
    <DefaultLayout>
      <ScrollTopBtn />
      <TopHeader />
      <BannerHome
        minHeight={"auto"}
        heightAbsoulute={"calc(100vh - var(--height-top-header))"}
        bgImg="/img/account.png"
        content={<AccountContent />}
      />
      <Footer />
    </DefaultLayout>
  );
};

export default MyAccountPage;
