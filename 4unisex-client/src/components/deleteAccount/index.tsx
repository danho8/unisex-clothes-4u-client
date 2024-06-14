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
import { TbShieldSearch } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";
import useNavigation from "@/hooks/useNavigate";

function DeleteAccount() {
    const onFinish: FormProps<any>["onFinish"] = (values: any) => {
        console.log("Success:", values);
    };
    const { navigateTo } = useNavigation();
    const onFinishFailed: FormProps<any>["onFinishFailed"] = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };
    return (
        <section className="delete-account">
            <h3>Xóa tài khoản</h3>
            <div className="delete-account-content">
                <RiDeleteBin6Line className="icon-delete" />
                <p>Xóa vĩnh viễn tài khoản của bạn và tất cả dữ liệu liên quan đến tài khoản đó là một quy trình thủ công được thực hiện từ phía chúng tôi.<br />
                    Vui lòng liên hệ với bộ phận hỗ trợ bằng địa chỉ email được liên kết với tài khoản bạn muốn xóa để được hỗ trợ.
                </p>
            </div>
            <button onClick={() => {
                navigateTo("/contact");
            }}>Liên hệ</button>
        </section>

    );
}

export default DeleteAccount;
