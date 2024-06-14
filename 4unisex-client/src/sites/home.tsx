"use client";
import BannerHome from "@/components/bannerHome";
import ContentBannerHome from "@/components/contentBannerHome";
import HomeSuggest from "@/components/homeSuggest";
import Footer from "@/components/footer";
import DefaultLayout from "@/layouts/defaultLayout";
import React, { useEffect, useLayoutEffect } from "react";
import SubmitMail from "@/components/submitMail";
import ScrollTopBtn from "@/components/scrollTopBtn";
import BestSellerHome from "@/components/bestSellerHome";
import MonopolyProductHome from "@/components/monopolyProductHome";
import Cart from "@/components/cart";
import Trademark from "@/components/trademark";
import TopHeader from "@/components/topHeader";
const HomePage = () => {
  const callback = (entries: any) => {
    entries.forEach((entry: any) => {
      const elementDistanceFromTop = entry.target.getBoundingClientRect().top;
      if (
        elementDistanceFromTop <=
        (window.innerHeight || document.documentElement.clientHeight / 1.1)
      ) {
        entry.target.style.animation = entry.target.dataset.animate;
      } else {
        entry.target.style.animation = "none";
      }
    });
  };

  useLayoutEffect(() => {
    let observer = new IntersectionObserver(callback);

    const animationItems = document.querySelectorAll(".animate");

    animationItems.forEach((item) => {
      observer.observe(item);
    });
  }, []);

  return (
    <DefaultLayout>
      <ScrollTopBtn />
      <TopHeader />
      <BannerHome
        minHeight={969}
        bgImg="/img/home/home-banner.png"
        content={<ContentBannerHome />}
      />
      <HomeSuggest />
      <BestSellerHome />
      <Trademark />
      <MonopolyProductHome />
      <SubmitMail />
      <Footer />
    </DefaultLayout>
  );
};

export default HomePage;
