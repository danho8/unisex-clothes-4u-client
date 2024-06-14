import React, { memo } from "react";
import "./index.scss";
import { Segmented, Select } from "antd";
import { IoSearchOutline } from "react-icons/io5";

const HeaderTableInventory = () => {
  return (
    <div className="wrapper-header-table">
      <div className="wrapper-header-table_search">
        <div className="wrapper-header-table_search_item input">
          <IoSearchOutline className="wrapper-header-table_search_item_icon" />
          <input type="text" placeholder="Tìm kiếm" />
        </div>
        <div className="wrapper-header-table_search_item select">
          <Select
            variant="borderless"
            defaultValue="all"
            style={{ width: 150, padding: 0 }}
            options={[
              { value: "all", label: "Tất cả" },
              { value: "name", label: "Tên" },
              { value: "code", label: "Mã" },
            ]}
          />
        </div>
      </div>

      <Segmented
        defaultValue="bestSeller"
        options={[
          {
            label: (
              <span style={{ padding: 8, display: "block" }}>
                Sản phẩm bán chạy
              </span>
            ),
            value: "bestSeller",
          },
          {
            label: (
              <span style={{ padding: 8, display: "block" }}>
                Sản phẩm tồn kho
              </span>
            ),
            value: "inventory",
          },
        ]}
      />
    </div>
  );
};

export default memo(HeaderTableInventory);
