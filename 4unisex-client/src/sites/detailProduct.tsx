"use client";
import BannerHome from "@/components/bannerHome";
import ContentBannerHome from "@/components/contentBannerHome";
import Footer from "@/components/footer";
import DefaultLayout from "@/layouts/defaultLayout";
import React, { useEffect, useRef, useState } from "react";
import ScrollTopBtn from "@/components/scrollTopBtn";

import ContentBannerProduct from "@/components/contentBannerProducts";
import ProductDetailContent from "@/components/productDetailContent";
import ForcusImageGallery from "@/components/forcusImageGallery";
import { useParams } from "next/navigation";
import ProductService from "@/services/product.service";
import { message } from "antd";
import CategoryService from "@/services/category.service";
import TopHeader from "@/components/topHeader";

const productService = new ProductService();
const categoryService = new CategoryService();

const DetailProductPage = () => {
  const params = useParams();
  const [messageApi, contextHolder] = message.useMessage();
  const isMount = useRef(false);
  const [breadcrumbItems, setBreadcrumbItems] = useState([
    { title: "Trang chủ", href: "/" },
    { title: "Sản phẩm", href: "/products" },
  ]);
  const errorFunc = (text: string) => {
    messageApi.open({
      type: "error",
      content: text,
    });
  };
  const handleFetchDetail = async () => {
    try {
      const res = await productService.getDetailsProduct(+params.id);
      const res2 = await categoryService.getAllCategory();
      const productCategory = res2.data.data.find(
        (item: any) => item.id == res.data.data[0].categoryId
      );
      setBreadcrumbItems((prev: any) => [
        ...prev,
        { title: productCategory.name },
        { title: res.data.data[0].name },
      ]);
    } catch (error: any) {
      if (error.message == "Network Error") {
        errorFunc("Server đang có lỗi xảy ra vui lòng thử lại sau !");
      }
    }
  };

  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    void handleFetchDetail();
  }, []);

  return (
    <DefaultLayout>
      {contextHolder}
      <TopHeader />
      <ForcusImageGallery />
      <ScrollTopBtn />
      <BannerHome
        minHeight={404}
        bgImg="/img/products/banner-product.png"
        content={<ContentBannerProduct breadcrumbItems={breadcrumbItems} />}
      />
      <ProductDetailContent />
      <Footer />
    </DefaultLayout>
  );
};

export default DetailProductPage;
