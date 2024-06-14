import React, { useState } from "react";
import "./index.scss";
import { Pagination } from 'antd';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

function FavoritesList() {
  const [currentPage, setCurrentPage] = useState(1); 
  const itemsPerPage = 9;
  const items = [
    {
      id: 1,
      imageUrl: "https://chuyensiaothun.com.vn/wp-content/uploads/I4138-Cac-Mau-Ao-Thun-Nam-Tay-Ngan-Dep-Hoa-Tiet-V-BLUE-Gia-Re-510x510.jpg",
      name: "Sản phẩm 1",
      price: "100,000 VNĐ",
      sold: "Đã bán 10k",
    },
    {
      id: 2,
      imageUrl: "https://chuyensiaothun.com.vn/wp-content/uploads/I4138-Cac-Mau-Ao-Thun-Nam-Tay-Ngan-Dep-Hoa-Tiet-V-BLUE-Gia-Re-510x510.jpg",
      name: "Sản phẩm 2",
      price: "200,000 VNĐ",
      sold: "Đã bán 20k",
    },
    {
      id: 3,
      imageUrl: "https://chuyensiaothun.com.vn/wp-content/uploads/I4138-Cac-Mau-Ao-Thun-Nam-Tay-Ngan-Dep-Hoa-Tiet-V-BLUE-Gia-Re-510x510.jpg",
      name: "Sản phẩm 3",
      price: "150,000 VNĐ",
      sold: "Đã bán 15k",
    },
    {
      id: 1,
      imageUrl: "https://chuyensiaothun.com.vn/wp-content/uploads/I4138-Cac-Mau-Ao-Thun-Nam-Tay-Ngan-Dep-Hoa-Tiet-V-BLUE-Gia-Re-510x510.jpg",
      name: "Sản phẩm 1",
      price: "100,000 VNĐ",
      sold: "Đã bán 10k",
    },
    {
      id: 2,
      imageUrl: "https://chuyensiaothun.com.vn/wp-content/uploads/I4138-Cac-Mau-Ao-Thun-Nam-Tay-Ngan-Dep-Hoa-Tiet-V-BLUE-Gia-Re-510x510.jpg",
      name: "Sản phẩm 2",
      price: "200,000 VNĐ",
      sold: "Đã bán 20k",
    },
    {
      id: 3,
      imageUrl: "https://chuyensiaothun.com.vn/wp-content/uploads/I4138-Cac-Mau-Ao-Thun-Nam-Tay-Ngan-Dep-Hoa-Tiet-V-BLUE-Gia-Re-510x510.jpg",
      name: "Sản phẩm 3",
      price: "150,000 VNĐ",
      sold: "Đã bán 15k",
    },
    {
      id: 1,
      imageUrl: "https://chuyensiaothun.com.vn/wp-content/uploads/I4138-Cac-Mau-Ao-Thun-Nam-Tay-Ngan-Dep-Hoa-Tiet-V-BLUE-Gia-Re-510x510.jpg",
      name: "Sản phẩm 1",
      price: "100,000 VNĐ",
      sold: "Đã bán 10k",
    },
    {
      id: 2,
      imageUrl: "https://chuyensiaothun.com.vn/wp-content/uploads/I4138-Cac-Mau-Ao-Thun-Nam-Tay-Ngan-Dep-Hoa-Tiet-V-BLUE-Gia-Re-510x510.jpg",
      name: "Sản phẩm 2",
      price: "200,000 VNĐ",
      sold: "Đã bán 20k",
    },
    {
      id: 3,
      imageUrl: "hhttps://chuyensiaothun.com.vn/wp-content/uploads/I4138-Cac-Mau-Ao-Thun-Nam-Tay-Ngan-Dep-Hoa-Tiet-V-BLUE-Gia-Re-510x510.jpg",
      price: "150,000 VNĐ",
      sold: "Đã bán 15k",
    },
    {
      id: 1,
      imageUrl: "https://chuyensiaothun.com.vn/wp-content/uploads/I4138-Cac-Mau-Ao-Thun-Nam-Tay-Ngan-Dep-Hoa-Tiet-V-BLUE-Gia-Re-510x510.jpg",
      name: "Sản phẩm 1",
      price: "100,000 VNĐ",
      sold: "Đã bán 10k",
    },
    {
      id: 2,
      imageUrl: "https://chuyensiaothun.com.vn/wp-content/uploads/I4138-Cac-Mau-Ao-Thun-Nam-Tay-Ngan-Dep-Hoa-Tiet-V-BLUE-Gia-Re-510x510.jpg",
      name: "Sản phẩm 2",
      price: "200,000 VNĐ",
      sold: "Đã bán 20k",
    },
    {
      id: 3,
      imageUrl: "https://chuyensiaothun.com.vn/wp-content/uploads/I4138-Cac-Mau-Ao-Thun-Nam-Tay-Ngan-Dep-Hoa-Tiet-V-BLUE-Gia-Re-510x510.jpg",
      name: "Sản phẩm 3",
      price: "150,000 VNĐ",
      sold: "Đã bán 15k",
    },
    {
      id: 1,
      imageUrl: "https://chuyensiaothun.com.vn/wp-content/uploads/I4138-Cac-Mau-Ao-Thun-Nam-Tay-Ngan-Dep-Hoa-Tiet-V-BLUE-Gia-Re-510x510.jpg",
      name: "Sản phẩm 1",
      price: "100,000 VNĐ",
      sold: "Đã bán 10k",
    },
    {
      id: 2,
      imageUrl: "https://chuyensiaothun.com.vn/wp-content/uploads/I4138-Cac-Mau-Ao-Thun-Nam-Tay-Ngan-Dep-Hoa-Tiet-V-BLUE-Gia-Re-510x510.jpg",
      name: "Sản phẩm 2",
      price: "200,000 VNĐ",
      sold: "Đã bán 20k",
    },
    {
      id: 3,
      imageUrl: "https://chuyensiaothun.com.vn/wp-content/uploads/I4138-Cac-Mau-Ao-Thun-Nam-Tay-Ngan-Dep-Hoa-Tiet-V-BLUE-Gia-Re-510x510.jpg",
      name: "Sản phẩm 3",
      price: "150,000 VNĐ",
      sold: "Đã bán 15k",
    },
  ]; 

 
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, items.length);

  return (
    <section className="favorites-list">
      <h3>Danh sách yêu thích</h3>
      <div className="favorites-list-container">
        {/* Hiển thị các phần tử trên trang hiện tại */}
        {items.slice(startIndex, endIndex).map((item, index) => (
          <div className="favorites-list-content-item" key={index}>
            <div className="favorites-list-content-item">
              <img src={item.imageUrl} />
              <h3>{item.name}</h3>
              <div className="favorites-list-content-item-price">
                <h5>{item.price}</h5>
                <span>{item.sold}</span>
              </div>
              <a className="products-content-list-item-btn">Xem sản phẩm<FaRegArrowAltCircleRight className="products-content-list-item-btn-icon" /></a>
            </div>
          </div>
        ))}


      </div>
      <div className="favorites-list-container-pagination">
          <Pagination
            current={currentPage}
            total={items.length}
            pageSize={itemsPerPage}
            onChange={(page) => setCurrentPage(page)}
            showSizeChanger={false}
            className="main-discount-code-pagination"
          />
        </div>
    </section>
  );
}

export default FavoritesList;

