import React from "react";
import "./index.scss";
import ButtonPrim from "../buttonPrim";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import useNavigation from "@/hooks/useNavigate";

interface Props {
  categoryItem: any;
}

const BestSellerItem = (props: Props) => {
  const { navigateTo } = useNavigation();
  return (
    <div className="bestSellerItem animate" data-animate="slideInRight 2s">
      <div className="bestSellerItem__image">
        <img src={props.categoryItem.avatarUploaded} alt="4Unisex" />
        <div className="bestSellerItem_btn-detail">
        <ButtonPrim
          onClick={() => {
            navigateTo("/products");
          }}
          text="Xem sản phẩm"
          icon={
            <FaRegArrowAltCircleRight className="content-banner-home-btn-icon" />
          }
        />
      </div>
      </div>
      <div className="bestSellerItem__content">
        <div className="bestSellerItem__content__title">
          {props.categoryItem.name}
        </div>
        <div className="bestSellerItem__content__description">
          {props.categoryItem.description}
        </div>
      </div>
    </div>
  );
};

export default BestSellerItem;
