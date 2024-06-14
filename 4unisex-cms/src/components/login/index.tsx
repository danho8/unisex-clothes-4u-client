import React, { ChangeEvent, useState } from "react";
import "./index.scss";
import { message, Switch } from "antd";
import handleValidateEmail from "../../reusing/functions/isEmail";
import AuthService from "../../services/auth.service";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { hideLoading, showLoading } from "../../store/reducers/loading.reducer";
import { FIRST_LOGIN } from "../../reusing/constants/constants";

interface FormLogin {
  email: string;
  password: string;
  rememberMe: boolean;
}

const authService = new AuthService();

const Login = () => {
  const [formData, setFormData] = useState<FormLogin>({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [validateEmail, setValidateEmail] = useState("");
  const [validatePassword, setValidatePassword] = useState("");
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const errorAxios = (text: string) => {
    messageApi.open({
      type: "error",
      content: text,
    });
  };
  const dispatch: AppDispatch = useDispatch();

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name == "password") {
      if (value.length < 8) {
        setValidatePassword("Vui lòng nhập ít nhất 8 kí tự");
      }
      if (value.length > 20) {
        setValidatePassword("Vui lòng nhập ít hơn hoặc bằng 20 kí tự");
      }
      if (value.length > 0 && value.length >= 8 && value.length <= 20)
        setValidatePassword("");
    }
    if (name == "email") {
      if (!handleValidateEmail(formData.email)) {
        setValidateEmail("Vui lòng đúng định dạng email");
      }
      if (value.length > 0 && handleValidateEmail(formData.email))
        setValidateEmail("");
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (formData.email == "" || formData.password == "") {
      if (formData.email == "")
        setValidateEmail("Vui lòng nhập vào trường này");
      if (formData.password == "") {
        setValidatePassword("Vui lòng nhập vào trường này");
      }
      return;
    } else {
      if (
        !handleValidateEmail(formData.email) ||
        formData.password.length < 8 ||
        formData.password.length > 20
      ) {
        if (!handleValidateEmail(formData.email)) {
          setValidateEmail("Vui lòng đúng định dạng email");
        }
        if (formData.password.length < 8) {
          setValidatePassword("Vui lòng nhập ít nhất 8 kí tự");
        }
        if (formData.password.length > 20) {
          setValidatePassword("Vui lòng nhập ít hơn hoặc bằng 20 kí tự");
        }
      } else {
        try {
          dispatch(showLoading());
          const res = await authService.login(
            formData.email,
            formData.password
          );
          localStorage.setItem("token", res.data.access_token);
          if (!localStorage.getItem("first-login")) {
            localStorage.setItem("first-login", FIRST_LOGIN);
          }
          navigate("/dashboard");
          setValidateEmail("");
          setValidatePassword("");
          setFormData({
            email: "",
            password: "",
            rememberMe: false,
          });
        } catch (error: any) {
          errorAxios(error.response.data.message);
        } finally {
          dispatch(hideLoading());
        }
      }
    }
  };

  return (
    <div className="wrapper-login-content">
      {contextHolder}
      <img src="/img/logo-sidebar.png" loading="lazy" alt="4Unisex" />
      <form className="wrapper-login-form" onSubmit={handleSubmit}>
        <div className="wrapper-login-form_item">
          <label htmlFor="email">Email</label>
          <input
            value={formData.email}
            type="text"
            id="email"
            name="email"
            onChange={handleChangeInput}
            placeholder="Nhập vào email"
          />
          {validateEmail !== "" ? <span>{validateEmail}</span> : ""}
        </div>
        <div className="wrapper-login-form_item">
          <label htmlFor="password">Mật khẩu</label>
          <input
            value={formData.password}
            type="password"
            id="password"
            name="password"
            onChange={handleChangeInput}
            placeholder="Nhập vào mật khẩu"
          />
          {validatePassword !== "" ? <span>{validatePassword}</span> : ""}
        </div>
        <div className="wrapper-login-form_action">
          <div className="wrapper-login-form_action_save">
            <Switch
              size="small"
              checked={formData.rememberMe}
              onChange={(checked) =>
                setFormData({ ...formData, rememberMe: checked })
              }
            />{" "}
            <span>Ghi nhớ tài khoản</span>
          </div>
          <button className="wrapper-login-form_action_forgot">
            Quên mật khẩu
          </button>
        </div>
        <button type="submit" className="wrapper-login-form_btn">
          Đăng nhập
        </button>
      </form>
    </div>
  );
};

export default Login;
