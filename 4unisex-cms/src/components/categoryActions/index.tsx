import React, { useEffect, useState } from "react";
import "./index.scss";
import TitlePage from "../common/titlePage";
import { Button, Form, Input, message, Select, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import CategoryService from "../../services/category.service";
import { UploadOutlined } from "@ant-design/icons";
const categoryService = new CategoryService();

interface Props {
  form: any;
  handleUpdateData: () => void;
  hideModalCategoryForm: () => void;
  idEdit?: number;
  isUpdateForm?: boolean;
  handleCancelEdit?: () => void;
  idCategory?: any;
  isDisable: boolean;
}

const CategoryActions = (props: Props) => {
  const [categoriesMain, setCategoriesMain] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();
  const [fileList, setFileList] = useState<any[]>([]);
  const getCategoriesMain = async () => {
    try {
      const res = await categoryService.getCategoryMain();
      const data = res.data.data.map((item: any) => {
        return { value: item.id, label: "Danh mục con của " + item.name };
      });
      setCategoriesMain(data);
    } catch (error: any) {
      errorAxios(error?.response?.data?.message);
    }
  };
  const handleUploadChange = (info: any) => {
    const newFileList = info.fileList.slice(-1);
    setFileList(newFileList);
    return newFileList;
  };

  const onFinish = async (values: any) => {
    try {
      const data = {
        ...values,
        isMain: values.parentId == -1 ? true : false,
        parentId: values.parentId == -1 ? "" : values.parentId,
      };
      if (values.upload) {
        data.avatar = values.upload[0];
      }
      const formData = new FormData();
      formData.append("name", data?.name);
      formData.append("isMain", data?.isMain);
      formData.append("parentId", data?.parentId);
      formData.append("isActive", data?.isActive);
      formData.append("description", data?.description);
      if (fileList.length > 0) {
        formData.append("avatar", fileList[0]?.originFileObj);
      }
      if (props.isUpdateForm) {
        await categoryService.editCategory(props.idCategory, formData);
      } else {
        await categoryService.createCategory(formData);
      }

      props.hideModalCategoryForm();
      props.handleUpdateData();
      successAxios(props.isUpdateForm ? "Sửa thành công" : "Thêm thành công");
    } catch (error: any) {
      errorAxios("Có lỗi xảy ra");
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

  const uploadProps = {
    onRemove: (file: any) => {
      setFileList([]);
    },
    beforeUpload: (file: any) => {
      const isImage = file.type.startsWith("image/");
      if (!isImage) {
        message.error("Vui lòng chỉ chọn ảnh!");
      }
      return isImage ? true : Upload.LIST_IGNORE;
    },
    fileList,
    accept: "image/*",
    listType: "picture-card",
  };

  return (
    <Form
      form={props.form}
      size="large"
      layout="vertical"
      className="wrapper-product-actions-content-form"
      onFinish={onFinish}
    >
      {contextHolder}
      <div className="wrapper-product-actions-content-block">
        <TitlePage
          bgColor="#95A4FC"
          title={props.isUpdateForm ? "Sửa danh mục" : "Thêm danh mục"}
        />
        <Form.Item
          style={{ fontWeight: 600, marginTop: 10 }}
          name="name"
          label="Tên danh mục"
          rules={[
            {
              required: props.isUpdateForm ? false : true,
              message: "Vui lòng nhập tên sản phẩm!",
            },
          ]}
        >
          <Input placeholder="Nhập tên sản phẩm" />
        </Form.Item>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 10,
          }}
        >
          <Form.Item
            style={{ fontWeight: 600, flex: 1 }}
            name="parentId"
            label="Nhóm danh mục"
            rules={[
              {
                required: props.isUpdateForm ? false : true,
                message: "Vui lòng chọn danh mục!",
              },
            ]}
          >
            <Select
              disabled={props.isDisable}
              placeholder="Chọn danh mục"
              options={[
                { value: -1, label: "Danh mục lớn" },
                ...categoriesMain,
              ]}
            ></Select>
          </Form.Item>
          <Form.Item
            style={{ fontWeight: 600, flex: 1 }}
            name="isActive"
            label="Trạng thái"
            rules={[
              {
                required: props.isUpdateForm ? false : true,
                message: "Vui lòng chọn trạng thái!",
              },
            ]}
          >
            <Select
              placeholder="Chọn trạng thái hoạt động"
              options={[
                { value: true, label: "Đang hoạt động" },
                { value: false, label: "Đang ngừng hoạt động" },
              ]}
            ></Select>
          </Form.Item>
        </div>
        <Form.Item
          style={{ fontWeight: 600 }}
          label="Mô tả"
          name="description"
          rules={[
            {
              required: props.isUpdateForm ? false : true,
              message: "Vui lòng nhập vào mô tả sản phẩm",
            },
          ]}
        >
          <TextArea rows={4} placeholder="Nhập mô tả" />
        </Form.Item>

        <Form.Item
          name="upload"
          label="Ảnh đính kèm"
          valuePropName="fileList"
          getValueFromEvent={handleUploadChange}
          rules={[
            {
              required: props.isUpdateForm ? false : true,
              message: "Vui lòng tải lên một ảnh!",
            },
          ]}
        >
          <Upload {...(uploadProps as any)}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <UploadOutlined />
              <p style={{ color: "#7F8A98", fontWeight: 400, fontSize: 14 }}>
                Tải lên 1 hình ảnh mô tả danh mục
              </p>
            </div>{" "}
          </Upload>
        </Form.Item>
        <p></p>
        <div className="wrapper-product-actions-content-form_group-btn">
          <button className="add" type="submit">
            {props.isUpdateForm ? "Sửa danh mục" : "Thêm danh mục"}
          </button>
        </div>
      </div>
    </Form>
  );
};

export default CategoryActions;
