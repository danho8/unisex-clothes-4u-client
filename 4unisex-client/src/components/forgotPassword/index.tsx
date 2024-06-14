"use client";

import React from "react";
import "./index.scss";
import { Button, Form, Input } from "antd";
import Link from "next/link";

const ForgotPasswordComponent = () => {
  return (
    <section className="forgot-password">
      <div className="forgot-password-title">
        <span>Đặt lại mật khẩu của bạn</span>
        <p>
          Quên mật khẩu? Vui lòng nhập địa chỉ email của bạn. Bạn sẽ nhận được
          liên kết để tạo mật khẩu mới qua email.
        </p>
      </div>
      <div className="auth-component-login">
        <Form
          className="auth-component-login-form"
          initialValues={{ remember: true }}
          autoComplete="off"
          layout="vertical"
          size="large"
        >
          <Form.Item
            className="auth-component-login-form-item"
            style={{ color: "var(--white-color)" }}
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập vào email",
              },
            ]}
          >
            <Input
              placeholder="Nhập email"
              className="auth-component-login-form-item-input"
            />
          </Form.Item>

          <Form.Item className="auth-component-login-form-item">
            <Button
              className="auth-component-login-form-item-btn"
              htmlType="submit"
            >
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>

        <div
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: 14, fontWeight: 400 }}>
            Bạn có mật khẩu không?{" "}
          </span>
          <Link href={"/auth"}>Đăng nhập</Link>
        </div>
      </div>
    </section>
  );
};

export default ForgotPasswordComponent;
