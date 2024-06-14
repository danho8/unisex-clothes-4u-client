import React, { ReactNode } from "react";
import "./index.scss";

interface Props {
  text: string;
  icon: ReactNode;
  onClick?: () => void;
}

const ButtonPrim = (props: Props) => {
  return (
    <button
      onClick={() => {
        console.log("ok");
        props?.onClick ? props.onClick() : 0;
      }}
      className="content-banner-home-btn"
    >
      {props.text} {props.icon}
    </button>
  );
};

export default ButtonPrim;
