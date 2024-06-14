import React from "react";
import TitlePage from "../common/titlePage";
import "./index.scss";
import DashboardRevenue from "../dashboard/dashboardRevenue";
import { Select } from "antd";
const Revenue = () => {
  return (
    <div className="wrapper-revenue">
      <TitlePage bgColor="#FFE5D3" title="Thống kê thu nhập" />
      <div className="wrapper-revenue-content">
        <Select
          style={{ textAlign: "end" }}
          placeholder="Borderless"
          variant="borderless"
          defaultValue={"day"}
          options={[
            { value: "day", label: "Theo ngày" },
            { value: "week", label: "Theo tuần" },
            { value: "month", label: "Theo tháng" },
            { value: "year", label: "Theo năm" },
          ]}
        />
        <DashboardRevenue />
      </div>
    </div>
  );
};

export default Revenue;
