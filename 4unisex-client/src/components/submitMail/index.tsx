import React from "react";
import "./index.scss";
import { IoArrowForwardCircleSharp } from "react-icons/io5";

const SubmitMail = () => {
  return (
    <section className="submit-mail">
      <div className="submit-mail-content animate" data-animate="slideInTop 2s">
        <h3>Nhận thông tin</h3>
        <p>theo dõi nhiều thông tin hơn từ chúng tôi</p>
        <div className="submit-mail-content-form">
          <input type="text" placeholder="Địa chỉ email" />
          <IoArrowForwardCircleSharp className="submit-mail-content-form-icon" />
        </div>
      </div>
    </section>
  );
};

export default SubmitMail;
