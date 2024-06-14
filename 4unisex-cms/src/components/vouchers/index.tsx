import React from "react";
import TitlePage from "../common/titlePage";
import HeaderTable from "../common/headerTable";
import { Table, TableColumnsType } from "antd";
import { FaRegEye } from "react-icons/fa";
import { CiEdit, CiTrash } from "react-icons/ci";
import "./index.scss";

const columns: TableColumnsType<any> = [
  {
    title: "Tên/mã Giftcode",
    dataIndex: "name",
  },
  {
    title: "Giảm giá",
    dataIndex: "age",
  },
  {
    title: "Thời gian bắt đầu",
    dataIndex: "address",
  },
  {
    title: "Thời gian kết thúc",
    dataIndex: "age",
  },
  {
    title: "Tuỳ chọn",
    render(record: any) {
      return (
        <div style={{ display: "flex", gap: 10 }}>
          <FaRegEye className="wrapper-products-icon-table" />
          <CiEdit className="wrapper-products-icon-table" />
          <CiTrash className="wrapper-products-icon-table" />
        </div>
      );
    },
  },
];

const data: any[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

const Vouchers = () => {
  return (
    <div className="wrapper-vouchers">
      <TitlePage bgColor="#FF9797" title="Quản lý Giftcode" />
      <div className="wrapper-vouchers-content">
        <HeaderTable />
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSizeOptions: [5, 10, 15], defaultPageSize: 5 }}
        />
      </div>
    </div>
  );
};

export default Vouchers;
