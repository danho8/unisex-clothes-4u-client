import React, { useState } from "react";
import "./index.scss";
import { Button, DatePicker, Form, FormProps, Input } from "antd";
import PaymentMethods from "../paymentMethods";

function MyAccount() {
  const [navigateCart, setNavigateCart] = useState(false);
  const onFinish: FormProps<any>["onFinish"] = (values: any) => {
    moveCartPayment();
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<any>["onFinishFailed"] = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const moveCartPayment = () => {
    setNavigateCart(true);
  };

  return (
    <section className="my-account">
      <h3>Phương thức thanh toán</h3>
      {navigateCart ? (
        <PaymentMethods />
      ) : (
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
              label="Số thẻ"
              name="cardNumber"
              rules={[
                { required: true, message: "Vui lòng nhập số thẻ" },
                { pattern: /^[0-9]*$/, message: "Chỉ nhập số thẻ" },
              ]}
              style={{ flex: 1, fontWeight: 600 }}
            >
              <Input
                className="p-i-content-group-input"
                placeholder="Nhập số thẻ"
              />
            </Form.Item>
            <Form.Item
              className="p-i-content-group-label"
              label="Họ và tên chủ thẻ"
              name="CardholderName"
              rules={[
                { required: true, message: "Vui lòng nhập ngày hết hạn" },
              ]}
              style={{ flex: 1, fontWeight: 600 }}
            >
              <Input
                className="p-i-content-group-input"
                placeholder="Nhập họ và tên"
              />
            </Form.Item>
          </div>
          <div className="p-i-content-group">
            <Form.Item
              className="p-i-content-group-label"
              label="Ngày hết hạn"
              name="expirationDate"
              rules={[
                { required: true, message: "Vui lòng nhập ngày hết hạn" },
              ]}
              style={{ flex: 1, fontWeight: 600 }}
            >
              {/* <Input className="p-i-content-group-input" placeholder="MM/YY" /> */}
              <DatePicker
                format={"MM-YYYY"}
                placeholder="MM/YY"
                style={{ width: "100%", padding: "12px 10px" }}
              />
            </Form.Item>
            <Form.Item
              className="p-i-content-group-label"
              label="Mã CVV"
              name="CVVCode"
              rules={[
                { required: true, message: "Vui lòng nhập mã CVV" },
                // validate mã cvv
                { pattern: /^[0-9]*$/, message: "Chỉ nhập số" },
                { min: 3, message: "Nhập đúng 3 số" },
                { max: 3, message: "Nhập đúng 3 số" },
              ]}
              style={{ flex: 1, fontWeight: 600 }}
            >
              <Input
                className="p-i-content-group-input"
                placeholder="Nhập mã"
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
              Thêm
            </Button>
          </Form.Item>
        </Form>
      )}
    </section>
  );
}

export default MyAccount;
