"use client";
import BannerHome from "@/components/bannerHome";
import Footer from "@/components/footer";
import DefaultLayout from "@/layouts/defaultLayout";
import React from "react";
import ScrollTopBtn from "@/components/scrollTopBtn";
import ContactHome from "@/components/contact";
import TopHeader from "@/components/topHeader";


const ContactPage = () => {
  return (
    <DefaultLayout>
      <TopHeader/>
      <ScrollTopBtn />
      <BannerHome
        minHeight={"auto"}
        heightAbsoulute={"calc(100vh - var(--height-top-header))"}
        bgImg="/img/contact.png"
        content={<ContactHome />}
      />
      <Footer />
    </DefaultLayout>
  );
};

export default ContactPage;
