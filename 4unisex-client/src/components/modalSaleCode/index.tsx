// "use client";
import React, { useState } from "react";
import { Button, Modal, Input } from "antd";
import { FaPlus } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";
import { toggleSaleCode } from "@/store/reducers/cart.reducer";
function ModalSaleCode() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const { Search } = Input;
  const dispatch = useDispatch();
  const isToggleSaleCode = useSelector(
    (state: any) => state.sidebarCart.isToggleSaleCode
  );

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    dispatch(toggleSaleCode());
  };

  const saleCodes = [
    {
      id: 1,
      img: "/img/home/highlight-logo.png",
      title: "Mã giảm giá",
      time: "30/04/2024",
      dayLeft: "Còn 14 day",
      code: "MUATHAGA",
    },
    {
      id: 2,
      img: "/img/home/highlight-logo.png",
      title: "Mã giảm giá",
      time: "30/04/2024",
      dayLeft: "Còn 14 day",
      code: "MUATHAGA",
    },
    {
      id: 3,
      img: "/img/home/highlight-logo.png",
      title: "Mã giảm giá",
      time: "30/04/2024",
      dayLeft: "Còn 14 day",
      code: "MUATHAGA",
    },
    {
      id: 4,
      img: "/img/home/highlight-logo.png",
      title: "Mã giảm giá",
      time: "30/04/2024",
      dayLeft: "Còn 14 day",
      code: "MUATHAGA",
    },
    {
      id: 5,
      img: "/img/home/highlight-logo.png",
      title: "Mã giảm giá",
      time: "30/04/2024",
      dayLeft: "Còn 14 day",
      code: "MUATHAGA",
    },
    {
      id: 6,
      img: "/img/home/highlight-logo.png",
      title: "Mã giảm giá",
      time: "30/04/2024",
      dayLeft: "Còn 14 day",
      code: "MUATHAGA",
    },
    {
      id: 7,
      img: "/img/home/highlight-logo.png",
      title: "Mã giảm giá",
      time: "30/04/2024",
      dayLeft: "Còn 14 day",
      code: "MUATHAGA",
    },
    {
      id: 8,
      img: "/img/home/highlight-logo.png",
      title: "Mã giảm giá",
      time: "30/04/2024",
      dayLeft: "Còn 14 day",
      code: "MUATHAGA",
    },
  ];

  return (
    <Modal
      title="Mã giảm giá"
      open={isToggleSaleCode}
      onOk={handleOk}
      onCancel={handleCancel}
      className="modal-sale-code"
      footer={null}
    >
      <div className="msc__code">
        <div className="msc__code-search-code">
          <input placeholder="Nhập mã ưu đãi" type="text" />
          <button>Sử dụng</button>
        </div>
        <div className="msc__code-list">
          {saleCodes.map((saleCode) => (
            <div className="msc__code-list-item" key={saleCode.id}>
              <img
                src={saleCode.img}
                alt=""
                className="msc__code-list-item__img"
              />
              <div className="msc__code-list-item__content">
                <p className="msc__code-list-item__content__title">
                  {saleCode.title}
                </p>
                <div className="msc__code-list-item__content__time">
                  <span className="msc__code-list-item__content__time-date">
                    {saleCode.time}
                  </span>
                  <span>{saleCode.dayLeft}</span>
                </div>
                <span className="msc__code-list-item__content__code">
                  {saleCode.code}
                </span>
              </div>
              <div className="msc__code-list-item__action">
                <FaPlus className="msc__code-list-item__action-icon" />
              </div>
            </div>
          ))}
        </div>
        <Button type="primary" ghost className="msc__code__submit">
          Tiếp tục
        </Button>
      </div>
    </Modal>
  );
}

export default ModalSaleCode;
