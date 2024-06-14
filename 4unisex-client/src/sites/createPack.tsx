"use client";
import BannerHome from "@/components/bannerHome";
import Footer from "@/components/footer";
import DefaultLayout from "@/layouts/defaultLayout";
import React from "react";
import ScrollTopBtn from "@/components/scrollTopBtn";

import ContentBannerProduct from "@/components/contentBannerProducts";
import CreatePackContent from "@/components/createPackContent";
import TopHeader from "@/components/topHeader";
const breadcrumbItems = [
  { title: "Trang chủ", href: "/" },
  { title: "Tạo pack" },
];
const CreatePackPage = () => {
  return (
    <DefaultLayout>
      <TopHeader />
      <ScrollTopBtn />
      <BannerHome
        minHeight={404}
        bgImg="/img/products/banner-product.png"
        content={
          <ContentBannerProduct
            title="Tạo pack"
            breadcrumbItems={breadcrumbItems}
          />
        }
      />
      <CreatePackContent />
      <Footer />
    </DefaultLayout>
  );
};

export default CreatePackPage;
