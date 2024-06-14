import React, { useEffect, useState } from "react";
import "./index.scss";
import { Avatar, Popover } from "antd";
import { TbLogout } from "react-icons/tb";
import { useLocation, useNavigate } from "react-router-dom";
import AuthService from "../../services/auth.service";
import { jwtDecode } from "jwt-decode";

const authService = new AuthService();

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token") as string;
    const decoded = jwtDecode(token);
    setUser(decoded);
  }, [location.pathname]);

  const handleLogout = async () => {
    try {
      await authService.logout();
    } catch (error) {
      console.log(error);
    } finally {
      localStorage.removeItem("token");
      navigate("/login");
    }
  };

  const content = (
    <div className="wrapper-header-popover">
      <button onClick={handleLogout}>
        <TbLogout className="icon" /> Đăng xuất
      </button>
    </div>
  );

  return (
    <header className="wrapper-header">
      <div className="wrapper-header-info">
        <Popover placement="bottom" content={content}>
          <Avatar style={{ cursor: "pointer" }} size="large">
            {user?.name.charAt(0)}
          </Avatar>
        </Popover>
        <div className="wrapper-header-info-detail">
          <p className="wrapper-header-info-detail_name">
            <strong>{user?.name}</strong>
          </p>
          <p className="wrapper-header-info-detail_role">Admin</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
