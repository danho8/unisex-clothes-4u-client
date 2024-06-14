import React, { useState } from "react";
import "./index.scss";
import { CiSearch } from "react-icons/ci";
import { Slider } from "antd";
import ButtonPrim from "@/components/buttonPrim";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const categories = [
  "Đầm ngủ",
  "Bikini",
  "Đồ bơi",
  "Đồ mặc nhà",
  "Áo ngực",
  "Bra set",
];

const sizes = ["S", "M", "L", "XL", "XXL"];
const hashtagItems = [
  "Đồ lót",
  "Áo ngủ",
  "Áo pijama",
  "bikini",
  "Đồ bơi",
  "bra set",
];

const SidebarProductsContent = () => {
  const [sizeActive, setSizeActive] = useState("");
  const [hashtag, setHashtag] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000000]);

  const formatter = (value: any) => {
    return `${value.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    })}`;
  };

  const onAfterChange = (value: any) => {
    console.log("Selected Range:", value);
    // Perform the search or filtering operation based on the selected range
  };
  return (
    <div className="sidebar-products-content">
      <div className="sidebar-products-content-search">
        <input type="text" placeholder="Tìm kiếm" />
        <CiSearch className="sidebar-products-content-search-icon" />
      </div>
      <div className="sidebar-products-content-divider"></div>
      <div className="sidebar-products-content-categories">
        <h4 className="sidebar-products-content-title">Danh mục sản phẩm</h4>
        <ul>
          {categories.map((item: string, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
      <div className="sidebar-products-content-divider"></div>
      <div className="sidebar-products-content-size">
        <h4 className="sidebar-products-content-title">kích thước</h4>
        <div className="sidebar-products-content-size-wrapper">
          {sizes.map((item, index) => {
            return (
              <span
                key={index}
                onClick={() => {
                  if (sizeActive !== item) {
                    setSizeActive(item);
                  } else {
                    setSizeActive("");
                  }
                }}
                className={
                  item !== sizeActive
                    ? "sidebar-products-content-size-item"
                    : "sidebar-products-content-size-item active"
                }
              >
                {item}
              </span>
            );
          })}
        </div>
      </div>
      <div className="sidebar-products-content-divider"></div>
      <div className="sidebar-products-content-price">
        <h4 className="sidebar-products-content-title">tìm kiếm theo giá</h4>
        <Slider
          style={{ marginTop: 20 }}
          range
          step={10000}
          defaultValue={[0, 1000000]}
          max={10000000}
          onChange={setPriceRange}
          onAfterChange={onAfterChange}
          tipFormatter={formatter}
        />
        <div className="sidebar-products-content-price-render">
          Giá từ {priceRange[0].toLocaleString("en-GB")} -{" "}
          {priceRange[1].toLocaleString("en-GB")} VND
        </div>
        <button className="sidebar-products-content-price-button">
          Tìm kiếm{" "}
          <FaRegArrowAltCircleRight className="sidebar-products-content-price-button-icon" />
        </button>
      </div>
      <div className="sidebar-products-content-divider"></div>
      <div className="sidebar-products-content-hashtag">
        <h4 className="sidebar-products-content-title">thẻ sản phẩm</h4>
        <div className="sidebar-products-content-hashtag-wrapper">
          {hashtagItems.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  hashtag !== item ? setHashtag(item) : setHashtag("");
                }}
                className={
                  hashtag !== item
                    ? "sidebar-products-content-hashtag-item"
                    : "sidebar-products-content-hashtag-item active"
                }
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SidebarProductsContent;
