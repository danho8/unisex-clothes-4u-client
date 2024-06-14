import Link from "next/link";
import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import "./index.scss";

interface Props {
  productItem?: any;
  minPrice?: any;
  maxPrice?: any;
}

const ProductContentItem = (props: Props) => {
  return (
    <div className="products-content-list-item">
      <img
        src={
          props?.productItem?.productOptions?.length
            ? props?.productItem?.productOptions[0]?.productImages[0]
                ?.imageUploaded
            : ""
        }
        alt=""
      />
      <p>{props?.productItem?.name}</p>
      <div className="products-content-list-item-price">
        {props?.maxPrice == props?.minPrice ? (
          <h5>{props?.maxPrice?.toLocaleString("en-GB")} vnđ</h5>
        ) : (
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <h5>{props?.minPrice?.toLocaleString("en-GB")} vnđ</h5>
            <span style={{ color: "var(--prim-color)" }}>-</span>
            <h5>{props.maxPrice.toLocaleString("en-GB")} vnđ</h5>
          </div>
        )}
        <span>Đã bán 12.3k</span>
      </div>
      <Link
        href={`/products/${props.productItem?.id}`}
        className="products-content-list-item-btn"
      >
        Xem sản phẩm{" "}
        <FaRegArrowAltCircleRight className="products-content-list-item-btn-icon" />
      </Link>
    </div>
  );
};

export default ProductContentItem;
