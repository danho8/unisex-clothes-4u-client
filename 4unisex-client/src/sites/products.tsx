"use client";
import BannerHome from "@/components/bannerHome";
import ContentBannerHome from "@/components/contentBannerHome";
import Footer from "@/components/footer";
import DefaultLayout from "@/layouts/defaultLayout";
import React from "react";
import ScrollTopBtn from "@/components/scrollTopBtn";

import ContentBannerProduct from "@/components/contentBannerProducts";
import ProductsContent from "@/components/productsContent";
import TopHeader from "@/components/topHeader";
const ProductsPage = () => {
  return (
    <DefaultLayout>
      <ScrollTopBtn />
      <TopHeader />
      <BannerHome
        minHeight={404}
        bgImg="/img/products/banner-product.png"
        content={<ContentBannerProduct />}
      />
      <ProductsContent />
      <Footer />
    </DefaultLayout>
  );
};

export default ProductsPage;
