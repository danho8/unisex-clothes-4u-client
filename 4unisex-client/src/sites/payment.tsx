"use client";
import BannerHome from "@/components/bannerHome";
import ContentBannerProduct from "@/components/contentBannerProducts";
import Footer from "@/components/footer";
import PaymentHome from "@/components/payment";
import ScrollTopBtn from "@/components/scrollTopBtn";
import TopHeader from "@/components/topHeader";
import DefaultLayout from "@/layouts/defaultLayout";
import React from "react";

const breadcrumbItems = [
  { title: "Trang chủ", href: "/" },
  { title: "Thanh toán" },
];

const PaymentPage = () => {
  return (
    <DefaultLayout>
      <ScrollTopBtn />
      <TopHeader />
      <BannerHome
        minHeight={404}
        bgImg="/img/home/home-banner.png"
        content={
          <ContentBannerProduct
            title="Thanh toán"
            breadcrumbItems={breadcrumbItems}
          />
        }
      />
      <PaymentHome />
      <Footer />
    </DefaultLayout>
  );
};

export default PaymentPage;
