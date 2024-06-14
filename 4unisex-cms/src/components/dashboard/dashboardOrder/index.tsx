import React from "react";
import { Table } from "antd";
import type { TableColumnsType } from "antd";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Sản phẩm",
    dataIndex: "name",
  },
  {
    title: "Đơn giá",
    dataIndex: "age",
  },
  {
    title: "Số lượng",
    dataIndex: "address",
  },
  {
    title: "Thành tiền",
    dataIndex: "age",
  },
  {
    title: "Trạng thái",
    render(record:any){
        return <span>Đang giao</span>
    }
},
];

const data: DataType[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

const DashboardOrder: React.FC = () => (
  <Table
    columns={columns}
    dataSource={data}
    pagination={{pageSizeOptions:[5,10,15] }}
  />
);

export default DashboardOrder;
