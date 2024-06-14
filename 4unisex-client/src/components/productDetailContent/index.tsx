"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import "./index.scss";
import { InputNumber, message } from "antd";
import { FaPlus } from "react-icons/fa";
import ProductContentItem from "../productsContent/productContentItem";
import Gallery from "../gallery";
import ProductService from "@/services/product.service";
import { useParams } from "next/navigation";

const size = ["S", "M", "L", "XL", "XXL"];

const productService = new ProductService();

const ProductDetailContent = () => {
  const [mainData, setMainData] = useState<any>();
  const [arrImg, setArrImg] = useState([]);
  const [suggestProduct, setSuggestProduct] = useState([]);
  const [arrInformation, setArrInformation] = useState([]);
  const [colors, setColors] = useState<any[]>([]);
  const [colorActive, setColorActive] = useState("");
  const [sizeActive, setSizeActive] = useState("");
  const [orderNum, setOrderNum] = useState(1);
  const [tab, setTab] = useState(1);
  const param = useParams();
  const isMount = useRef(false);
  const [messageApi, contextHolder] = message.useMessage();

  const errorFunc = (text: string) => {
    messageApi.open({
      type: "error",
      content: text,
    });
  };
  const handleFetchApi = async () => {
    try {
      const detailProduct = await productService.getDetailsProduct(param.id);
      const suggestProduct = await productService.getSuggestProduct(
        detailProduct.data.data[0].categoryId
      );

      const filterSuggestProduct = suggestProduct.data.data.filter(
        (item: any) => {
          return item.id != param.id;
        }
      );

      const reduceImg = detailProduct.data.data[0]?.productOptions.reduce(
        (total: any, curValue: any) => {
          const imgMap = curValue.productImages.map((item: any) => {
            return {
              original: item.imageUploaded,
              thumbnail: item.imageUploaded,
            };
          });

          total.push(...imgMap);
          return total;
        },
        []
      );

      const arrColor = detailProduct.data.data[0].productOptions.reduce(
        (total: any, curValue: any) => {
          const data = {
            nameColor: curValue.nameColor,
            price: curValue.price,
            quantity: curValue.quantity,
            size: curValue.size,
          };

          total.push(data);
          return total;
        },
        []
      );
      const colorsFilter: any[] = [];
      arrColor.forEach((item: any) => {
        const check = colorsFilter.findIndex(
          (item1) => item1 == item.nameColor
        );
        if (check == -1) {
          colorsFilter.push(item.nameColor);
        }
      });
      setColors(colorsFilter);
      setArrInformation(arrColor);
      setColorActive(colorsFilter[0]);
      const sizeActive = arrColor.find((item: any) => {
        return item.nameColor == colorsFilter[0];
      });
      setSizeActive(sizeActive.size);

      setArrImg(reduceImg);
      setSuggestProduct(filterSuggestProduct);
      setMainData(detailProduct.data.data[0]);
    } catch (error: any) {
      if (error.message == "Network Error") {
        errorFunc("Server đang có lỗi xảy ra vui lòng thử lại sau !");
      }
    }
  };

  useEffect(() => {
    const filterArr: any[] = arrInformation.filter((item: any) => {
      return item.nameColor == colorActive;
    });
    setSizeActive(filterArr[0]?.size);
  }, [colorActive]);

  const dataProductOption: any = useMemo(() => {
    const res: any = arrInformation.find((item: any) => {
      return item.size == sizeActive && item.nameColor == colorActive;
    });

    if (orderNum > res?.quantity) {
      setOrderNum(1);
    }
    return res;
  }, [sizeActive, colorActive, arrInformation]);

  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    void handleFetchApi();
  }, []);

  return (
    <section className="product-detail-content">
      {contextHolder}
      <div className="product-detail-content-info">
        <Gallery mainData={arrImg} />
        <section className="product-detail-content-info-item">
          <h3 className="product-detail-content-info-item-label">
            {mainData?.name}
          </h3>
          <p className="product-detail-content-info-item-quantity">
            Đã bán 12.3k
          </p>
          <p className="product-detail-content-info-item-price">
            {dataProductOption?.price.toLocaleString("en-GB")} vnđ
          </p>
          <h5 className="product-detail-content-info-item-sub-label">
            Màu sắc
          </h5>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {colors.map((item) => {
              return (
                <span
                  key={item}
                  onClick={() => {
                    setColorActive(item);
                  }}
                  className={
                    item == colorActive
                      ? "product-detail-content-info-item-options active"
                      : "product-detail-content-info-item-options"
                  }
                >
                  {item}
                </span>
              );
            })}
          </div>
          <h5 className="product-detail-content-info-item-sub-label">
            Kích thước
          </h5>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {size.map((item) => {
              const arrFilter: any[] = arrInformation.filter(
                (item: any) => item.nameColor == colorActive
              );
              const check = arrFilter.findIndex((item1: any) => {
                return item1.size == item;
              });
              return (
                <span
                  style={
                    check < 0 ? { opacity: 0.2, cursor: "not-allowed" } : {}
                  }
                  key={item}
                  onClick={() => {
                    if (check >= 0) {
                      setSizeActive(item);
                    }
                  }}
                  className={
                    sizeActive == item
                      ? "product-detail-content-info-item-options active"
                      : "product-detail-content-info-item-options"
                  }
                >
                  {item}
                </span>
              );
            })}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              margin: "20px 0",
            }}
          >
            {dataProductOption?.quantity > 0 ? (
              <InputNumber
                min={1}
                max={dataProductOption?.quantity}
                size="large"
                value={orderNum}
                onChange={(e) => {
                  setOrderNum(e);
                }}
                defaultValue={1}
              />
            ) : (
              <></>
            )}
            <p className="product-detail-content-info-item-quantity">
              {dataProductOption?.quantity || 0} sản phẩm có sẵn
            </p>
          </div>
          <button className="product-detail-content-info-item-btn">
            Thêm giỏ hàng <FaPlus />
          </button>
        </section>
      </div>
      <div className="product-detail-content-info-item-desc">
        <div className="product-detail-content-info-item-desc-group">
          <h3
            onClick={() => {
              setTab(1);
            }}
            className={
              tab === 1
                ? "product-detail-content-info-item-label tab active"
                : "product-detail-content-info-item-label tab"
            }
          >
            mô tả sản phẩm
          </h3>
          <h3
            onClick={() => {
              setTab(2);
            }}
            className={
              tab === 2
                ? "product-detail-content-info-item-label tab active"
                : "product-detail-content-info-item-label tab"
            }
          >
            Đánh giá
          </h3>
        </div>
        <div>
          {tab == 1 ? (
            <p style={{ fontSize: 16, fontWeight: 400 }}>
              {mainData?.description}
            </p>
          ) : (
            ""
          )}
          {tab == 2 ? (
            <p style={{ fontSize: 16, fontWeight: 400 }}>Đánh giá</p>
          ) : (
            ""
          )}
        </div>
      </div>
      <div>
        <h3 className="product-detail-content-info-item-label hint">
          Những sản phẩm tương tự
        </h3>
        <div className="product-detail-content-info-same_product ">
          {suggestProduct.map((item: any) => {
            const prices = item?.productOptions?.map(
              (option: any) => option.price
            );
            const minPrice = prices?.length ? Math.min(...prices) : 0;
            const maxPrice = prices?.length ? Math.max(...prices) : 0;
            return (
              <ProductContentItem
                key={item.id}
                productItem={item}
                maxPrice={maxPrice}
                minPrice={minPrice}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductDetailContent;
