import React from "react";
import "./index.scss";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import CardProduct from "../cardProduct";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
const MonopolyProductHome = () => {
  return (
    <section className="monopoly-product-home">
      <div
        className="monopoly-product-home-head animate"
        data-animate="slideInRight 1s"
      >
        <div className="monopoly-product-home-head_title">
          <h3>sản phẩm độc quyền</h3>
          <p>cửa hàng</p>
        </div>
        <Link href={"/products"} className="monopoly-product-home-head_btn">
          Xem thêm{" "}
          <IoArrowForwardCircleOutline className="monopoly-product-home-head_btn-icon" />
        </Link>
      </div>
      <div
        className="monopoly-product-home-content animate"
        data-animate="slideInLeft 1s"
      >
        <Container fluid style={{ padding: 0, margin: 0, width: "100%" }}>
          <Row style={{ rowGap: 20 }}>
            <Col sm={6} md={6} lg={3} xl={3} xxl={3}>
              <CardProduct />
            </Col>
            <Col sm={6} md={6} lg={3} xl={3} xxl={3}>
              <CardProduct />
            </Col>
            <Col sm={6} md={6} lg={3} xl={3} xxl={3}>
              <CardProduct />
            </Col>
            <Col sm={6} md={6} lg={3} xl={3} xxl={3}>
              <CardProduct />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default MonopolyProductHome;
