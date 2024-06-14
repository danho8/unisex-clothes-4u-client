import React from "react";
import "./index.scss";
import { FaLock } from "react-icons/fa";
import { Button, Form, Input } from "antd";
function Security() {
  return (
    <div className="security">
      <h3>Cập nhật mật khẩu của bạn</h3>
      <div className="security-desciption">
        <FaLock className="security-desciption-clock" />
        <div>
          <p>Bạn có thể cập nhật mật khẩu của mình bên dưới.</p>
          <p>
            Nếu bạn quên mật khẩu hiện tại, vui lòng liên hệ với bộ phận hỗ trợ
            để được hỗ trợ.
          </p>
        </div>
      </div>
      <div className="security_update-password">
        <Form
          autoComplete="off"
          layout="vertical"
          style={{ width: "100%" }}
          onFinish={() => {}}
          onFinishFailed={() => {}}
        >
          <div className="security_update-password-update">
            <Form.Item
              className="security_update-password-item security_update-password-item-current"
              label="Mật khẩu hiện tại"
              name="currentPassword"
              rules={[
                { required: true, message: "Vui lòng nhập mật khẩu hiện tại" },
              ]}
            >
              <Input.Password placeholder="Nhập mật khẩu hiện tại" />
            </Form.Item>
            <div></div>
          </div>
          <div className="security_update-password-update">
            <Form.Item
              className="security_update-password-item"
              label="Mật khẩu mới"
              name="newPassword"
              rules={[
                { required: true, message: "Vui lòng nhập mật khẩu mới" },
              ]}
            >
              <Input.Password placeholder="Nhập mật khẩu mới" />
            </Form.Item>
            <Form.Item
              className="security_update-password-item"
              label="Xác nhận mật khẩu mới"
              name="confirmPassword"
              rules={[
                { required: true, message: "Vui lòng nhập lại mật khẩu mới" },
              ]}
            >
              <Input.Password placeholder="Xác nhận lại mật khẩu mới" />
            </Form.Item>
          </div>
          <div className="security_update-password-action">
            <Button
              type="primary"
              htmlType="submit"
              className="security_update-password-button"
            >
              Lưu thay đổi
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Security;
