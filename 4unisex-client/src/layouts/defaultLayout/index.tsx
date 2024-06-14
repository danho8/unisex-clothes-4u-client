"use client";
import TopHeader from "@/components/topHeader";
import React, { ReactNode, useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "@/store";
import DrawerLeft from "@/components/drawer";
import Cart from "@/components/cart";
import SearchLayout from "../searchLayout";
import ModalSaleCode from "@/components/modalSaleCode";
import { usePathname } from "next/navigation";
interface Props {
  children: ReactNode;
}

const DefaultLayout = (props: Props) => {
  const pathname = usePathname();
  useEffect(() => {
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    console.log(pathname)
    scrollToTop();
  }, [pathname]);
  
  return (
    <Provider store={store}>
      <>
        <ModalSaleCode />
        <SearchLayout />
        <DrawerLeft />
        <Cart />
        {props.children}
      </>
    </Provider>
  );
};

export default DefaultLayout;
