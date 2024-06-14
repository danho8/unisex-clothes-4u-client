import React, { useState } from "react";
import "./index.scss";
import TitlePage from "../common/titlePage";
import HeaderTable from "../common/headerTable";
import { Modal, Table, TableColumnsType } from "antd";
import { FaRegEye } from "react-icons/fa";
import { CiEdit, CiTrash } from "react-icons/ci";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const data: DataType[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

const Staff = () => {
  const [open, setOpen] = useState(false);
  const columns: TableColumnsType<DataType> = [
    {
      title: "Tên",
      dataIndex: "name",
      width: 300,
    },
    {
      title: "Email",
      dataIndex: "age",
      width: 300,
    },
    {
      title: "Quyền",
      dataIndex: "address",
    },
    {
      title: "Tuỳ chọn",
      render(record: any) {
        return (
          <div style={{ display: "flex", gap: 10 }}>
            <FaRegEye className="wrapper-products-icon-table" />
            <CiEdit className="wrapper-products-icon-table" />
            <CiTrash
              onClick={() => {
                showModal();
              }}
              className="wrapper-products-icon-table"
            />
          </div>
        );
      },
    },
  ];

  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };

  const handleOkModal = () => {
    setOpen(false);
  };

  return (
    <div className="wrapper-staff">
      <Modal
        title="Thông báo"
        open={open}
        closeIcon={false}
        onOk={handleOkModal}
        onCancel={hideModal}
        okText="Xác nhận"
        cancelText="Huỷ"
      >
        <p>Bạn có chắc chắn khi thực hiện thao tác này</p>
      </Modal>
      <TitlePage bgColor="#CAA1E3" title="Quản lý nhân viên" />
      <div className="wrapper-staff-content">
        <HeaderTable />
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSizeOptions: [10, 15, 20] }}
        />
      </div>
    </div>
  );
};

export default Staff;
