import { Select } from "antd";
import React from "react";
import { IoShieldCheckmark } from "react-icons/io5";
import "./index.scss";
const TopHeader = () => {
  return (
    <header className="top-header">
      <div className="top-header-left">
        <IoShieldCheckmark className="top-header-left-icon" />
        <p>Giao hàng an toàn 100% không cần liên hệ với người chuyển phát</p>
      </div>
      <div className="top-header-right">
        <p>Hotline: <strong>02353.999.999</strong></p>
        {/* <Select
          variant="borderless"
          style={{ flex: 1,width:120 }}
          defaultValue={"vn"}
          options={[
            { value: "vn", label: "Vietnamese" },
            { value: "en", label: "English" },
          ]}
        /> */}
      </div>
    </header>
  );
};

export default TopHeader;
