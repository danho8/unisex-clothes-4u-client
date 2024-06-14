import React from "react";
import "./index.scss";
import { AiOutlinePlus } from "react-icons/ai";

const CardProduct = () => {
  return (
    <div className="card-product">
      <img
        className="card-product-item-img"
        src="/img/home/img-best-saller.png"
        alt="4Unisex"
      />
      <h3>Pack 03 quần lót nữ Cotton USA dáng brief siêu mềm mỏng</h3>
      <div className="card-product-item-price">
        <p>100.000 VNĐ</p>
        <span className="card-product-item-sold">Đã bán 12.3k</span>
      </div>
      <button>
        <p>Thêm giỏ hàng</p>
        <AiOutlinePlus />
      </button>
    </div>
  );
};

export default CardProduct;
