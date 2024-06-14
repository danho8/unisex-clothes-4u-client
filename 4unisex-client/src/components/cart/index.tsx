import React, { useState } from "react";
import "./index.scss";
import { Button, Drawer, Input } from "antd";
import { LiaShippingFastSolid } from "react-icons/lia";
import { GoTrash } from "react-icons/go";
import type { InputNumberProps } from "antd";
import { InputNumber, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart, toggleSaleCode } from "@/store/reducers/cart.reducer";
import OrderItem from "../orderItem";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
function Cart() {
  const dispatch = useDispatch();
  const openCart = useSelector((state: any) => state.sidebarCart.isToggleCart);

  const onClose = () => {
    dispatch(toggleCart());
  };

  const cart = [
    {
      id: 1,
      name: "Pack 03 quần lót nữ Cotton USA dáng brief siêu mềm mỏng mềm mại nhất 2024",
      price: 100000,
      quantity: 2,
      image: "https://via.placeholder.com/150",
      color: "Đen",
      size: "M",
    },
    {
      id: 2,
      name: "Áo thun nữ",
      price: 150000,
      quantity: 1,
      image: "https://via.placeholder.com/150",
      color: "Trắng",
      size: "S",
    },
    {
      id: 3,
      name: "Áo thun trẻ em",
      price: 80000,
      quantity: 3,
      image: "https://via.placeholder.com/150",
      color: "Hồng",
      size: "L",
    },
    {
      id: 4,
      name: "Áo thun trẻ em",
      price: 80000,
      quantity: 3,
      image: "https://via.placeholder.com/150",
      color: "Hồng",
      size: "L",
    },
    {
      id: 5,
      name: "Áo thun trẻ em",
      price: 80000,
      quantity: 3,
      image: "https://via.placeholder.com/150",
      color: "Hồng",
      size: "L",
    },
  ];

  const onChangeQuantity = (value: any) => {
    console.log("changed", value);
  };

  const handleToggleSaleCode = () => {
    dispatch(toggleSaleCode());
  };

  return (
    <Drawer
      title="Giỏ hàng"
      onClose={onClose}
      open={openCart}
      placement="right"
      width={600}
      className="cart-drawer"
    >
      <div className="condition">
        <LiaShippingFastSolid />
        <p>Bạn đủ điều kiện để miễn phí vẫn chuyển</p>
      </div>
      <div className="cart-list cart-list-horizontal">
        {cart.map((item, index) => (
          <div key={index}>
            <OrderItem />
          </div>
        ))}
      </div>
      <div className="cart-total cart-list-horizontal">
        <div className="sale-code">
          <span className="sale-code-title">Mã giảm giá</span>
          <p className="sale-code-option" onClick={handleToggleSaleCode}>
            Chọn hoặc nhập mã giảm giá <IoIosArrowForward />
          </p>
        </div>
        <div className="total">
          <span className="total-title">Tạm tính</span>
          <p className="total-price">100000 VNĐ</p>
        </div>
        <Link
          onClick={() => {
            dispatch(toggleCart());
          }}
          href="/payment"
          className="payment-button"
        >
          Thanh toán
        </Link>
      </div>
    </Drawer>
  );
}

export default Cart;
