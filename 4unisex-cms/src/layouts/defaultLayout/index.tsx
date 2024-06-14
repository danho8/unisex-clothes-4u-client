import React, { ReactNode, useLayoutEffect, useState } from "react";
import "./index.scss";
import Sidebar from "../../components/sidebar";
import Header from "../../components/header";
import { useSelector } from "react-redux";

interface Props {
  children: ReactNode;
}

const DefaultLayout = (props: Props) => {
  const [sidebarWidth, setSidebarWidth] = useState(250);
  const updateSidebar = useSelector((state: any) => state.sidebarUpdate);

  useLayoutEffect(() => {
    const sidebarWidth = Number(localStorage.getItem("sidebar"));
    if (!sidebarWidth) {
      localStorage.setItem("sidebar", JSON.stringify(250));
    } else {
      setSidebarWidth(sidebarWidth);
    }
  }, [updateSidebar]);

  return (
    <div className="wrapper-default-layout">
      <Header />
      <Sidebar />
      <div
        style={{ marginLeft: `${sidebarWidth}px` }}
        className="wrapper-default-layout-content"
      >
        {props.children}
      </div>
    </div>
  );
};

export default DefaultLayout;
