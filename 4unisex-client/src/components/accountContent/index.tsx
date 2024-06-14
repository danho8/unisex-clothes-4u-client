"use client";
import React, { useState } from "react";
import AccountProfile from "../accountProfile";
import ProfileInformation from "../profileInformation";
import "../accountProfile/index.scss";
import "../profileInformation/index.scss";
import "../paymentMethods/index.scss";
import "../discountCode/index.scss";
import "./index.scss";
import MyAccount from "../myAccount";
import MyOrder from "../myOrder";
import PaymentMethods from "../paymentMethods";
import DiscountCode from "../discountCode";
import FavoritesList from "../favoritesList";
import DeleteAccount from "../deleteAccount";
import Security from "../security";

const AccountContent = () => {
  const [tab, setTab] = useState(5);
  const handleSetState = (tabNum: number) => {
    setTab(tabNum);
    console.log(tab);
  };
  return (
    <section className="account-content">
      <h3 className="account-content-title">tài khoản của tôi</h3>
      <p className="account-content-desc">
        Quản lý cài đặt hồ sơ, bảo mật, thanh toán, khuyến mãi và thông báo của
        bạn.
      </p>
      <div className="account-content-main">
        <AccountProfile handleSetState={handleSetState} />
        {tab == 1 ? <ProfileInformation /> : ""}
        {tab == 2 ? <FavoritesList /> : ""}
        {tab == 4 ? <MyAccount /> : ""}
        {tab == 3 ? <MyOrder /> : ""}
        {tab == 5 ? <DiscountCode /> : ""}
        {tab == 6 ? <Security /> : ""}
        {tab == 7 ? <DeleteAccount /> : ""}
      </div>
    </section>
  );
};

export default AccountContent;
