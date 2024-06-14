import React, { useEffect } from "react";
import StatisticItem from "../common/statisticItem";
import "./index.scss";
import TitlePage from "../common/titlePage";
import DashboardItem from "../common/dashboardItem";
import DashboardBestSellerItem from "./dashboardBestsellerItem";
import DashboardRevenue from "./dashboardRevenue";
import DashboardOrder from "./dashboardOrder";
import { message } from "antd";
import { FIRST_LOGIN } from "../../reusing/constants/constants";
const data = [
  {
    img: "/img/dashboard-item0.png",
    title: "Tổng số người dùng",
    data: 40689,
    percent: 8.5,
  },
  {
    img: "/img/dashboard-item1.png",
    title: "Tổng đơn đặt hàng",
    data: 1220293,
    percent: 8.5,
  },
  {
    img: "/img/dashboard-item2.png",
    title: "Tổng sản phẩm bán",
    data: 89000,
    percent: 8.5,
  },
  {
    img: "/img/dashboard-item3.png",
    title: "Tổng số truy cập",
    data: 1122040,
    percent: 8.5,
  },
];
const Dashboard = () => {
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    const isFirstLogin = localStorage.getItem("first-login") === FIRST_LOGIN;

    if (isFirstLogin) {
      messageApi.open({
        type: "success",
        content: "Đăng nhập thành công.",
      });
      localStorage.removeItem("first-login");
    }
  }, [messageApi]);
  return (
    <div className="wrapper-dashboard">
      {contextHolder}
      <TitlePage title="Bảng thống kê" />
      <div className="wrapper-dashboard-statistic">
        {data.map((item) => {
          return (
            <StatisticItem
              img={item.img}
              data={item.data}
              percent={item.percent}
              title={item.title}
            />
          );
        })}
      </div>
      <div className="wrapper-dashboard-revenue">
        <DashboardItem
          title="Sản phẩm bán chạy"
          content={<DashboardBestSellerItem />}
        />
        <DashboardItem title="Doanh thu" content={<DashboardRevenue />} />
      </div>
      <div className="wrapper-dashboard-order">
        <DashboardItem
          title="Đơn đặt hàng gần đây"
          content={<DashboardOrder />}
        />
      </div>
    </div>
  );
};

export default Dashboard;
