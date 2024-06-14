import React, { useState } from "react";
import "./index.scss";
import { Table, TableColumnsType, Tabs } from "antd";
import { FaRegEye } from "react-icons/fa";
import { CiEdit, CiTrash } from "react-icons/ci";
import { MdFormatListBulletedAdd } from "react-icons/md";
import {
  Button,
  Checkbox,
  Form,
  FormProps,
  Input,
  Select,
  DatePicker,
} from "antd";
import dayjs from "dayjs";
import { AiTwotonePlusCircle } from "react-icons/ai";
import DiscountCode from "../discountCode";
import { TbShieldSearch } from "react-icons/tb";
import DetailOrders from "./detailOrders";

const data: any[] = [
  {
    key: 1,
    name: "John ",
    code: "UNI456465454",
    address: "12:20:48  -  16/04/2024",
    stock: 0,
    totalamount: "1,152,554 VNĐ",
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
    code: "UNI456465454",
    address: "12:20:48  -  16/04/2024",
    stock: 0,
    totalamount: "1,152,554 VNĐ",
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
    code: "UNI456465454",
    address: "12:20:48  -  16/04/2024",
    stock: 0,
    totalamount: "1,152,554 VNĐ",
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
    code: "UNI456465454",
    address: "12:20:48  -  16/04/2024",
    stock: 0,
    totalamount: "1,152,554 VNĐ",
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
    code: "UNI456465454",
    address: "12:20:48  -  16/04/2024",
    stock: 19,
    totalamount: "1,152,554 VNĐ",
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
    code: "UNI456465454",
    address: "12:20:48  -  16/04/2024",
    stock: 0,
    totalamount: "1,152,554 VNĐ",
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
    key: 7,
    name: "John Brown",
    code: "UNI456465454",
    address: "12:20:48  -  16/04/2024",
    stock: 0,
    totalamount: "1,152,554 VNĐ",
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
    key: 8,
    name: "John Brown",
    code: "UNI456465454",
    address: "12:20:48  -  16/04/2024",
    stock: 0,
    totalamount: "1,152,554 VNĐ",
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
    key: 9,
    name: "John Brown",
    code: "UNI456465454",
    address: "12:20:48  -  16/04/2024",
    stock: 0,
    totalamount: "1,152,554 VNĐ",
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
    key: 10,
    name: "John Brown",
    code: "UNI456465454",
    address: "12:20:48  -  16/04/2024",
    stock: 0,
    totalamount: "1,152,554 VNĐ",
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
    key: 11,
    name: "John Brown",
    code: "UNI456465454",
    address: "12:20:48  -  16/04/2024",
    stock: 0,
    totalamount: "1,152,554 VNĐ",
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
    key: 12,
    name: "John Brown",
    code: "UNI456465454",
    address: "12:20:48  -  16/04/2024",
    stock: 0,
    totalamount: "1,152,554 VNĐ",
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

function MyOrder() {
  const [navigateDetailOrder, setNavigateDetailOrder] = useState(false);

  const onFinish: FormProps<any>["onFinish"] = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<any>["onFinishFailed"] = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const labelTabTable = [
    {
      id: 1,
      title: "Tất cả",
      key: "1",
    },
    {
      id: 2,
      title: "Chờ xác nhận",
      key: "2",
    },
    {
      id: 3,
      title: "Đang giao",
      key: "3",
    },
    {
      id: 4,
      title: "Đã giao",
      key: "4",
    },
    {
      id: 5,
      title: "Đã hủy",
      key: "5",
    },
    {
      id: 6,
      title: "Trả hàng/ Hoàn tiền",
      key: "6",
    },
    {
      id: 7,
      title: "Giao không thành công",
      key: "7",
    },
  ];

  const columns: TableColumnsType<any> = [
    {
      title: "Mã đơn hàng",
      dataIndex: "code",
      key: "code",
      width: 200,
      render(value, record, index) {
        return <strong>{value}</strong>;
      },
    },
    {
      title: "Ngày đặt hàng",
      dataIndex: "address",
      key: "address",
      width: 300,
      render(value, record, index) {
        return <strong>{value}</strong>;
      },
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render(value, record, index) {
        return (
          <div>
            <Button
              className="my-order-title-btn-table my-order-title-delivered"
              ghost
            >
              Đang xác nhận
            </Button>
          </div>
        );
      },
    },
    {
      title: "Tổng tiền",
      dataIndex: "totalamount",
      key: "totalamount",
      render(value, record, index) {
        return <strong>{value}</strong>;
      },
      width: 120,
    },
    {
      render(record: any) {
        return (
          <div style={{ display: "flex", gap: 10 }}>
            <Button
              className="my-order-title-btn-table "
              onClick={moveDetailOrder}
              ghost
            >
              Chi tiết
            </Button>
            <Button className="my-order-title-btn-table" type="primary" danger>
              Hủy đơn hàng
            </Button>
          </div>
        );
      },
    },
  ];

  const moveDetailOrder = () => {
    setNavigateDetailOrder(true);
  };

  return (
    <section className="my-order">
      {navigateDetailOrder ? (
        <DetailOrders />
      ) : (
        <div className="payment-method-content">
          <h3 className="my-order-title">Đơn hàng của tôi</h3>
          <Tabs
            defaultActiveKey="1"
            className="payment-method-content__tabs"
            tabPosition={"top"}
            style={{
              height: "100%",
              width: "100%",
              padding: "0 40px 0",
              backgroundColor: "var(--black-80)",
              fontFamily: "var(--inter-font)",
              color: "var(--white)",
            }}
          >
            {labelTabTable.map((item) => (
              <Tabs.TabPane tab={item.title} key={item.key}>
                <Table
                  className="payment-method-tabs__table"
                  size="small"
                  rowHoverable={true}
                  tableLayout="auto"
                  columns={columns}
                  dataSource={data}
                  pagination={{
                    position: ["bottomCenter"],
                    pageSize: 10,
                  }}
                />
              </Tabs.TabPane>
            ))}
          </Tabs>
        </div>
      )}
    </section>
  );
}

export default MyOrder;
