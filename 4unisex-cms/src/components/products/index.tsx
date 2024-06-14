import React, { useEffect, useRef, useState } from "react";
import TitlePage from "../common/titlePage";
import "./index.scss";
import HeaderTable from "../common/headerTable";
import { Modal, Table, TableColumnsType, message } from "antd";
import { FaRegEye } from "react-icons/fa";
import { CiEdit, CiTrash } from "react-icons/ci";
import { MdFormatListBulletedAdd } from "react-icons/md";
import ProductActions from "../productActions";
import { useForm } from "antd/es/form/Form";
import ProductDetailActions from "../productDetailActions";
import { useDispatch } from "react-redux";
import ProductService from "../../services/product.service";
import { hideLoading, showLoading } from "../../store/reducers/loading.reducer";
import ProductDetail from "./productDetail";

const productService = new ProductService();

const Products = () => {
  const [form] = useForm();
  const [form2] = useForm();
  const [productId, setProductId] = useState(null);
  const dispatch = useDispatch();
  const idProduct = useRef(-1);
  const idProductOption = useRef(-1);
  const [messageApi, contextHolder] = message.useMessage();
  const [isUpdate, setIsUpdate] = useState(false);
  const [products, setProducts] = useState([]);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [productForm, setProductForm] = useState(false);
  const [productDetailForm, setProductDetailForm] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [isEditProduct, setIsEditProduct] = useState(false);
  const [isEditDetailProduct, setIsEditDetailProduct] = useState(false);
  const [arrImgEdit, setArrImgEdit] = useState([]);
  const [closeModal, setCloseModal] = useState(false);
  const handleFilterArrImgEdit = (id: any) => {
    const arrFilter = arrImgEdit.filter((item: any) => {
      return item.image !== id;
    });
    setArrImgEdit(arrFilter);
  };

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const columns: TableColumnsType<any> = [
    {
      title: "Sản phẩm",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div className="wrapper-product-table-item">
          <p>{text}</p>
          <span>{record.nameCategory}</span>
        </div>
      ),
    },
    {
      title: "Mã sản phẩm",
      dataIndex: "sku",
      key: "sku",
      render: (text) => <strong>{text}</strong>,
    },
    {
      title: "Số lượng",
      dataIndex: "stock",
      key: "stock",
      render: (text, record) => {
        const totalQuantity = record?.productOptions?.reduce(
          (total: any, option: any) => total + option.quantity,
          0
        );
        return <strong>{totalQuantity}</strong>;
      },
    },
    {
      title: "Trạng thái",
      dataIndex: "stock",
      key: "status",
      render: (text, record) => {
        const totalQuantity = record?.productOptions?.reduce(
          (total: any, option: any) => total + option.quantity,
          0
        );
        const statusClass =
          totalQuantity > 0
            ? "wrapper-product-table-item-tag-valid"
            : "wrapper-product-table-item-tag-invalid";
        const statusText = totalQuantity > 0 ? "Còn hàng" : "Hết hàng";
        return <div className={statusClass}>{statusText}</div>;
      },
    },
    {
      title: "Tuỳ chọn",
      key: "options",
      render: (text, record) => (
        <div style={{ display: "flex", gap: 10 }}>
          <FaRegEye
            className="wrapper-products-icon-table"
            onClick={() => {
              idProduct.current = record.id;
              setShowDetail(true);
              scrollToTop();
            }}
          />
          <CiEdit
            onClick={() => {
              setProductForm(true);
              setIsEditProduct(true);
              form.setFieldsValue({
                name: record.name,
                categoryId: record.categoryId,
                description: record.description,
                isActive: record.isActive,
                isBestSelling: record.isBestSelling,
                isFave: record.isFave,
              });
              idProduct.current = record.id;
            }}
            className="wrapper-products-icon-table"
          />
          <MdFormatListBulletedAdd
            onClick={() => showModalProductDetailForm()}
            className="wrapper-products-icon-table"
          />
          <CiTrash
            onClick={() => {
              showModalConfirm();
              idProduct.current = record.id;
            }}
            className="wrapper-products-icon-table"
          />
        </div>
      ),
    },
  ];

  const columnDetail: TableColumnsType<any> = [
    {
      title: "Hình ảnh",
      dataIndex: "img",
      key: "img",
      render(value, record) {
        return (
          <img
            style={{
              objectFit: "cover",
              width: 60,
              height: 60,
              borderRadius: 14,
            }}
            src={
              record.productImages[0]
                ? record.productImages[0].imageUploaded
                : ""
            }
          />
        );
      },
      width: 100,
    },
    {
      title: "Kích thước",
      dataIndex: "size",
      key: "size",
      render(value, record, index) {
        return <p className="wrapper-product-table-detail-item">{value}</p>;
      },
      width: 180,
    },
    {
      title: "Màu sắc",
      dataIndex: "nameColor",
      key: "color",
      width: 350,
      render(value, record, index) {
        return <p className="wrapper-product-table-detail-item">{value}</p>;
      },
    },
    {
      title: "Tồn kho",
      dataIndex: "quantity",
      key: "stock",
      width: 200,
      render(value, record, index) {
        return <p className="wrapper-product-table-detail-item">{value}</p>;
      },
    },
    {
      title: "Giá nhập",
      dataIndex: "cost",
      key: "cost",
      render(value) {
        return (
          <p className="wrapper-product-table-detail-item">
            {value.toLocaleString("en-GB")} VND
          </p>
        );
      },
      width: 200,
    },
    {
      title: "Giá bán",
      dataIndex: "price",
      key: "price",
      render(value) {
        return (
          <p className="wrapper-product-table-detail-item">
            {value.toLocaleString("en-GB")} VND
          </p>
        );
      },
      width: 200,
    },
    {
      title: "Tuỳ chọn",
      render(record: any) {
        return (
          <div style={{ display: "flex", gap: 10 }}>
            <CiEdit
              onClick={() => {
                console.log(record);
                showModalProductDetailForm();
                setIsEditDetailProduct(true);
                setArrImgEdit(record.productImages);
                idProduct.current = record.parentId;
                idProductOption.current = record.id;
                form2.setFieldsValue({
                  size: record.size,
                  quantity: record.quantity,
                  cost: record.cost,
                  price: record.price,
                  nameColor: record.nameColor,
                });
              }}
              className="wrapper-products-icon-table"
            />
            <CiTrash
              onClick={() => {
                showModalConfirm();
                idProduct.current = record.parentId;
                idProductOption.current = record.id;
              }}
              className="wrapper-products-icon-table"
            />
          </div>
        );
      },
    },
  ];
  const showModalConfirm = () => {
    setOpenConfirm(true);
  };

  const hideModalConfirm = () => {
    setOpenConfirm(false);
  };

  const handleOkModalConfirm = async () => {
    try {
      const res =
        idProductOption.current !== -1
          ? await productService.deleteProductOption(
              idProduct.current,
              idProductOption.current
            )
          : await productService.deleteProduct(idProduct.current);
      if (res.status == 200) {
        setIsUpdate(!isUpdate);
        successAxios("Đã xoá thành công");
      } else {
        errorAxios("Có lỗi xảy ra vui lòng thử lại sau");
        setOpenConfirm(false);
      }
    } catch (error: any) {
      errorAxios(error.response.data.message);
    } finally {
      setOpenConfirm(false);
      idProductOption.current = -1;
    }
  };

  const showModalProductForm = () => {
    setProductForm(true);
  };

  const showModalProductDetailForm = () => {
    setProductDetailForm(true);
  };

  const hideModalProductForm = () => {
    form.resetFields();
    setProductForm(false);
    setIsEditProduct(false);
  };

  const hideModalProductDetailForm = () => {
    form2.resetFields();
    setProductDetailForm(false);
    setIsEditDetailProduct(false);
    setArrImgEdit([]);
    setCloseModal(!closeModal);
  };

  const getAllProduct = async () => {
    try {
      dispatch(showLoading());
      const res = await productService.getListProduct();
      setProducts(res.data.result);
    } catch (error: any) {
      errorAxios(error?.response?.data?.message);
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

  const successAxios = (text: string) => {
    messageApi.open({
      type: "success",
      content: text,
    });
  };

  useEffect(() => {
    void getAllProduct();
  }, [isUpdate]);

  const handleOkModalProductConfirm = () => {
    setProductForm(false);
  };
  return showDetail ? (
    <ProductDetail
      back={() => {
        setShowDetail(false);
      }}
      idProduct={idProduct.current}
    />
  ) : (
    <div className="wrapper-products">
      {contextHolder}
      <Modal
        width={"60%"}
        onCancel={hideModalProductForm}
        centered
        open={productForm}
        closeIcon={false}
        footer={false}
      >
        <ProductActions
          idProduct={idProduct.current}
          isEditProduct={isEditProduct}
          handleUpdateData={() => setIsUpdate(!isUpdate)}
          hideModalProductForm={hideModalProductForm}
          form={form}
        />
      </Modal>
      <Modal
        width={"60%"}
        onCancel={hideModalProductDetailForm}
        centered
        open={productDetailForm}
        closeIcon={false}
        footer={false}
      >
        <ProductDetailActions
          close={closeModal}
          handleFilterArrImgEdit={handleFilterArrImgEdit}
          idProduct={idProduct.current}
          idProductOption={idProductOption.current}
          arrImgEdit={arrImgEdit}
          isEditDetailProduct={isEditDetailProduct}
          handleUpdateData={() => setIsUpdate(!isUpdate)}
          hideModalProductForm={hideModalProductDetailForm}
          productId={productId}
          form={form2}
        />
      </Modal>
      <Modal
        title="Thông báo"
        open={openConfirm}
        closeIcon={false}
        onOk={handleOkModalConfirm}
        onCancel={hideModalConfirm}
        okText="Xác nhận"
        cancelText="Huỷ"
      >
        <p>Bạn có chắc chắn khi thực hiện thao tác này</p>
      </Modal>
      <TitlePage bgColor="#A1E3CB" title="Sản phẩm" />
      <div className="wrapper-products-content">
        <p className="wrapper-products-content-hint">
          <img src="/img/hint.png" alt="4Unisex" /> Mẹo tìm kiếm theo ID sản
          phẩm: Mỗi sản phẩm được cung cấp một ID duy nhất mà bạn có thể dựa vào
          đó để tìm chính xác sản phẩm mình cần.
        </p>
        <HeaderTable handleClick={showModalProductForm} />
        <Table
          rowKey="id"
          size="large"
          rowHoverable={false}
          columns={columns}
          dataSource={products}
          onRow={(record) => ({
            onClick: () => setProductId(record.id),
          })}
          pagination={{
            showSizeChanger: true,
            pageSizeOptions: [5, 10, 15],
            defaultPageSize: 5,
          }}
          expandable={{
            expandedRowRender: (record) => {
              const detailedData = record?.productOptions?.map(
                (option: any) => ({
                  ...option,
                  parentId: record.id,
                })
              );
              return (
                <Table
                  style={{ marginBottom: 10, marginRight: 100 }}
                  pagination={false}
                  size="small"
                  columns={columnDetail}
                  dataSource={detailedData}
                />
              );
            },
          }}
        />
      </div>
    </div>
  );
};

export default Products;
