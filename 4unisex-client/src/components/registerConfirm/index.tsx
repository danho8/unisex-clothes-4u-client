"use client";
import React, { useEffect, useState } from "react";
import "./index.scss";
import AuthService from "@/services/auth.service";
import useNavigation from "@/hooks/useNavigate";

const authService = new AuthService();
const RegisterConfirmComponent = () => {
  const [isRegisterStatus, setIsRegisterStatus] = useState(-1);
  const [isRegisterErrMsg, setIsRegisterErrMsg] = useState("");
  const { navigateTo } = useNavigation();

  const checkConfirmMail = async () => {
    try {
      const params = new URLSearchParams(window.location.search);
      await authService.registerConfirm(
        params.get("email")!,
        params.get("token")!
      );
      setIsRegisterStatus(1);
    } catch (error: any) {
      setIsRegisterStatus(2);
      setIsRegisterErrMsg(error.response.data.message);
    }
  };

  const [queryParams, setQueryParams] = useState({ email: "", token: "" });

  useEffect(() => {
    checkConfirmMail();
  }, []);

  return (
    <section className="auth-component">
      {isRegisterStatus === 1 && (
        <div className="wrapper-status-register wrapper-register-success">
          <span className="icon">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.00872 12.8337L1.52344 6.34844L4.35186 3.52002L10.8371 10.0053H41.3206C42.4252 10.0053 43.3206 10.9007 43.3206 12.0053C43.3206 12.1999 43.2922 12.3936 43.2364 12.58L38.4364 28.58C38.1826 29.426 37.4038 30.0054 36.5206 30.0054H12.0087V34.0054H34.0088V38.0054H10.0087C8.90414 38.0054 8.00872 37.1098 8.00872 36.0054V12.8337ZM12.0087 14.0053V26.0054H35.0326L38.6326 14.0053H12.0087ZM11.0087 46.0054C9.35186 46.0054 8.00872 44.6622 8.00872 43.0054C8.00872 41.3484 9.35186 40.0054 11.0087 40.0054C12.6656 40.0054 14.0087 41.3484 14.0087 43.0054C14.0087 44.6622 12.6656 46.0054 11.0087 46.0054ZM35.0088 46.0054C33.3518 46.0054 32.0088 44.6622 32.0088 43.0054C32.0088 41.3484 33.3518 40.0054 35.0088 40.0054C36.6656 40.0054 38.0088 41.3484 38.0088 43.0054C38.0088 44.6622 36.6656 46.0054 35.0088 46.0054Z"
                fill="#F02A4E"
              />
            </svg>
          </span>
          <span className="title">TRẢI NGHIỆM MUA SẮM THOẢI MÁI!</span>
          <span className="desc">
            Tài khoản của bạn đã được xác nhận. Bạn có thể đăng nhập vào 4UNISEX
            và tận hưởng việc mua sắm thoải mái.
          </span>
          <button onClick={() => navigateTo("/auth")} className="btn-action">
            Đăng nhập ngay!
          </button>
        </div>
      )}
      {isRegisterStatus === 2 && (
        <div className="wrapper-status-register wrapper-register-fail">
          <span className="icon">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 4C35.0456 4 44 12.9543 44 24C44 25.4532 43.845 26.8702 43.5506 28.2354L39.9862 24.671C39.9954 24.4484 40 24.2248 40 24C40 15.1634 32.8366 8 24 8C15.1634 8 8 15.1634 8 24C8 32.8366 15.1634 40 24 40C26.6046 40 29.0638 39.3776 31.2372 38.2736C31.547 38.7656 31.916 39.2298 32.3432 39.6568C32.9478 40.2614 33.625 40.749 34.3468 41.1196C31.3284 42.9474 27.7872 44 24 44C12.9543 44 4 35.0456 4 24C4 12.9543 12.9543 4 24 4ZM38 28.3432L40.8284 31.1716C42.3906 32.7336 42.3906 35.2664 40.8284 36.8284C39.2664 38.3906 36.7336 38.3906 35.1716 36.8284C33.6804 35.3374 33.6128 32.962 34.9682 31.3904L35.1716 31.1716L38 28.3432ZM24 30C26.9328 30 29.5706 31.2624 31.3998 33.2736L29.5098 34.9922C27.93 34.365 26.036 34 24 34C21.964 34 20.07 34.365 18.4901 34.9922L16.6002 33.2736C18.4294 31.2624 21.0672 30 24 30ZM17 20C18.6569 20 20 21.3432 20 23C20 24.6568 18.6569 26 17 26C15.3431 26 14 24.6568 14 23C14 21.3432 15.3431 20 17 20ZM31 20C32.6568 20 34 21.3432 34 23C34 24.6568 32.6568 26 31 26C29.3432 26 28 24.6568 28 23C28 21.3432 29.3432 20 31 20Z"
                fill="#F02A4E"
              />
            </svg>
          </span>
          <span className="title">LỖI! XÁC NHẬN TÀI KHOẢN THẤT BẠI!</span>
          <span className="desc">{isRegisterErrMsg}</span>
          <button className="btn-action">Liên hệ ngay!</button>
        </div>
      )}
    </section>
  );
};

export default RegisterConfirmComponent;
