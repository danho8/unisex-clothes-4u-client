import React, { useEffect, useMemo, useRef, useState } from "react";
import ProductService from "../../../services/product.service";
import { useForm } from "antd/es/form/Form";
import { useDispatch } from "react-redux";
import { message, TableColumnsType } from "antd";
import { FaRegEye } from "react-icons/fa";
import { CiEdit, CiTrash } from "react-icons/ci";
import { MdFormatListBulletedAdd } from "react-icons/md";
import TitlePage from "../../common/titlePage";
import HeaderTable from "../../common/headerTable";
import "./index.scss";
import { EditOutlined } from "@ant-design/icons";
import {
  hideLoading,
  showLoading,
} from "../../../store/reducers/loading.reducer";
const productService = new ProductService();

interface Props {
  idProduct: number;
  back: () => void;
}

interface IProduct {
  id?: number;
  name?: string;
  categoryId?: number;
  slug?: string;
  sku?: string;
  description?: string;
  view?: number;
  isActive?: boolean;
  isFave?: boolean;
  isBestSelling?: boolean;
  createdById?: number;
  updatedById?: any;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: any;
  productOptions?: IProductOption[];
  totalQuantity?: number;
  nameCategory?: string;
}
interface IProductOption {
  id: number;
  productId: number;
  nameColor: string;
  slug: string;
  size: string;
  quantity: number;
  cost: number;
  price: number;
  isActive: boolean;
  createdById: number;
  updatedById?: any;
  createdAt: string;
  updatedAt: string;
  deletedAt?: any;
  productImages: IProductImage[];
}
interface IProductImage {
  id: number;
  productOptionId: number;
  image: string;
  imageUploaded: string;
  createdById: number;
  updatedById?: any;
  createdAt: string;
  updatedAt: string;
  deletedAt?: any;
  back?: () => void;
}

const initDataProduct: IProduct = {};

const ProductDetail = (props: Props) => {
  const [form] = useForm();
  const [form2] = useForm();
  const [productId, setProductId] = useState(null);
  const dispatch = useDispatch();
  const idProductOption = useRef(-1);
  const [messageApi, contextHolder] = message.useMessage();
  const [isUpdate, setIsUpdate] = useState(false);
  const [product, setProduct] = useState(initDataProduct);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [productForm, setProductForm] = useState(false);
  const [productDetailForm, setProductDetailForm] = useState(false);
  // const showModalConfirm = () => {
  //   setOpenConfirm(true);
  // };
  //
  // const hideModalConfirm = () => {
  //   setOpenConfirm(false);
  // };
  //
  // const handleOkModalConfirm = async () => {
  //   try {
  //     const res =
  //       idProductOption.current !== -1
  //         ? await productService.deleteProductOption(
  //             idProduct.current,
  //             idProductOption.current
  //           )
  //         : await productService.deleteProduct(idProduct.current);
  //     if (res.status == 200) {
  //       setIsUpdate(!isUpdate);
  //       successAxios("Đã xoá thành công");
  //     } else {
  //       errorAxios("Có lỗi xảy ra vui lòng thử lại sau");
  //       setOpenConfirm(false);
  //     }
  //   } catch (error: any) {
  //     errorAxios(error.response.data.message);
  //   } finally {
  //     setOpenConfirm(false);
  //     idProductOption.current = -1;
  //   }
  // };
  //
  // const showModalProductForm = () => {
  //   setProductForm(true);
  // };
  //
  // const showModalProductDetailForm = () => {
  //   setProductDetailForm(true);
  // };
  //
  // const hideModalProductForm = () => {
  //   form.resetFields();
  //   setProductForm(false);
  // };
  //
  // const hideModalProductDetailForm = () => {
  //   form2.resetFields();
  //   setProductDetailForm(false);
  // };
  //
  const getProductDetail = async () => {
    try {
      dispatch(showLoading());
      const res = await productService.getProductDetail(props.idProduct);
      console.log(res);
      const totalQuantity = res?.data.result.productOptions.reduce(
        (sum: number, item: IProductOption) => sum + item.quantity,
        0
      );
      res.data.result.totalQuantity = totalQuantity;
      setProduct(res.data.result);
    } catch (error: any) {
      errorAxios(error.response.data.message);
    } finally {
      dispatch(hideLoading());
    }
  };

  const errorAxios = (text: string) => {
    messageApi.open({
      type: "error",
      content: text,
    });
  };

  useEffect(() => {
    void getProductDetail();
  }, [isUpdate]);

  const prices = useMemo(() => {
    return product?.productOptions?.map((option: any) => option.price);
  }, [product]);

  return (
    <div className="wrapper-product-detail">
      {contextHolder}
      <TitlePage
        onClickBack={() => {
          props.back();
        }}
        isRouterBack={true}
        bgColor="#A1E3CB"
        title="Sản phẩm"
      />
      <div className="wrapper-product-detail-content">
        <div className="content">
          <span className="title">Thông tin chung</span>
          <div className="container">
            <div className="desc-detail">
              <div className="item-detail">
                <span className="title">Tên sản phẩm</span>
                <span className="desc">{product.name}</span>
              </div>
              <div className="item-detail">
                <span className="title">Mã sản phẩm</span>
                <span className="desc">{product.sku}</span>
              </div>
              <div className="item-detail">
                <span className="title">Thuộc danh mục</span>
                <span className="desc">{product.nameCategory}</span>
              </div>
              <div className="item-detail">
                <span className="title">Mô tả sản phẩm</span>
                <span className="desc">{product.description}</span>
              </div>
            </div>
            <div className="desc-detail group-action">
              <div className="desc-group">
                <div className="item-detail">
                  <span className="title">Giá bán trung bình</span>
                  <span className="desc">
                    {prices?.length
                      ? Math.min(...prices).toLocaleString("en-GB")
                      : 0}{" "}
                    VNĐ -{" "}
                    {prices?.length
                      ? Math.max(...prices).toLocaleString("en-GB")
                      : 0}{" "}
                    VNĐ
                  </span>
                </div>
                <div className="item-detail">
                  <span className="title">Tổng số lượng sản phẩm</span>
                  <span className="desc">
                    {product.totalQuantity
                      ? product.totalQuantity.toLocaleString("en-GB")
                      : 0}
                  </span>
                </div>
                <div className="item-detail">
                  <span className="title">Trạng thái</span>
                  <span className="desc">
                    <div
                      className={
                        product?.totalQuantity! > 0
                          ? "tag-valid"
                          : "tag-invalid"
                      }
                    >
                      {product?.totalQuantity! > 0 ? "Còn hàng" : "Hết hàng"}
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <span className="title">Chi tiết từng sản phẩm</span>
          {product.productOptions?.length ? (
            product.productOptions.map((item: IProductOption, index) => (
              <div key={index} className="container child">
                <div className="desc-detail">
                  <div className="item-detail">
                    <span className="title">Kích thước</span>
                    <span className="desc">{item.size}</span>
                  </div>
                  <div className="item-detail">
                    <span className="title">Màu sắc</span>
                    <span className="desc">{item.nameColor}</span>
                  </div>
                  <div className="item-detail">
                    <span className="title">Số lượng tồn kho</span>
                    <span className="desc">
                      {item.quantity.toLocaleString("en-GB")}
                    </span>
                  </div>
                </div>
                <div className="desc-detail group-action">
                  <div className="desc-group">
                    <div className="item-detail">
                      <span className="title">Giá nhập</span>
                      <span className="desc">
                        {item.cost.toLocaleString("en-GB")} VNĐ
                      </span>
                    </div>
                    <div className="item-detail">
                      <span className="title">Giá bán</span>
                      <span className="desc">
                        {item.price.toLocaleString("en-GB")} VNĐ
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p
              style={{
                textAlign: "center",
                marginTop: 40,
                fontWeight: 500,
                color: "#7F8A98",
                fontSize: 14,
              }}
            >
              Chưa thêm các chi tiết sản phẩm
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
