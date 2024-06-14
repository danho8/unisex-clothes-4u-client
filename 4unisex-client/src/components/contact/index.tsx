import "./index.scss";
import { RiMapPinRangeLine } from "react-icons/ri";
import { BsTelephone } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";
import React, { useEffect, useState } from "react";
import "./index.scss";
import { Form, Input } from "antd";
import ContentBannerProduct from "../contentBannerProducts";
const { TextArea } = Input;

const contentBanner = [
  {
    src: "/icon/head-phone-icon.png",
    title: "TRÒ CHUYỆN TRỰC TIẾP",
    descriptions:
      "Nhận trợ giúp nhanh hơn! Các nhà điều hành của chúng tôi có sẵn thông qua trò chuyện trực tiếp. Đó là một cách tuyệt vời để nhanh chóng nhận được câu trả lời mà bạn đang tìm kiếm.",
  },
  {
    src: "/icon/payment-icon.png",
    title: "ĐẶT HÀNG",
    descriptions:
      "Để biết hướng dẫn đặt hàng và đặt hàng qua fax/thư, vui lòng đọc phần thông tin đặt hàng của chúng tôi tại đây: Hướng dẫn đặt hàng và trợ giúp.",
  },
  {
    src: "/icon/product-icon.png",
    title: "đơn hàng",
    descriptions:
      "Mọi thắc mắc về sản phẩm hoặc đặt hàng vui lòng liên hệ với chúng tôi. Bạn có thể sử dụng mẫu dưới đây hoặc thông tin liên hệ trên trang này.",
  },
];

const breadcrumbItems = [
  { title: "Trang chủ", href: "/" },
  { title: "Liên hệ" },
];

const ContactHome = () => {
  return (
    <section className="contact-home">
      <div className="contact-home-title">
        <ContentBannerProduct
          title="Liên hệ"
          breadcrumbItems={breadcrumbItems}
        />
      </div>
      <div className="contact-home-content">
        <div className="trademark-support">
          {contentBanner.map((item, index) => {
            return (
              <div key={index} className="trademark-support__item">
                <img
                  className="trademark-support__item-icon"
                  src={item.src}
                  alt={item.src}
                />
                <div className="trademark-support__item-line"></div>
                <h4 className="trademark-support__item-title">{item.title}</h4>
                <p className="trademark-support__item-description">
                  {item.descriptions}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="contact-home-divider"></div>
      <div className="contact-home-infor">
        <div className="contact-home-infor-item">
          <RiMapPinRangeLine style={{ fontSize: "24px" }} />
          123 Nguyễn văn linh , Hải châu , Đà Nẵng
        </div>
        <div className="contact-home-infor-item">
          <BsTelephone style={{ fontSize: "24px" }} />
          0905.123.456
        </div>
        <div className="contact-home-infor-item">
          <BiMailSend style={{ fontSize: "24px" }} />
          4ut@gmail.com
        </div>
      </div>
      <Form className="contact-home-submit" size="large" layout="vertical">
        <Form.Item
          style={{ fontWeight: 600, marginTop: 10, color: "white" }}
          name="name"
          label={
            <span style={{ fontWeight: 600, color: "white" }}>Họ tên</span>
          }
          rules={[{ required: true, message: "Vui lòng nhập tên sản phẩm!" }]}
        >
          <Input placeholder="Nhập họ và tên" />
        </Form.Item>
        <Form.Item
          style={{ fontWeight: 600, marginTop: 10, color: "white" }}
          name="name"
          label={
            <span style={{ fontWeight: 600, color: "white" }}>
              Số điện thoại
            </span>
          }
          rules={[{ required: true, message: "Vui lòng nhập tên sản phẩm!" }]}
        >
          <Input placeholder="Nhập số điện thoại" />
        </Form.Item>
        <Form.Item
          style={{ flex: 1, fontWeight: 600 }}
          label={
            <span
              style={{
                fontWeight: 600,
                color: "white",
                paddingLeft: "10px",
              }}
            >
              Tin nhắn
            </span>
          }
          name="description"
        >
          <TextArea
            placeholder="Nhập văn bản"
            style={{ resize: "none", height: "135px" }}
          />
        </Form.Item>
        <button className="add" type="submit" onClick={() => {}}>
          Gửi thông tin
        </button>
      </Form>
    </section>
  );
};

export default ContactHome;
