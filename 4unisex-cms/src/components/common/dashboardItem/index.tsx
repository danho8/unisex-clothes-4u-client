import React, { memo, ReactNode } from "react";
import "./index.scss";
import { Select } from "antd";
interface Props {
  content: ReactNode;
  title: string;
}
const DashboardItem = (props: Props) => {
  return (
    <div className="wrapper-dashboard-item">
      <div className="wrapper-dashboard-item-title">
        <h3>{props.title}</h3>
        <Select
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
      </div>
      <div className="wrapper-dashboard-item-content">{props.content}</div>
    </div>
  );
};

export default memo(DashboardItem);
