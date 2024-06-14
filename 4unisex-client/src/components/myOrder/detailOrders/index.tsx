import React from "react";
import "./index.scss";

function DetailOrders() {
  const dataInfo = [
    {
      codeOrder: "123456",
      dateOrder: "12:20:48 - 12/12/2021",
      status: "Đã giao hàng",
      note: "Giao hàng vào giờ hành chính",
      payment: "Thanh toán khi nhận hàng",
      custommer: "Ngyen Van A",
      phone: "0123456789",
      address: "123/4/5 Lê Văn Sỹ, P.10, Q. Phú Nhuận, TP.HCM",
    },
  ];

  const productOrders = [
    {
      img: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg",
      productName: "Pack 03 quần lót nữ Cotton USA dáng brief siêu mềm mỏng",
      color: "Den",
      size: "M",
      numberProduct: 1,
      price: 200000,
    },
    {
      img: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg",
      productName: "Pack 03 quần lót nữ Cotton USA dáng brief siêu mềm mỏng",
      color: "Den",
      size: "M",
      numberProduct: 1,
      price: 200000,
    },
    {
      img: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg",
      productName: "Pack 03 quần lót nữ Cotton USA dáng brief siêu mềm mỏng",
      color: "Den",
      size: "M",
      numberProduct: 1,
      price: 200000,
    },
  ];

  return (
    <div className="d-o">
      <h3 className="d-o__h3">Chi tiết đơn hàng</h3>
      <div className="d-o__information">
        <div className="d-o__information-left">
          <div className="d-o__information-left__code">
            <span>Mã đơn hàng:</span>
            <span>{dataInfo[0].codeOrder}</span>
          </div>
          <div className="d-o__information-left__date">
            <span>Ngày đặt hàng:</span>
            <span>{dataInfo[0].dateOrder}</span>
          </div>
          <div className="d-o__information-left__status">
            <span>Trạng thái:</span>
            <span>{dataInfo[0].status}</span>
          </div>
          <div className="d-o__information-left__note">
            <span>Ghi chú:</span>
            <span>{dataInfo[0].note}</span>
          </div>
        </div>
        <div className="d-o__information-right">
          <div className="d-o__information-right__payment">
            <span>Phương thức thanh toán:</span>
            <span>{dataInfo[0].payment}</span>
          </div>
          <div className="d-o__information-right__custommer">
            <span>Người nhận:</span>
            <span>{dataInfo[0].custommer}</span>
          </div>
          <div className="d-o__information-right__phone">
            <span>Số điện thoại:</span>
            <span>{dataInfo[0].phone}</span>
          </div>
          <div className="d-o__information-right__address">
            <span>Địa chỉ:</span>
            <span>{dataInfo[0].address}</span>
          </div>
        </div>
      </div>
      {/* product */}
      <div className="d-o__product">
        <h3 className="d-o__h3">
          Sản phẩm <span>(3)</span>
        </h3>
        <table>
          <thead>
            <tr>
              <th>Sản phẩm</th>
              <th>Số lượng</th>
              <th>Giá</th>
            </tr>
          </thead>
          <tbody>
            {productOrders.map((product, index) => (
              <tr key={index}>
                <td>
                  <div className="d-o__product-img">
                    <img src={product.img} alt="product" />
                  </div>
                  <div className="d-o__product-name">
                    <span>{product.productName}</span>
                    <div className="d-o__product-name__describe">
                      <span>{product.color}</span>
                      <span>{product.size}</span>
                    </div>
                  </div>
                </td>
                <td>X{product.numberProduct}</td>
                <td>{product.price} VND</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="d-o__payment">
        <div className="d-o__payment-infor">
          <div className="d-o__payment-infor__total">
            <span>Giá trị đơn hàng:</span>
            <span>600.000 VND</span>
          </div>
          <div className="d-o__payment-infor__discount">
            <span>Mã giảm giá:</span>
            <span>0 VND</span>
          </div>
          <div className="d-o__payment-infor__ship">
            <span>Phí vận chuyển:</span>
            <span>0 VND</span>
          </div>
        </div>
        <div className="d-o__payment-total">
          <div>
            <span>Tổng tiền:</span>
            <span>600.000 VND</span>
          </div>
          <p className="d-o__payment-total-VAT">(Đã bao gồm thuế VAT)</p>
        </div>
      </div>
    </div>
  );
}

export default DetailOrders;
