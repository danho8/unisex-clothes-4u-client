import React, { ReactNode } from "react";
import MainHeader from "../mainHeader";
import "./index.scss";

interface Props {
  content: ReactNode;
  bgImg: string;
  minHeight: any;
  heightAbsoulute?: any;
}

const BannerHome = (props: Props) => {
  return (
    <div
      className="banner-home"
      style={{
        backgroundImage: `url(${props.bgImg})`,
        height: props.minHeight,
      }}
    >
      <div
        className="banner-home-overlay"
        style={{
          height: props.minHeight,
          minHeight: props.heightAbsoulute ? props.heightAbsoulute : "auto",
        }}
      >
        <MainHeader />
        <div
          className="banner-home-overlay-content animate"
          data-animate="slideInBottom 1s"
        >
          {props.content}
        </div>
      </div>
    </div>
  );
};

export default BannerHome;
