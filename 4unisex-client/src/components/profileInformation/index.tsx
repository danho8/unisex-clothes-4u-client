import React from "react";
import "./index.scss";
import {
  Button,
  Checkbox,
  Form,
  FormProps,
  Input,
  Select,
  DatePicker,
} from "antd";
import dayjs from "dayjs";

function ProfileInformation() {
  const onFinish: FormProps<any>["onFinish"] = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<any>["onFinishFailed"] = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <section className="p-i-content">
      <h3>Thông tin tài khoản</h3>
      <Form
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        size="large"
        layout="vertical"
        style={{ width: "100%" }}
      >
        <div className="p-i-content-group">
          <Form.Item
            className="p-i-content-group-label"
            label="Họ và tên"
            name="name"
            rules={[{ required: true, message: "Vui lòng nhập vào họ và tên" }]}
            style={{ flex: 1, fontWeight: 600 }}
          >
            <Input
              className="p-i-content-group-input"
              placeholder="Nhập họ và tên"
            />
          </Form.Item>

          <Form.Item
            className="p-i-content-group-label"
            style={{ flex: 1, fontWeight: 600 }}
            label="Số điện thoại"
            name="password"
            rules={[
              { required: true, message: "Vui lòng nhập vào số điện thoại" },
            ]}
          >
            <Input
              className="p-i-content-group-input"
              placeholder="Số điện thoại người nhận"
            />
          </Form.Item>
        </div>
        <div className="p-i-content-group">
          <Form.Item
            className="p-i-content-group-label"
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Vui lòng nhập vào email" },
              { type: "email", message: "Sai định dạng email" },
            ]}
            style={{ flex: 1, fontWeight: 600 }}
          >
            <Input
              className="p-i-content-group-input"
              placeholder="Nhập email của bạn"
            />
          </Form.Item>

          <Form.Item
            className="p-i-content-group-label"
            style={{ flex: 1, fontWeight: 600 }}
            label="Ngày sinh"
            name="date"
            rules={[
              { required: true, message: "Vui lòng chọn ngày sinh" },
              { type: "date", message: "Sai định dạng ngày sinh" },
            ]}
          >
            <DatePicker
              placeholder="Chọn"
              className="p-i-content-group-input date-picker"
              presets={[
                { label: "Yesterday", value: dayjs().add(-1, "d") },
                { label: "Last Week", value: dayjs().add(-7, "d") },
                { label: "Last Month", value: dayjs().add(-1, "month") },
              ]}
            />
          </Form.Item>
        </div>
        <Form.Item
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button className="p-i-content-group-btn" htmlType="submit">
            Lưu thay đổi
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
}

export default ProfileInformation;
