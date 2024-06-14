import React from "react";
import { Button, Form, Input, message, Select, Upload, Radio } from "antd";
import { IoShieldCheckmark } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import "./index.scss";
import OrderItem from "../orderItem";
import { IoIosArrowForward } from "react-icons/io";
import { useDispatch } from "react-redux";
import { toggleSaleCode } from "@/store/reducers/cart.reducer";

const { TextArea } = Input;

const PaymentHome = () => {
  const dispatch = useDispatch();
  return (
    <div className="payment-home">
      <Form size="large" layout="vertical">
        <div className="payment-home-header">
          <img src="/img/payment-logo-prim.png" alt="4Unisex" />
          <div className="payment-home-title-skip">
            <h3>Tiếp tục mua hàng</h3>
            <FaArrowRight className="title-skip-icon" />
          </div>
        </div>
        <div className="payment-home-main">
          <div className="payment-home-main-left">
            <h3 className="home-main-title">Thông tin người nhận</h3>
            <div className="main-left-user-infor">
              <div>
                <div>
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
                      name=""
                      label="Họ tên"
                      rules={[
                        { required: true, message: "Vui lòng nhập họ và tên!" },
                      ]}
                    >
                      <Input placeholder="Nhập họ và tên" />
                    </Form.Item>
                    <Form.Item
                      style={{ fontWeight: 600, flex: 1 }}
                      name="name"
                      label="Số điện thoại"
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng nhập số điện thoại!",
                        },
                      ]}
                    >
                      <Input placeholder="Số điện thoại người nhận" />
                    </Form.Item>
                  </div>
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
                      name="address"
                      label="Tỉnh/Thành phố"
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng chọn tỉnh / thành phố!",
                        },
                      ]}
                    >
                      <Select placeholder="Chọn tỉnh /thành phố"></Select>
                    </Form.Item>
                    <Form.Item
                      style={{ fontWeight: 600, flex: 1 }}
                      name="address"
                      label="Quận/Huyện"
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng chọn quận/huyện!",
                        },
                      ]}
                    >
                      <Select placeholder="Chọn quận/huyện"></Select>
                    </Form.Item>
                  </div>
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
                      name="parentId"
                      label="Phường/xã"
                      rules={[
                        { required: true, message: "Vui lòng chọn phường/xã!" },
                      ]}
                    >
                      <Select placeholder="Chọn phường/xã"></Select>
                    </Form.Item>
                    <Form.Item
                      style={{ fontWeight: 600, flex: 1 }}
                      name=""
                      label="Địa chỉ"
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng nhập địa chỉ nhà!",
                        },
                      ]}
                    >
                      <Input placeholder="Nhập địa chỉ nhà" />
                    </Form.Item>
                  </div>
                  <Form.Item
                    style={{ fontWeight: 600 }}
                    label="Ghi chú"
                    name="description"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập vào mô tả sản phẩm",
                      },
                    ]}
                  >
                    <TextArea
                      rows={4}
                      placeholder="Nhập ghi chú"
                      autoSize={{ minRows: 4, maxRows: 4 }}
                    />
                  </Form.Item>
                </div>
              </div>
            </div>
            <div className="delivery-time">
              <h3>Thời gian giao hàng</h3>
              <p>
                Thời gian giao hàng tùy thuộc vào điều kiện của đơn vị vận
                chuyển. Dự kiến giao hàng trong khoảng : 3 đến 4 ngày
              </p>
            </div>
            <div className="payment-method">
              <h3>Phương thức thanh toán</h3>
              <div className="payment-method-radio-group">
                <div className="payment-method-bank">
                  <input type="radio" id="payment-cod" name="payment" />
                  <img src="/img/pay-cod.png" alt="4Unisex" />
                  <p>Thanh toán tiền mặt khi nhận hàng - COD</p>
                </div>

                <div className="payment-method-bank">
                  <input type="radio" id="payment-cod" name="payment" />
                  <img src="/img/pay-bank.png" alt="4Unisex" />
                  <p>Thanh toán qua tài khoản ngân hàng</p>
                </div>
              </div>
            </div>
          </div>
          <div className="payment-home-main-right">
            <div className="home-main-right-product">
              <h3 className="home-main-title">Sản phẩm (8)</h3>
              <div className="main-right-item">
                <OrderItem />
              </div>
              <div className="main-right-item">
                <OrderItem />
              </div>
              <div className="main-right-item">
                <OrderItem />
              </div>
            </div>
            <div className="home-main-right-code">
              <div className="main-right-code-left">
                <p>Mã giảm giá</p>
                <span>LE 30.04 - 1.5</span>
              </div>
              <div className="main-right-code-right">
                <p
                  onClick={() => {
                    dispatch(toggleSaleCode());
                  }}
                >
                  Chọn hoặc nhập mã giảm giá
                  <IoIosArrowForward />
                </p>
              </div>
            </div>
            <div className="info-order">
              <div className="info-order-item">
                <h3>Giá trị đơn hàng</h3>
                <p>900.000 VNĐ</p>
              </div>
              <div className="info-order-item">
                <h3>Mã giảm giá</h3>
                <p style={{ color: "red" }}>-65.000 VNĐ</p>
              </div>
              <div className="info-order-item">
                <h3>Phí vận chuyển</h3>
                <p>50.000 VNĐ</p>
              </div>
            </div>
            <div className="total-amount">
              <div className="total-amount-left">
                <h3>Tổng tiền</h3>
                <p>(Đã bao gồm thuế VAT)</p>
              </div>
              <div className="total-amount-right">885.000 VNĐ</div>
            </div>
            <button className="payment-button" type="submit" onClick={() => {}}>
              Thanh toán
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default PaymentHome;
