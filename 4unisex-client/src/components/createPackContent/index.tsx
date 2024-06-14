import React from "react";
import "./index.scss";
import { Button, Checkbox, Form, FormProps, Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";

const CreatePackContent = () => {
  const onFinish: FormProps<any>["onFinish"] = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<any>["onFinishFailed"] = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <section className="create-pack-content">
      <h3>Thông tin khách hàng</h3>
      <Form
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        size="large"
        layout="vertical"
        style={{ width: "100%" }}
      >
        <div className="create-pack-content-group">
          <Form.Item
            label="Họ và tên"
            name="name"
            rules={[{ required: true, message: "Vui lòng nhập vào họ và tên" }]}
            style={{ flex: 1, fontWeight: 600 }}
          >
            <Input
              className="create-pack-content-group-input"
              placeholder="Nhập họ và tên"
            />
          </Form.Item>

          <Form.Item
            style={{ flex: 1, fontWeight: 600 }}
            label="Số điện thoại"
            name="password"
            rules={[
              { required: true, message: "Vui lòng nhập vào số điện thoại" },
            ]}
          >
            <Input
              className="create-pack-content-group-input"
              placeholder="Số điện thoại người nhận"
            />
          </Form.Item>
        </div>
        <div className="create-pack-content-group">
          <Form.Item
            label="Tỉnh/Thành phố"
            name="city"
            rules={[
              { required: true, message: "Vui lòng chọn tỉnh/thành phố" },
            ]}
            style={{ flex: 1, fontWeight: 600 }}
          >
            <Select
              className="create-pack-content-group-input"
              placeholder="Chọn tỉnh/thành phố"
              options={[{ value: 1, label: "Đà Nẵng" }]}
            />
          </Form.Item>

          <Form.Item
            label="Quận/Huyện"
            name="province"
            rules={[{ required: true, message: "Vui lòng chọn quận/huyện" }]}
            style={{ flex: 1, fontWeight: 600 }}
          >
            <Select
              className="create-pack-content-group-input"
              placeholder="Chọn quận/huyện"
              options={[{ value: 1, label: "Hải Châu" }]}
            />
          </Form.Item>
        </div>
        <div className="create-pack-content-group">
          <Form.Item
            label="Phường/Xã"
            name="province"
            rules={[{ required: true, message: "Vui lòng chọn phường/xã" }]}
            style={{ flex: 1, fontWeight: 600 }}
          >
            <Select
              className="create-pack-content-group-input"
              placeholder="Chọn phường/xã"
              options={[{ value: 1, label: "Vĩnh Trung" }]}
            />
          </Form.Item>
          <Form.Item
            style={{ flex: 1, fontWeight: 600 }}
            label="Địa chỉ"
            name="address"
            rules={[{ required: true, message: "Vui lòng nhập địa chỉ nhà" }]}
          >
            <Input
              className="create-pack-content-group-input"
              placeholder="Nhập địa chỉ nhà"
            />
          </Form.Item>
        </div>
        <Form.Item
          style={{ flex: 1, fontWeight: 600 }}
          label="Yêu cầu sản phẩm từ khách hàng"
          name="description"
        >
          <TextArea
            className="create-pack-content-group-input"
            placeholder="Nhập mô tả"
          />
        </Form.Item>
        <Form.Item
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button className="create-pack-content-group-btn" htmlType="submit">
            Gửi thông tin
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};

export default CreatePackContent;
