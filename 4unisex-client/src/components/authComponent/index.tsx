"use client";
import { Button, Form, FormProps, Input, message } from "antd";
import React, { useEffect, useState } from "react";
import "./index.scss";
import Link from "next/link";
import AuthService from "@/services/auth.service";
import useNavigation from "@/hooks/useNavigate";

const authService = new AuthService();

interface Props {
  showLoading: () => void;
  hideLoading: () => void;
}

const AuthComponent = (props: Props) => {
  const [tab, setTab] = useState(1);
  const [messageApi, contextHolder] = message.useMessage();
  const [isRegister, setIsRegister] = useState(false);
  const [returnUrl, setReturnUrl] = useState("");

  const { navigateTo } = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  const errorAxios = (text: string) => {
    messageApi.open({
      type: "error",
      content: text,
    });
  };

  const successAxios = (text: string) => {
    messageApi.success(text);
  };
  const onLoginFinish: FormProps<any>["onFinish"] = async (values) => {
    props.showLoading();
    try {
      const res = await authService.login(values.email, values.password);
      successAxios("Đăng nhập thành công!");
      localStorage.setItem("auth-token", res.data.access_token);
      navigateTo(returnUrl);
    } catch (error: any) {
      errorAxios(error.response.data.message);
    } finally {
      props.hideLoading();
    }
  };

  const onRegisterFinish: FormProps<any>["onFinish"] = async (values) => {
    try {
      await authService.register(values.email, values.password);
      successAxios("Đăng ký thành công!");
      setIsRegister(true);
    } catch (error: any) {
      errorAxios(error.response.data.message);
    }
  };

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const returnUrl = decodeURIComponent(query.get("returnUrl") || "/");
    setReturnUrl(returnUrl);
  }, []);

  return isRegister ? (
    <section className="auth-component">
      <div className="wrapper-status-register">
        <span className="icon">
          <svg
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.0151 1.2073C14.2119 0.29986 11.1646 1.56208 9.82411 4.18588L8.21255 7.34022C8.02107 7.71502 7.71623 8.01984 7.34145 8.21132L4.18709 9.82288C1.56329 11.1634 0.301093 14.2106 1.20851 17.0138L2.29943 20.3838C2.42905 20.7842 2.42905 21.2154 2.29943 21.6158L1.20851 24.9858C0.301093 27.789 1.56331 30.8362 4.18709 32.1766L7.34145 33.7882C7.71623 33.9798 8.02107 34.2846 8.21255 34.6594L9.82411 37.8136C11.1646 40.4374 14.2119 41.6996 17.0151 40.7922L20.3851 39.7014C20.7855 39.5718 21.2165 39.5718 21.6169 39.7014L24.9869 40.7922C27.7901 41.6996 30.8375 40.4374 32.1779 37.8136L33.7895 34.6594C33.9809 34.2846 34.2857 33.9798 34.6605 33.7882L37.8149 32.1766C40.4387 30.8362 41.7009 27.789 40.7935 24.9858L39.7025 21.6158C39.5729 21.2154 39.5729 20.7842 39.7025 20.3838L40.7935 17.0138C41.7009 14.2106 40.4387 11.1634 37.8149 9.82288L34.6605 8.21132C34.2857 8.01984 33.9809 7.715 33.7895 7.34022L32.1779 4.18588C30.8375 1.56208 27.7901 0.29986 24.9869 1.2073L21.6169 2.2982C21.2165 2.42782 20.7855 2.42782 20.3851 2.2982L17.0151 1.2073ZM13.3862 6.00572C13.833 5.13112 14.8487 4.7104 15.7831 5.01286L19.1531 6.10378C20.3543 6.49264 21.6477 6.49264 22.8489 6.10378L26.2189 5.01286C27.1533 4.7104 28.1691 5.13112 28.6159 6.00572L30.2275 9.16008C30.8019 10.2844 31.7163 11.1989 32.8407 11.7734L35.9951 13.3849C36.8697 13.8318 37.2905 14.8475 36.9879 15.7819L35.8971 19.152C35.5081 20.3532 35.5081 21.6464 35.8971 22.8476L36.9879 26.2176C37.2905 27.152 36.8697 28.1678 35.9951 28.6146L32.8407 30.2262C31.7163 30.8006 30.8019 31.7152 30.2275 32.8394L28.6159 35.9938C28.1691 36.8684 27.1533 37.2892 26.2189 36.9866L22.8489 35.8958C21.6477 35.507 20.3543 35.507 19.1531 35.8958L15.7831 36.9866C14.8487 37.2892 13.833 36.8684 13.3862 35.9938L11.7746 32.8394C11.2002 31.7152 10.2857 30.8006 9.16131 30.2262L6.00695 28.6146C5.13235 28.1678 4.71161 27.152 5.01409 26.2176L6.10501 22.8476C6.49385 21.6464 6.49385 20.3532 6.10501 19.152L5.01409 15.7819C4.71161 14.8475 5.13235 13.8318 6.00695 13.3849L9.16129 11.7734C10.2857 11.1989 11.2002 10.2844 11.7746 9.16008L13.3862 6.00572ZM10.5202 20.5146L19.0055 28.9998L33.1477 14.8577L30.3193 12.0293L19.0055 23.343L13.3486 17.686L10.5202 20.5146Z"
              fill="#F02A4E"
            />
          </svg>
        </span>
        <span className="title">
          TÀI KHOẢN CỦA BẠN ĐÃ ĐƯỢC ĐĂNG KÝ THÀNH CÔNG!
        </span>
        <span className="desc">
          Để đảm bảo tính bảo mật cho tài khoản của bạn, vui lòng kiểm tra email
          và nhấp vào link để kích hoạt tài khoản của bạn ngay bây giờ.
        </span>
        {/* <button
          onClick={() => window.open("https://mail.google.com/", "_blank")}
          className="btn-action"
        >
          Xác nhận ngay!
        </button> */}
      </div>
    </section>
  ) : (
    <section className="auth-component">
      {contextHolder}
      <div className="auth-component-tabs">
        <span
          onClick={() => {
            setTab(1);
          }}
          className={tab == 1 ? "active" : ""}
        >
          Đăng nhập
        </span>
        <span
          onClick={() => {
            setTab(2);
          }}
          className={tab == 2 ? "active" : ""}
        >
          Đăng ký
        </span>
      </div>
      {tab == 1 ? (
        <div className="auth-component-login">
          <Form
            className="auth-component-login-form"
            initialValues={{ remember: true }}
            autoComplete="off"
            layout="vertical"
            size="large"
            onFinish={onLoginFinish}
          >
            <Form.Item
              className="auth-component-login-form-item"
              style={{ color: "var(--white-color)" }}
              label="Tài khoản/email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập vào tài khoản/email",
                },
                {
                  type: "email",
                  message: "Vui lòng đúng định dạng email",
                },
              ]}
            >
              <Input
                placeholder="Nhập tài khoản/email"
                className="auth-component-login-form-item-input"
              />
            </Form.Item>

            <Form.Item
              className="auth-component-login-form-item"
              style={{ color: "var(--white-color)" }}
              label="Mật khẩu"
              name="password"
              rules={[
                { required: true, message: "Vui lòng nhập mật khẩu" },
                { min: 8, message: "Vui lòng nhập ít nhất 8 ký tự" },
              ]}
            >
              <Input.Password
                placeholder="Nhập mật khẩu"
                className="auth-component-login-form-item-input"
              />
            </Form.Item>
            <p
              style={{
                textAlign: "left",
                width: "100%",
                fontSize: 12,
                color: "var(--text-sub-color)",
                margin: "20px 0 0",
                padding: 0,
                fontWeight:500
              }}
            >
              (*) Mật khẩu phải lớn hơn hoặc bằng 8 ký tự, bao gồm 1 chữ in hoa,
              1 ký tự đặc biệt và 1 số
            </p>
            <Form.Item className="auth-component-login-form-item">
              <Button
                className="auth-component-login-form-item-btn"
                htmlType="submit"
              >
                Đăng nhập
              </Button>
            </Form.Item>
            <Link
              href={"/auth/forgot-password"}
              className="auth-component-login-form-forgot"
            >
              Quên mật khẩu
            </Link>
          </Form>
        </div>
      ) : (
        ""
      )}
      {tab == 2 ? (
        <div className="auth-component-register">
          <Form
            className="auth-component-login-form"
            initialValues={{ remember: true }}
            autoComplete="off"
            layout="vertical"
            size="large"
            onFinish={onRegisterFinish}
          >
            {/*<Form.Item*/}
            {/*  className="auth-component-login-form-item"*/}
            {/*  style={{ color: "var(--white-color)" }}*/}
            {/*  label="Họ và tên"*/}
            {/*  name="name"*/}
            {/*  rules={[*/}
            {/*    { required: true, message: "Vui lòng nhập vào họ và tên" },{min: 8, message:"Vui lòng nhập ít nhất 8 ký tự"}*/}
            {/*  ]}*/}
            {/*>*/}
            {/*  <Input*/}
            {/*    placeholder="Nhập họ và tên"*/}
            {/*    className="auth-component-login-form-item-input"*/}
            {/*  />*/}
            {/*</Form.Item>*/}
            <Form.Item
              className="auth-component-login-form-item"
              style={{ color: "var(--white-color)" }}
              label="Tài khoản/email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập vào tài khoản/email",
                },
                {
                  type: "email",
                  message: "Vui lòng đúng định dạng email",
                },
              ]}
            >
              <Input
                placeholder="Nhập tài khoản/email"
                className="auth-component-login-form-item-input"
              />
            </Form.Item>

            <Form.Item
              className="auth-component-login-form-item"
              style={{ color: "var(--white-color)" }}
              label="Mật khẩu"
              name="password"
              rules={[
                { required: true, message: "Vui lòng nhập mật khẩu" },
                { min: 8, message: "Vui lòng nhập ít nhất 8 ký tự" },
              ]}
            >
              <Input.Password
                placeholder="Nhập mật khẩu"
                className="auth-component-login-form-item-input"
              />
            </Form.Item>
            <p
              style={{
                textAlign: "left",
                width: "100%",
                fontSize: 12,
                color: "var(--text-sub-color)",
                margin: "20px 0 0",
                padding: 0,
                fontWeight:500
              }}
            >
              (*) Mật khẩu phải lớn hơn hoặc bằng 8 ký tự, bao gồm 1 chữ in hoa,
              1 ký tự đặc biệt và 1 số
            </p>
            <Form.Item className="auth-component-login-form-item">
              <Button
                className="auth-component-login-form-item-btn"
                htmlType="submit"
              >
                Đăng ký
              </Button>
            </Form.Item>
          </Form>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default AuthComponent;
