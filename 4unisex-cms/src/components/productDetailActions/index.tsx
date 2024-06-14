import React, { useEffect, useRef, useState } from "react";
import "./index.scss";
import TitlePage from "../common/titlePage";
import {
  Form,
  Input,
  message,
  Select,
  Table,
  TableColumnsType,
  Tooltip,
  Upload,
} from "antd";
import { CloudUploadOutlined } from "@ant-design/icons";
import { CiEdit, CiTrash } from "react-icons/ci";
import ProductService from "../../services/product.service";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../../store/reducers/loading.reducer";

const productService = new ProductService();

const tagInputStyle: React.CSSProperties = {
  width: 64,
  height: 22,
  marginInlineEnd: 8,
  verticalAlign: "top",
};

interface DataType {
  key: React.Key;
  cost: number;
  price: number;
  quantity: number;
  size: string;
  nameColor: string;
  images: any[];
  productId: number;
}

const currentProductItems: DataType[] = [];

interface Props {
  form: any;
  productId: any;
  handleUpdateData: any;
  hideModalProductForm: () => void;
  isEditDetailProduct: boolean;
  arrImgEdit: any;
  idProduct: any;
  idProductOption: any;
  handleFilterArrImgEdit: (id: any) => void;
  close: boolean;
}

const ProductDetailActions = (props: Props) => {
  const [productItems, setProductItems] = useState(currentProductItems);
  const [editLocal, setEditLocal] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [fileList, setFileList] = useState<any[]>([]);
  const dispatch = useDispatch();
  const indexLocal = useRef(-1);

  const columns: TableColumnsType<DataType> = [
    {
      title: "Hình ảnh",
      dataIndex: "images",
      key: "images",
      width: 100,
      render(value) {
        return (
          <img
            width={60}
            height={60}
            style={{ borderRadius: 14 }}
            src={value[0].thumbUrl}
            alt=""
          />
        );
      },
    },
    {
      title: "Kích thước",
      dataIndex: "size",
    },
    {
      title: "Màu",
      dataIndex: "nameColor",
    },
    {
      title: "Giá bán",
      dataIndex: "price",
    },
    {
      title: "Tồn kho",
      dataIndex: "quantity",
    },
    {
      title: "Tuỳ chọn",
      render(value: any, record: any, index: number) {
        return (
          <div style={{ display: "flex", gap: 10 }}>
            <Tooltip title="Sửa chi tiết">
              <CiEdit
                onClick={() => {
                  props.form.setFieldsValue({
                    nameColor: productItems[index].nameColor,
                    size: productItems[index].size,
                    price: productItems[index].price,
                    cost: productItems[index].cost,
                    quantity: productItems[index].quantity,
                  });
                  indexLocal.current = index;
                  setEditLocal(true);
                }}
                className="wrapper-products-icon-table"
              />
            </Tooltip>
            <Tooltip title="Xoá chi tiết">
              <CiTrash
                onClick={() => {
                  const filterProduct = productItems.filter(
                    (item, indexItem) => indexItem !== index
                  );
                  setProductItems(filterProduct);
                }}
                className="wrapper-products-icon-table"
              />
            </Tooltip>
          </div>
        );
      },
    },
  ];

  const onFinish = async (values: any) => {
    const data = {
      ...values,
      productId: props.productId,
    };
    try {
      if (editLocal) {
        const newItems = productItems.map((item, index) => {
          if (index == indexLocal.current) {
            return data;
          }
          return item;
        });
        setProductItems(newItems);
        props.form.resetFields();
        setEditLocal(false);
      } else {
        if (props.isEditDetailProduct) {
          const arrImg = props.arrImgEdit.map((item: any) => item.image);
          const formData = new FormData();
          formData.append("id", props.idProductOption);
          formData.append("publicIds", arrImg);
          formData.append("cost", data.cost);
          formData.append("productId", props.idProduct);
          formData.append("price", data.price);
          formData.append("quantity", data.quantity);
          formData.append("size", data.size);
          formData.append("nameColor", data.nameColor);
          if (data.images) {
            data?.images.forEach((image: any) => {
              if (image.originFileObj) {
                formData.append("images", image.originFileObj);
              }
            });
          } else {
            formData.append("images", "");
          }

          await productService.editProductOption(formData);
          props.handleUpdateData();
          props.hideModalProductForm();
          setProductItems([]);
        } else {
          setProductItems((prevItems) => [...prevItems, data]);
          props.form.resetFields();
        }
      }
    } catch (error: any) {
      console.log(error)
      errorAxios(error?.response?.data?.message);
    }
  };

  const onCreateProductOptions = async () => {
    try {
      dispatch(showLoading());
      const operations = productItems.map(async (item: any) => {
        const formData = new FormData();
        formData.append("cost", item.cost);
        formData.append("productId", item.productId);
        formData.append("price", item.price);
        formData.append("quantity", item.quantity);
        formData.append("size", item.size);
        formData.append("nameColor", item.nameColor);
        item.images.forEach((image: any) => {
          if (image.originFileObj) {
            formData.append("images", image.originFileObj);
          }
        });

        await productService.createProductoptions(formData);
      });

      await Promise.all(operations);
      props.handleUpdateData();
      props.hideModalProductForm();
      setProductItems([]);
    } catch (error: any) {
      dispatch(hideLoading());
      errorAxios(error.response.data.message);
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

  const normFile = (e: any) => {
    const newFileList = e.fileList.slice(-1);
    setFileList(newFileList);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  useEffect(() => {
    return () => {
      setProductItems([]);
      setEditLocal(false);
    };
  }, [props.close]);

  return (
    <div className="wrapper-product-details-actions">
      {contextHolder}
      <TitlePage
        bgColor="#95A4FC"
        title={
          props.isEditDetailProduct
            ? "Sửa chi tiết sản phẩm"
            : "Thêm chi tiết sản phẩm"
        }
      />
      <Form
        style={{ marginTop: 20 }}
        form={props.form}
        size="middle"
        layout="vertical"
        className="wrapper-product-actions-content-form"
        onFinish={onFinish}
      >
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
            name="size"
            label="Kích thước"
            rules={[{ required: true, message: "Vui lòng chọn kích thước!" }]}
          >
            <Select
              placeholder="Chọn kích thước"
              options={[
                { value: "S", label: "S" },
                { value: "M", label: "M" },
                { value: "L", label: "L" },
                { value: "XL", label: "XL" },
                { value: "XXL", label: "XXL" },
              ]}
            ></Select>
          </Form.Item>
          <Form.Item
            style={{ fontWeight: 600, flex: 1 }}
            name="quantity"
            label="Tồn kho"
            rules={[{ required: true, message: "Vui lòng nhập số lượng!" }]}
          >
            <Input placeholder="Nhập số lượng" />
          </Form.Item>
          <Form.Item
            style={{ fontWeight: 600, flex: 1 }}
            name="cost"
            label="Giá nhập"
            rules={[{ required: true, message: "Vui lòng nhập giá sản phẩm!" }]}
          >
            <Input placeholder="Nhập giá sản phẩm" />
          </Form.Item>
          <Form.Item
            style={{ fontWeight: 600, flex: 1 }}
            name="price"
            label="Giá bán"
            rules={[{ required: true, message: "Vui lòng nhập giá sản phẩm!" }]}
          >
            <Input placeholder="Nhập giá sản phẩm" />
          </Form.Item>
        </div>
        <Form.Item
          style={{ fontWeight: 600, marginTop: 10 }}
          name="nameColor"
          label="Màu sản phẩm"
          rules={[
            {
              required: true,
              max: 20,
              message:
                "Vui lòng nhập vào màu của sản phẩm và không quá 20 kí tự",
            },
          ]}
        >
          <Input placeholder="Nhập mô tả màu sản phẩm" />
        </Form.Item>
        {props.isEditDetailProduct ? (
          <div style={{ margin: "20px 0" }}>
            <h4 style={{ marginBottom: 10 }}>Hình ảnh đã lưu</h4>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              {props.arrImgEdit?.map((item: any) => {
                return (
                  <div key={item.id} className="arr-img-edit-item">
                    <img
                      style={{ borderRadius: 14, width: 80, height: 80 }}
                      src={item.imageUploaded}
                      alt="4Unisex"
                    />
                    <div className="arr-img-edit-icon">
                      <Tooltip title="Xoá hình ảnh này">
                        <CiTrash
                          onClick={() => {
                            props.handleFilterArrImgEdit(item.image);
                          }}
                        />
                      </Tooltip>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <></>
        )}

        <Form.Item
          name="images"
          style={{ fontWeight: 600 }}
          label="Hình ảnh"
          valuePropName="fileList"
          rules={[
            {
              required: props.isEditDetailProduct ? false : true,
              validator: async (_, value) => {
                if (props.isEditDetailProduct) {
                  return;
                }
                if (value === undefined) {
                  await Promise.reject("Vui lòng tải lên hình ảnh");
                }
                return;
              },
            },
          ]}
          getValueFromEvent={normFile}
        >
          <Upload fileList={fileList} listType="picture-card">
            <button style={{ border: 0, background: "none" }} type="button">
              <CloudUploadOutlined style={{ fontSize: 30, color: "#1055DB" }} />
              <p
                style={{
                  marginTop: 10,
                  color: "#7F8A98",
                  fontWeight: 400,
                  fontSize: 14,
                }}
              >
                {props.isEditDetailProduct
                  ? "Bạn có thể thêm ảnh cập nhật mới"
                  : "Tải lên ít nhất 1 hình ảnh mô tả chi tiết sản phẩm"}
              </p>
            </button>
          </Upload>
        </Form.Item>
        <div className="wrapper-product-actions-content-form_group-btn">
          <button className="add" type="submit">
            {props.isEditDetailProduct || editLocal ? "Sửa chi tiết" : "Thêm"}
          </button>
        </div>
      </Form>
      {props.isEditDetailProduct ? (
        <></>
      ) : (
        <>
          {" "}
          <div
            style={{
              background: "#979797",
              width: "100%",
              height: 0.5,
              margin: "15px 0",
            }}
          ></div>
          <Table
            size="small"
            columns={columns}
            dataSource={productItems}
            pagination={false}
            scroll={{ y: 300 }}
          />
          <div className="wrapper-product-details-btn-save">
            <button className="add" onClick={() => onCreateProductOptions()}>
              Lưu
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetailActions;
