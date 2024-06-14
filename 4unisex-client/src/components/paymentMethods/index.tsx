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
import { AiTwotonePlusCircle } from "react-icons/ai";
import DiscountCode from "../discountCode";
import { TbShieldSearch } from "react-icons/tb";

function PaymentMethods() {
  const onFinish: FormProps<any>["onFinish"] = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<any>["onFinishFailed"] = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <section className="payment-method">
      <div className="payment-method-content">
        <TbShieldSearch
          className="icon"
          style={{
            color: "#34B53A",
          }}
        />
        <p>
          Chúng tôi hợp tác với các đơn vị cung cấp dịch vụ thanh toán uy tín để
          đảm bảo thông tin thẻ của bạn được an toàn và bảo mật tuyệt đối.
          4UNISEX sẽ không có quyền truy cập vào thông tin thẻ của bạn.
        </p>
      </div>
      <img src="../../img/bankcard.png" />
    </section>
  );
}

export default PaymentMethods;
