import React from "react";
import "./index.scss";
import { Container, Row, Col } from 'react-bootstrap';


const contentBanner = [
  {
    src: "/icon/ship-icon.png",
    title: "Giao hàng trên toàn quốc",
    descriptions:
      "Miễn phí vận chuyển cho tất cả các đơn hàng có giá trị từ 400",
  },
  {
    src: "/icon/head-phone-icon.png",
    title: "Hỗ trợ 24/7",
    descriptions: "Luôn hỗ trợ bạn trong mọi trường hợp",
  },
  {
    src: "/icon/payment-icon.png",
    title: "Thanh toán an toàn 100%",
    descriptions: "Chúng tôi đảm bảo tiền của bạn sẽ được tiết kiệm",
  },
  {
    src: "/icon/product-icon.png",
    title: "Chính sách hoàn tiền",
    descriptions: "Hoàn tiền nếu có sai sót từ chúng tôi",
  },
];
function Trademark() {
  return (
    <section className="trademark">
      <div className="trademark-signature">
        <div
            className="trademark-signature__left animate"
            data-animate="slideInRight 2s"
          >
            <img src="/img/home/highlight-logo.png" alt="4Unisex" />
        </div>
        <div
            className="trademark-signature__right animate"
            data-animate="slideInLeft 2s"
          >
            <div className="trademark-signature__right-top">
              <div className="trademark-signature__right-top__group1">
                <h3 className="trademark-signature__right-top__group1-sub-title">
                  TỪ CHÚNG TÔI
                </h3>
                <p className="trademark-signature__right-top__group1-title">
                  CHÚNG TÔI CÓ - BẠN NÊN BIẾT
                </p>
                <p className="trademark-signature__right-top__group1-desc">
                  Chúng tôi luôn hướng đến những sản phẩm mang tính an toàn, thẩm
                  mỹ cho bạn
                </p>
              </div>
              <div className="trademark-signature__right-top__group2">
                <div>
                  <h2>15</h2>
                  <p>NĂM KINH NGHIỆM</p>
                </div>
                <div>
                  <h2>22+</h2>
                  <p>ĐỐI TÁC CÙNG PHÁT TRIỂN</p>
                </div>
              </div>
            </div>
            <div className="trademark-signature__right-bottom">
              <img src="/img/home/bg-1.png" alt="" />
            </div>
        </div>
      </div>
      <Container fluid className="trademark-support animate" data-animate="slideInTop 2s">
        <Row>
          {contentBanner.map((item, index) => {
            return (
              <Col key={index} sm={12} md={6} xl={3} xxl={3} className="trademark-support__item">
                <img
                  className="trademark-support__item-icon"
                  src={item.src}
                  alt={item.src}
                />
                <div className="trademark-support__item-line"></div>
                <h4 className="trademark-support__item-title">{item.title}</h4>
                <p className="trademark-support__item-description">
                  {item.descriptions}
                </p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

export default Trademark;
