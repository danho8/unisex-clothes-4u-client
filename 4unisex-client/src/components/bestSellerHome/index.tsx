"use client";
import React, { useEffect, useRef, useState } from "react";
import "./index.scss";
import BestSellerItem from "../bestSellerItem";
import CategoryService from "@/services/category.service";
import { message } from "antd";
import { Container, Row, Col } from "react-bootstrap";

const categoryService = new CategoryService();

const BestSellerHome = () => {
  const [data, setData] = useState([]);
  const isMount = useRef(false);
  const [messageApi, contextHolder] = message.useMessage();

  const errorFunc = (text: string) => {
    messageApi.open({
      type: "error",
      content: text,
    });
  };

  const handleFetchCategories = async () => {
    try {
      const res = await categoryService.getAllCategory();
      const categoriesMain = res?.data?.data.filter((item: any) => {
        return item.parentId == "null" || item.parentId == null;
      });
      setData(categoriesMain);
    } catch (error: any) {
      if (error.message == "Network Error") {
        errorFunc("Server đang có lỗi xảy ra vui lòng thử lại sau !");
      }
    }
  };

  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    void handleFetchCategories();
  }, []);

  return (
    <section className="best-seller-home">
      {contextHolder}
      <div className="best-seller-home-content">
        <h3>bán chạy nhất</h3>
        <p>danh mục cho sự lựa chọn</p>
        <Container>
          <Row className="best-seller-home-content_items">
            {data.length > 0 ? (
              data.map((item: any) => {
                return (
                  <Col key={item} sm={12} md={6} xl={4} xxl={3}>
                    <BestSellerItem categoryItem={item} key={item.id} />
                  </Col>
                );
              })
            ) : (
              <></>
            )}
          </Row>
        </Container>

      </div>
    </section>
  );
};

export default BestSellerHome;
