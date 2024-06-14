import React, { useEffect, useState } from "react";
import "./index.scss";
import TitlePage from "../common/titlePage";
import { Form, Input, Select, message } from "antd";
import ProductService from "../../services/product.service";
import CategoryService from "../../services/category.service";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../../store/reducers/loading.reducer";
const productService = new ProductService();
const categoryService = new CategoryService();

const { TextArea } = Input;

interface Props {
  form?: any;
  hideModalProductForm: () => void;
  handleUpdateData?: any;
  isEditProduct: boolean;
  idProduct: any;
}

const ProductActions = (props: Props) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [categoriesMain, setCategoriesMain] = useState([]);
  const dispatch = useDispatch();

  const getCategoriesMain = async () => {
    try {
      const res = await categoryService.getCategoryChild();
      const data = res.data.data.map((item: any) => {
        return { value: item.id, label: item.name };
      });
      setCategoriesMain(data);
    } catch (error: any) {
      errorAxios(error.response.data.message);
    }
  };

  const onFinish = async (values: any) => {
    try {
      dispatch(showLoading());
      if (props.isEditProduct) {
        await productService.editProduct({ ...values, id: props.idProduct });
        props.hideModalProductForm();
        props.handleUpdateData();
        successAxios("Sửa thành công");
      } else {
        await productService.createProduct(values);
        props.hideModalProductForm();
        props.handleUpdateData();
        successAxios("Thêm thành công");
      }
    } catch (error: any) {
      dispatch(hideLoading());
      errorAxios(error.response.data.message);
    }
  };

  const successAxios = (text: string) => {
    messageApi.open({
      type: "success",
      content: text,
    });
  };

  const errorAxios = (text: string) => {
    messageApi.open({
      type: "error",
      content: text,
    });
  };

  useEffect(() => {
    getCategoriesMain();
  }, []);

  return (
    <Form
      form={props?.form}
      size="large"
      layout="vertical"
      className="wrapper-product-actions-content-form"
      onFinish={onFinish}
    >
      {contextHolder}
      <div className="wrapper-product-actions-content-block">
        <TitlePage
          bgColor="#95A4FC"
          title={props.isEditProduct ? "Sửa sản phẩm" : "Thêm sản phẩm"}
        />
        <Form.Item
          style={{ fontWeight: 600, marginTop: 10 }}
          name="name"
          label="Tên sản phẩm"
          rules={[{ required: true, message: "Vui lòng nhập tên sản phẩm!" }]}
        >
          <Input placeholder="Nhập tên sản phẩm" />
        </Form.Item>
        <Form.Item
          style={{ fontWeight: 600 }}
          name="categoryId"
          label="Danh mục"
          rules={[{ required: true, message: "Vui lòng chọn danh mục!" }]}
        >
          <Select
            placeholder="Chọn danh mục"
            options={[...categoriesMain]}
          ></Select>
        </Form.Item>
        {props.isEditProduct ? (
          <>
            <Form.Item
              style={{ fontWeight: 600 }}
              name="isActive"
              label="Trạng thái hoạt động"
              rules={[{ required: true, message: "Vui lòng chọn trạng thái!" }]}
            >
              <Select
                placeholder="Chọn trạng thái"
                options={[
                  { value: true, label: "Đang hoạt động" },
                  { value: false, label: "Tạm ngưng hoạt động" },
                ]}
              ></Select>
            </Form.Item>
            <Form.Item
              style={{ fontWeight: 600 }}
              name="isFave"
              label="Sản phẩm được yêu thích"
              rules={[{ required: true, message: "Vui lòng chọn !" }]}
            >
              <Select
                placeholder="Chọn trạng thái"
                options={[
                  { value: true, label: "Sản phẩm yêu thích" },
                  { value: false, label: "Sản phẩm bình thường" },
                ]}
              ></Select>
            </Form.Item>
            <Form.Item
              style={{ fontWeight: 600 }}
              name="isBestSelling"
              label="Sản phẩm bán chạy"
              rules={[
                { required: true, message: "Vui lòng chọn sản phẩm bán chạy!" },
              ]}
            >
              <Select
                placeholder="Chọn trạng thái"
                options={[
                  { value: true, label: "Sản phẩm bán chạy" },
                  { value: false, label: "Sản phẩm bình thường" },
                ]}
              ></Select>
            </Form.Item>
          </>
        ) : (
          <></>
        )}
        <Form.Item
          style={{ fontWeight: 600 }}
          label="Mô tả"
          name="description"
          rules={[
            { required: true, message: "Vui lòng nhập vào mô tả sản phẩm" },
          ]}
        >
          <TextArea rows={4} placeholder="Nhập mô tả" />
        </Form.Item>
        <div className="wrapper-product-actions-content-form_group-btn">
          <button className="add" type="submit">
            {props.isEditProduct ? "Sửa sản phẩm" : "Thêm sản phẩm"}
          </button>
          {/*<button*/}
          {/*  className="draft"*/}
          {/*  type="submit"*/}
          {/*  onClick={() => {*/}
          {/*    setSubmitType("draft");*/}
          {/*  }}*/}
          {/*>*/}
          {/*  Lưu nháp*/}
          {/*</button>*/}
        </div>
      </div>
      {/* <div className="wrapper-product-actions-content-block">
          <Form.Item
            style={{ fontWeight: 600 }}
            name="size"
            label="Kích thước"
            rules={[{ required: true, message: "Vui lòng chọn kích thước" }]}
          >
            <Select
              placeholder="Chọn kích thước"
              options={[
                { value: 1, label: "L" },
                { value: 2, label: "M" },
                { value: 3, label: "S" },
              ]}
            ></Select>
          </Form.Item>
          <Form.Item
            style={{ fontWeight: 600 }}
            name="attribute"
            label="Thuộc tính"
            rules={[{ required: true, message: "Vui lòng chọn thuộc tính" }]}
          >
            <Select
              placeholder="Chọn thuộc tính"
              options={[
                { value: 1, label: "Option1" },
                { value: 2, label: "Option2" },
                { value: 3, label: "Option3" },
              ]}
            ></Select>
          </Form.Item>
          <Form.Item
            style={{ fontWeight: 600 }}
            name="color"
            label="Màu sắc"
            rules={[{ required: true, message: "Vui lòng chọn màu sắc" }]}
          >
            <Radio.Group>
              <Radio.Button value="black">Đen</Radio.Button>
              <Radio.Button value="white">Trắng</Radio.Button>
              <Radio.Button value="blue">Xanh</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            style={{ fontWeight: 600 }}
            label={
              <p>
                <span style={{ color: "#ff6e6e" }}>*</span> Hình ảnh
              </p>
            }
            valuePropName="fileList"
            rules={[
              {
                required: true,
                validator: async (_, value) => {
                  if (value === undefined) {
                    await Promise.reject("Vui lòng tải lên hình ảnh");
                  }
                  await Promise.resolve();
                },
              },
            ]}
            getValueFromEvent={normFile}
          >
            <Upload action="/upload.do" listType="picture-card">
              <button style={{ border: 0, background: "none" }} type="button">
                <CloudUploadOutlined
                  style={{ fontSize: 30, color: "#1055DB" }}
                />
              </button>
            </Upload>
          </Form.Item>
          <div className="wrapper-product-actions-content-form_group-btn">
            <button
              className="add"
              type="submit"
              onClick={() => {
                setSubmitType("add");
              }}
            >
              Thêm sản phẩm
            </button>
            <button
              className="draft"
              type="submit"
              onClick={() => {
                setSubmitType("draft");
              }}
            >
              Lưu nháp
            </button>
          </div>
        </div> */}
    </Form>
  );
};

export default ProductActions;
