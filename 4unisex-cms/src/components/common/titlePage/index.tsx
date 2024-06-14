import React, { memo } from "react";
import "./index.scss";
import {
  FaArrowAltCircleLeft,
  FaArrowCircleLeft,
  FaArrowLeft,
  FaBackspace,
  FaRegArrowAltCircleLeft,
} from "react-icons/fa";

interface Props {
  title: string;
  bgColor?: string;
  isRouterBack?: boolean;
  onClickBack?: () => void;
}

const TitlePage = (props: Props) => {
  return (
    <div className="wrapper-title-page">
      {props.isRouterBack ? (
        <FaArrowLeft
          onClick={() => {
            if (props.onClickBack !== undefined) {
              props.onClickBack();
            }
          }}
          style={{ cursor: "pointer" }}
        />
      ) : (
        <span
          style={
            props.bgColor
              ? { backgroundColor: props.bgColor }
              : { backgroundColor: "#1055DB" }
          }
          className="wrapper-title-page-divider"
        ></span>
      )}

      <h2>{props.title}</h2>
    </div>
  );
};

export default memo(TitlePage);
