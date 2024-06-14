import React, { useEffect, useRef, useState } from "react";
import "./index.scss";
import TitlePage from "../common/titlePage";
import HeaderTable from "../common/headerTable";
import { message, Modal, Table, TableColumnsType } from "antd";
import { CiEdit, CiTrash } from "react-icons/ci";
import CategoryActions from "../categoryActions";
import CategoryService from "../../services/category.service";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../../store/reducers/loading.reducer";
import { useForm } from "antd/es/form/Form";

const categoryService = new CategoryService();

const Category = () => {
  const [form] = useForm();
  const [categoryForm, setCategoryForm] = useState(false);
  const [categories, setCategories] = useState([]);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [isUpdateForm, setIsUpdateForm] = useState(false);
  const [isDisable, setIsDisable] = useState(false);
  const idCategory = useRef(-1);
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();
  const [isUpdate, setIsUpdate] = useState(false);
  const columns: TableColumnsType<any> = [
    {
      title: "Danh mục",
      render(record) {
        return (
          <div style={{ display: "flex", alignItems: "center", gap: 30 }}>
            <img
              width={60}
              height={60}
              style={{ borderRadius: 14 }}
              src={record.avatarUploaded}
              alt=""
            />
            <p style={{ fontWeight: 500 }}>{record.name}</p>
          </div>
        );
      },
    },
    {
      title: "Thuộc nhóm",
      render(record) {
        let data = "";
        if (record.isMain) {
          data = "Danh mục lớn";
        } else {
          data = record.parentName;
        }
        return <p style={{ fontWeight: 500 }}>{data}</p>;
      },
    },
    {
      title: "Trạng thái",
      render(record) {
        return (
          <div
            className={
              record.isActive
                ? "wrapper-product-table-item-tag-valid"
                : "wrapper-product-table-item-tag-invalid"
            }
          >
            {record.isActive ? "Đang hoạt động" : "Đang ngừng hoạt động"}
          </div>
        );
      },
      width: 250,
    },
    {
      title: "Tuỳ chọn",
      render(record: any) {
        return (
          <div style={{ display: "flex", gap: 10 }}>
            <CiEdit
              onClick={() => {
                idCategory.current = record.id;
                showModalCategoryForm();
                form.setFieldsValue({
                  parentId: record.isMain ? -1 : record.parentId,
                  name: record.name,
                  isActive: record.isActive,
                  description: record.description,
                });
                if (record.isMain) {
                  setIsDisable(true);
                } else {
                  setIsDisable(false);
                }
                setIsUpdateForm(true);
              }}
              className="wrapper-products-icon-table"
            />
            <CiTrash
              onClick={() => {
                showModalConfirm();
                idCategory.current = record.id;
              }}
              className="wrapper-products-icon-table"
            />
          </div>
        );
      },
    },
  ];
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

  const getAllCategory = async () => {
    try {
      dispatch(showLoading());
      const res = await categoryService.getCategory();
      setCategories(res.data.data);
    } catch (error: any) {
      errorAxios(error.response.data.message);
    } finally {
      dispatch(hideLoading());
    }
  };

  useEffect(() => {
    void getAllCategory();
  }, [isUpdate]);

  const showModalCategoryForm = () => {
    setCategoryForm(true);
  };

  const hideModalCategoryForm = () => {
    form.resetFields();
    setCategoryForm(false);
    setIsUpdateForm(false);
    setIsDisable(false);
  };

  const handleOkModalCategoryForm = () => {
    setCategoryForm(false);
  };

  const showModalConfirm = () => {
    setOpenConfirm(true);
  };

  const hideModalConfirm = () => {
    setOpenConfirm(false);
  };

  const handleCancelEdit = () => {
    setIsUpdateForm(false);
  };

  const handleOkModalConfirm = async () => {
    try {
      const res = await categoryService.deleteCategory(idCategory.current);
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
    }
  };

  return (
    <div className="wrapper-category">
      {contextHolder}
      <Modal
        width={"60%"}
        onCancel={hideModalCategoryForm}
        centered
        open={categoryForm}
        closeIcon={false}
        footer={false}
      >
        <CategoryActions
          isDisable={isDisable}
          idCategory={idCategory.current}
          handleCancelEdit={handleCancelEdit}
          isUpdateForm={isUpdateForm}
          form={form}
          handleUpdateData={getAllCategory}
          hideModalCategoryForm={hideModalCategoryForm}
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
      <TitlePage bgColor="#A1E3CB" title="Danh mục" />
      <div className="wrapper-category-content">
        <HeaderTable handleClick={showModalCategoryForm} />
        <Table
          columns={columns}
          dataSource={categories}
          pagination={{ pageSizeOptions: [5, 10, 15] }}
        />
      </div>
    </div>
  );
};

export default Category;
