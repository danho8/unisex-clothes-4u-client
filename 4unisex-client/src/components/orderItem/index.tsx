import { Input, InputNumber, Tooltip } from "antd";
import React from "react";
import { GoTrash } from "react-icons/go";
import "./index.scss";

const OrderItem = () => {
  return (
    <div className="order-item">
      <img
        width={50}
        height={50}
        src="/img/logo-prim.png"
        className="order-item-img"
      />
      <div className="order-item-info">
        <Tooltip
          title="Pack 03 quần lót nữ Cotton USA dáng brief siêu mềm mỏng
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        >
          <p className="order-item-info-name">
            Pack 03 quần lót nữ Cotton USA dáng brief siêu mềm mỏng
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </p>
        </Tooltip>
        <div className="order-item-info-attr">
          <p className="order-item-info-detail"> Xanh</p>
          <p className="order-item-info-detail"> Đỏ</p>
        </div>
        <div className="order-item-info-total">
          <p className="order-item-info-price"> 10000 VND</p>
          <InputNumber size="large" min={1} max={100000} defaultValue={3} />
        </div>
      </div>
      <GoTrash className="order-item-trash-icon" />
    </div>
  );
};

export default OrderItem;
