import React from "react";
import "./index.scss";
function AffiliateMarketingItem() {
  const contensAMI = [
    {
      id: 1,
      icon: "/icon/affiliate-marketing-item-icon.png",
      title: "Chia sẻ mã của bạn",
      description:
        "Mời bạn bè của bạn trở thành thành viên bằng liên kết giới thiệu duy nhất của bạn. Bạn sẽ nhận được Voucher giảm giá cho mỗi lượt giới thiệu hoàn tất quá trình đăng ký và xác minh tài khoản.",
    },
    {
      id: 2,
      icon: "/icon/affiliate-marketing-item-icon.png",
      title: "Xếp hạng để giành được nhiều hơn",
      description:
        "Giới thiệu là cách tốt nhất để leo lên thứ hạng nhanh chóng và mỗi thứ hạng mang lại cho bạn nhiều quyền tham gia rút thăm trúng thưởng hơn.",
    },
    {
      id: 3,
      icon: "/icon/affiliate-marketing-item-icon.png",
      title: "Ưu đãi hấp dẫn",
      description:
        "Giới thiệu cho nhiều bạn bè của bạn để nhận thêm nhiều ưu đãi hấp dẫn từ 4UNISEX",
    },
  ];
  return (
    <div className="ami-container">
      {contensAMI.map((item, index) => {
        return (
          <div key={index} className="ami-item">
            <img src={item.icon} alt="icon" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default AffiliateMarketingItem;
