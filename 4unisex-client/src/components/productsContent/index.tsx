import React, { useEffect, useRef, useState } from "react";
import "./index.scss";
import SidebarProductsContent from "./sidebarProductsContent";
import { message, Pagination, Select } from "antd";
import CardProduct from "../cardProduct";
import { Container, Row, Col } from "react-bootstrap";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Link from "next/link";
import ProductContentItem from "./productContentItem";
import ProductService from "@/services/product.service";
import { IoOptionsOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const productService = new ProductService();

const ProductsContent = () => {
  const [products, setProducts] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("");
  const isMount = useRef(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [openSideBar, setOpenSideBar] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const errorFunc = (text: string) => {
    messageApi.open({
      type: "error",
      content: text,
    });
  };
  const fetchAllProducts = async () => {
    try {
      const params: any = {
        page,
        perPage: 9,
      };
      if (sort) {
        params.sortByName = sort;
      }
      const res = await productService.getAllProducts(params);
      setTotalPage(res.data.total);
      setProducts(res.data.result);
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
    void fetchAllProducts();
  }, [page, sort]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setOpenSideBar(false);
      } else {
        setOpenSideBar(true);
      }
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="products-content">
      {screenWidth <= 768 && openSideBar === true ? (
        <div
          className="product-content-close-icon"
          onClick={() => setOpenSideBar(!openSideBar)}
        >
          <IoClose />
        </div>
      ) : null}
      {openSideBar === false && screenWidth <= 768 ? (
        <div
          className="product-content-option-icon"
          onClick={() => setOpenSideBar(!openSideBar)}
        >
          <IoOptionsOutline />
        </div>
      ) : null}
      {contextHolder}
      <div className="products-content-wrapper">
        {screenWidth > 768 || openSideBar === true ? (
          <div className="products-content-sidebar">
            <SidebarProductsContent />
          </div>
        ) : null}
        <div className="products-content-list">
          {products.length > 0 ? (
            <div className="products-content-list-header">
              <span>{`Hiển thị ${(page - 1) * 9 + 1} - ${Math.min(
                page * 9,
                totalPage
              )} của ${totalPage} sản phẩm `}</span>
              <Select
                variant="borderless"
                style={{ flex: 1, width: 120 }}
                defaultValue={""}
                className="products-content-list-header-select"
                onChange={(e: any) => {
                  console.log(e);
                  setSort(e);
                }}
                options={[
                  { value: "", label: "Sắp xếp mặc định" },
                  { value: "ASC", label: "Sắp xếp theo tên A-Z" },
                  { value: "DESC", label: "Sắp xếp theo tên Z-A" },
                ]}
              />
            </div>
          ) : (
            <></>
          )}
          <Container style={{ padding: 0 }}>
            <Row style={{ rowGap: 20 }}>
              {products.map((item: any) => {
                const prices = item?.productOptions?.map(
                  (option: any) => option.price
                );
                const minPrice = prices?.length ? Math.min(...prices) : 0;
                const maxPrice = prices?.length ? Math.max(...prices) : 0;
                return (
                  <Col xs={12} sm={12} md={12} lg={6} xl={4} xxl={3}>
                    <ProductContentItem
                      productItem={item}
                      minPrice={minPrice}
                      maxPrice={maxPrice}
                    />
                  </Col>
                );
              })}
            </Row>
          </Container>
          {totalPage > 9 ? (
            <div className="products-content-list-pagination">
              <Pagination
                defaultCurrent={1}
                showSizeChanger={false}
                total={totalPage}
                pageSize={9}
                current={page}
                onChange={(page) => {
                  setPage(page);
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductsContent;
