import React, { useState } from "react";
import "./index.scss";
import { Pagination } from "antd";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";
function DiscountCode() {
  const [currentPage, setCurrentPage] = useState(1); // State để lưu trữ trang hiện tại

  // Mảng các phần tử trong group-code (giả định)
  const items = [
    {
      id: 1,
      voucherType: "Voucher",
      discountAmount: "15k",
      description: "Giảm 15k cho đơn hàng từ 499k",
      expirationDate: "30/04/2024",
      remainingDays: 14,
      iconColor: "#ffffff",
      stamp: "Muathaga",
    },
    {
      id: 2,
      voucherType: "Voucher",
      discountAmount: "20k",
      description: "Giảm 20k cho đơn hàng từ 599k",
      expirationDate: "30/05/2024",
      remainingDays: 30,
      iconColor: "#ffffff",
      stamp: "Muathaga",
    },
    {
      id: 1,
      voucherType: "Voucher",
      discountAmount: "15k",
      description: "Giảm 15k cho đơn hàng từ 499k",
      expirationDate: "30/04/2024",
      remainingDays: 14,
      iconColor: "#ffffff",
      stamp: "Muathaga",
    },
    {
      id: 2,
      voucherType: "Voucher",
      discountAmount: "20k",
      description: "Giảm 20k cho đơn hàng từ 599k",
      expirationDate: "30/05/2024",
      remainingDays: 30,
      iconColor: "#ffffff",
      stamp: "Muathaga",
    },
    {
      id: 1,
      voucherType: "Voucher",
      discountAmount: "15k",
      description: "Giảm 15k cho đơn hàng từ 499k",
      expirationDate: "30/04/2024",
      remainingDays: 14,
      iconColor: "#ffffff",
      stamp: "Muathaga",
    },
    {
      id: 2,
      voucherType: "Voucher",
      discountAmount: "20k",
      description: "Giảm 20k cho đơn hàng từ 599k",
      expirationDate: "30/05/2024",
      remainingDays: 30,
      iconColor: "#ffffff",
      stamp: "Muathaga",
    },
    {
      id: 1,
      voucherType: "Voucher",
      discountAmount: "15k",
      description: "Giảm 15k cho đơn hàng từ 499k",
      expirationDate: "30/04/2024",
      remainingDays: 14,
      iconColor: "#ffffff",
      stamp: "Muathaga",
    },
    {
      id: 2,
      voucherType: "Voucher",
      discountAmount: "20k",
      description: "Giảm 20k cho đơn hàng từ 599k",
      expirationDate: "30/05/2024",
      remainingDays: 30,
      iconColor: "#ffffff",
      stamp: "Muathaga",
    },
    {
      id: 1,
      voucherType: "Voucher",
      discountAmount: "15k",
      description: "Giảm 15k cho đơn hàng từ 499k",
      expirationDate: "30/04/2024",
      remainingDays: 14,
      iconColor: "#ffffff",
      stamp: "Muathaga",
    },
    {
      id: 2,
      voucherType: "Voucher",
      discountAmount: "20k",
      description: "Giảm 20k cho đơn hàng từ 599k",
      expirationDate: "30/05/2024",
      remainingDays: 30,
      iconColor: "#ffffff",
      stamp: "Muathaga",
    },
    {
      id: 1,
      voucherType: "Voucher",
      discountAmount: "15k",
      description: "Giảm 15k cho đơn hàng từ 499k",
      expirationDate: "30/04/2024",
      remainingDays: 14,
      iconColor: "#ffffff",
      stamp: "Muathaga",
    },
    {
      id: 2,
      voucherType: "Voucher",
      discountAmount: "20k",
      description: "Giảm 20k cho đơn hàng từ 599k",
      expirationDate: "30/05/2024",
      remainingDays: 30,
      iconColor: "#ffffff",
      stamp: "Muathaga",
    },
    {
      id: 1,
      voucherType: "Voucher",
      discountAmount: "15k",
      description: "Giảm 15k cho đơn hàng từ 499k",
      expirationDate: "30/04/2024",
      remainingDays: 14,
      iconColor: "#ffffff",
      stamp: "Muathaga",
    },
    {
      id: 2,
      voucherType: "Voucher",
      discountAmount: "20k",
      description: "Giảm 20k cho đơn hàng từ 599k",
      expirationDate: "30/05/2024",
      remainingDays: 30,
      iconColor: "#ffffff",
      stamp: "Muathaga",
    },
    {
      id: 1,
      voucherType: "Voucher",
      discountAmount: "15k",
      description: "Giảm 15k cho đơn hàng từ 499k",
      expirationDate: "30/04/2024",
      remainingDays: 14,
      iconColor: "#ffffff",
      stamp: "Muathaga",
    },
    {
      id: 2,
      voucherType: "Voucher",
      discountAmount: "20k",
      description: "Giảm 20k cho đơn hàng từ 599k",
      expirationDate: "30/05/2024",
      remainingDays: 30,
      iconColor: "#ffffff",
      stamp: "Muathaga",
    },
    {
      id: 1,
      voucherType: "Voucher",
      discountAmount: "15k",
      description: "Giảm 15k cho đơn hàng từ 499k",
      expirationDate: "30/04/2024",
      remainingDays: 14,
      iconColor: "#ffffff",
      stamp: "Muathaga",
    },
    {
      id: 2,
      voucherType: "Voucher",
      discountAmount: "20k",
      description: "Giảm 20k cho đơn hàng từ 599k",
      expirationDate: "30/05/2024",
      remainingDays: 30,
      iconColor: "#ffffff",
      stamp: "Muathaga",
    },
  ];

  const itemsPerPage = 12;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, items.length);

  return (
    <section className="main-discount-code">
      <h3>Mã giảm giá</h3>
      <div className="group-code">
        {items.slice(startIndex, endIndex).map((item, index) => (
          <div className="code-item" key={index}>
            <div className="code-item-left">
              <h3>{item.voucherType}</h3>
              <span>{item.discountAmount}</span>
            </div>
            <div className="code-item-right">
              <h4>{item.description}</h4>
              <div className="code-item-right-content">
                <p>30/04/2024</p>
                <span>Còn {item.remainingDays}ngày</span>
                <div className="icon-plus">
                  <FaPlus />
                </div>
                <div className="stamp">{item.stamp}</div>
              </div>
            </div>
          </div>
        ))}
        <div className="main-discount-code-pagination">
          <Pagination
            current={currentPage}
            total={items.length}
            pageSize={itemsPerPage}
            onChange={(page) => {
              setCurrentPage(page);
            }}
            showSizeChanger={false}
            className="main-discount-code-pagination"
          />
        </div>
      </div>
    </section>
  );
}

export default DiscountCode;
