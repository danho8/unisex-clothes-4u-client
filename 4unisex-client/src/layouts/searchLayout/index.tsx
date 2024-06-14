import React, { useState } from "react";
import "./index.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { BiMouse } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import SearchProduct from "@/components/searchProduct";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { toggleSearch } from "@/store/reducers/search.reducer";
const category = [
  "Tất cả danh mục",
  "Đầm ngủ",
  "Bikini",
  "Đồ bơi",
  "Đồ mặc nhà",
  "Áo ngực",
  "Bra set",
];

const SearchLayout = () => {
  const [valueSearch, setValueSearch] = useState("");
  const dispatch = useDispatch();
  const isModalOpen = useSelector(
    (state: any) => state.loadingSearch.isCloseSearch
  );

  const handleClose = () => {
    dispatch(toggleSearch());
  };
  return (
    <section className={isModalOpen ? "search-layout active" : "search-layout"}>
      <div className="search-layout-header">
        <div className="search-layout-header-title">Tìm kiếm</div>
        <div className="search-layout-header-close" onClick={handleClose}>
          <AiOutlineCloseCircle />
        </div>
      </div>
      <div className="search-layout-input">
        <div className="search-layout-category">
          {category.map((item, index) => (
            <div key={index} className="search-layout-category-item">
              {item}
            </div>
          ))}
        </div>
        <div className="search-layout-input-form">
          {valueSearch.length > 0 ? (
            <AiOutlineClose
              onClick={() => {
                setValueSearch("");
              }}
              className="input-icon-close"
            />
          ) : null}
          <input
            type="text"
            value={valueSearch}
            onChange={(e) => {
              setValueSearch(e.target.value);
            }}
            placeholder="Tìm kiếm sản phẩm"
          />
          <CiSearch className="input-icon-search" />
        </div>
        <div className="search-product">
          <SearchProduct />
        </div>
      </div>
    </section>
  );
};

export default SearchLayout;
