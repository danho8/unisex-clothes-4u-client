import React from "react";
import { Button, Table } from "antd";
import type { TableColumnsType } from "antd";
import "./index.scss";

const columns: TableColumnsType<any> = [
  {
    title: "Sản phẩm",
    dataIndex: "product",
  },
  {
    title: "Tổng doanh thu",
    render(record: { revenue: number }) {
      return <strong>{record.revenue.toLocaleString("en-GB")}</strong>;
    },
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
    render() {
        return <span className="dashboard-best-seller-status">Còn hàng</span>
    }
  },
];

const data: any[] = [];
for (let i = 0; i < 7; i++) {
  data.push({
    key: i,
    product: `Edward King ${i}`,
    revenue: 320000000,
    status: `London, Park Lane no. ${i}`,
  });
}

const DashboardBestSellerItem = () => {
  return (
    <div>
      <Table
        size="middle"
        pagination={false}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};

export default DashboardBestSellerItem;
