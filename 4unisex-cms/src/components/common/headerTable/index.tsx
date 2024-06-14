import React, { memo } from "react";
import "./index.scss";
import { Select } from "antd";
import { TbCategoryPlus } from "react-icons/tb";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

interface Props {
  linkCreate?: string;
  handleClick?: () => void;
}

const HeaderTable = (props: Props) => {
  const navigate = useNavigate();

  const handleCreate = () => {
    if (props?.linkCreate) {
      navigate(props.linkCreate);
    } else if (props?.handleClick) {
      props.handleClick();
    }
  };
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

      <button onClick={handleCreate} className="wrapper-header-table_btn">
        <TbCategoryPlus className="wrapper-header-table_btn_icon" />{" "}
        <span>Thêm mới</span>
      </button>
    </div>
  );
};

export default memo(HeaderTable);
