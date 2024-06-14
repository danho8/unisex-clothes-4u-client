import React from "react";
import "./index.scss";
import TitlePage from "../common/titlePage";
import { Table, TableColumnsType } from "antd";
import HeaderTableInventory from "./headerTableInventory";
import { FaRegEye } from "react-icons/fa";
import { CiEdit, CiTrash } from "react-icons/ci";
import { MdFormatListBulletedAdd } from "react-icons/md";

const data: any[] = [
  {
    key: 1,
    name: "John ",
    age: 32,
    stock: 0,
    description:
      "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
    detail: [
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSucRA-oe937bc1OHg1Ea4gPp4q5lRu6K06tEBhC-693Q&s",
        size: "L",
        color: "Đen hồng",
        stock: 100,
        price: 1000000,
      },
    ],
  },
  {
    key: 2,
    name: " Brown",
    age: 32,
    stock: 0,
    description:
      "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
    detail: [
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSucRA-oe937bc1OHg1Ea4gPp4q5lRu6K06tEBhC-693Q&s",
        size: "L <85kg",
        color: "Đen hồng",
        stock: 100,
        price: 10000,
      },
    ],
  },
  {
    key: 3,
    name: "Jrown",
    age: 32,
    stock: 0,
    description:
      "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
    detail: [
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSucRA-oe937bc1OHg1Ea4gPp4q5lRu6K06tEBhC-693Q&s",
        size: "L",
        color: "Đen hồng",
        stock: 100,
        price: 10000,
      },
    ],
  },
  {
    key: 4,
    name: "John ",
    age: 32,
    stock: 0,
    description:
      "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
    detail: [
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSucRA-oe937bc1OHg1Ea4gPp4q5lRu6K06tEBhC-693Q&s",
        size: "L",
        color: "Đen hồng",
        stock: 100,
        price: 10000,
      },
    ],
  },
  {
    key: 5,
    name: "John Brown",
    age: 32,
    stock: 19,
    description:
      "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
    detail: [
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSucRA-oe937bc1OHg1Ea4gPp4q5lRu6K06tEBhC-693Q&s",
        size: "L",
        color: "Đen hồng",
        stock: 100,
        price: 10000,
      },
    ],
  },
  {
    key: 6,
    name: "John Brown",
    age: 32,
    stock: 0,
    description:
      "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
    detail: [
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSucRA-oe937bc1OHg1Ea4gPp4q5lRu6K06tEBhC-693Q&s",
        size: "L",
        color: "Đen hồng",
        stock: 100,
        price: 10000,
      },
    ],
  },
];

const Inventory = () => {
  const columns: TableColumnsType<any> = [
    {
      title: "Sản phẩm",
      dataIndex: "name",
      key: "name",
      render(record) {
        return (
          <div className="wrapper-product-table-item">
            <p>Áo vest</p>
            <span>Áo</span>
          </div>
        );
      },
      width: 250,
    },
    {
      title: "Mã sản phẩm",
      dataIndex: "age",
      key: "age",
      width: 200,
      render(value, record, index) {
        return <strong>{value}</strong>;
      },
    },
    {
      title: "Đơn giá",
      dataIndex: "address",
      key: "address",
      width: 300,
      render(value, record, index) {
        return <strong>{record.age}</strong>;
      },
    },
    {
      title: "Số lượng",
      dataIndex: "stock",
      key: "stock",
      render(value, record, index) {
        return <strong>{value}</strong>;
      },
    },
    {
      title: "Trạng thái",
      dataIndex: "address",
      key: "address",
      render(value, record, index) {
        return (
          <div
            className={
              record.stock > 0
                ? "wrapper-product-table-item-tag-valid"
                : "wrapper-product-table-item-tag-invalid"
            }
          >
            {record.stock > 0 ? "Còn hàng" : "Hết hàng"}
          </div>
        );
      },
      width: 120,
    },
    {
      title: "Tuỳ chọn",
      render(record: any) {
        return (
          <div style={{ display: "flex", gap: 10 }}>
            <FaRegEye className="wrapper-products-icon-table" />
            <CiEdit className="wrapper-products-icon-table" />
            <MdFormatListBulletedAdd className="wrapper-products-icon-table" />
            <CiTrash
              onClick={() => {}}
              className="wrapper-products-icon-table"
            />
          </div>
        );
      },
    },
  ];

  const columnDetail: TableColumnsType<any> = [
    {
      title: "Hình ảnh",
      dataIndex: "img",
      key: "img",
      render(value) {
        return (
          <img
            style={{
              objectFit: "cover",
              width: 60,
              height: 60,
              borderRadius: 14,
            }}
            src={value}
          />
        );
      },
      width: 100,
    },
    {
      title: "Kích thước",
      dataIndex: "size",
      key: "size",
      render(value, record, index) {
        return <p className="wrapper-product-table-detail-item">{value}</p>;
      },
    },
    {
      title: "Màu sắc",
      dataIndex: "color",
      key: "color",
      width: 350,
      render(value, record, index) {
        return <p className="wrapper-product-table-detail-item">{value}</p>;
      },
    },
    {
      title: "Tồn kho",
      dataIndex: "stock",
      key: "stock",
      width: 200,
      render(value, record, index) {
        return <p className="wrapper-product-table-detail-item">{value}</p>;
      },
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
      render(value) {
        return (
          <p className="wrapper-product-table-detail-item">
            {value.toLocaleString("en-GB")} VND
          </p>
        );
      },
      width: 200,
    },
    {
      title: "Tuỳ chọn",
      render(record: any) {
        return (
          <div style={{ display: "flex", gap: 10 }}>
            <CiEdit className="wrapper-products-icon-table" />
            <CiTrash
              onClick={() => {}}
              className="wrapper-products-icon-table"
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="wrapper-inventory">
      <TitlePage bgColor="#A1E3CB" title="Hàng tồn kho" />
      <div className="wrapper-inventory-content">
        <p className="wrapper-inventory-content-hint">
          <img src="/img/hint.png" alt="4Unisex" /> Mẹo tìm kiếm theo ID sản
          phẩm: Mỗi sản phẩm được cung cấp một ID duy nhất mà bạn có thể dựa vào
          đó để tìm chính xác sản phẩm mình cần.
        </p>
        <HeaderTableInventory />
        <Table
          size="large"
          rowHoverable={false}
          columns={columns}
          expandable={{
            expandedRowRender: (record) => {
              return (
                <Table
                  style={{ marginBottom: 10, marginRight: 100 }}
                  pagination={false}
                  size="small"
                  columns={columnDetail}
                  dataSource={record.detail}
                />
              );
            },
          }}
          dataSource={data}
          pagination={{
            showSizeChanger: true,
            pageSizeOptions: [10, 15, 20],
          }}
        />
      </div>
    </div>
  );
};

export default Inventory;
