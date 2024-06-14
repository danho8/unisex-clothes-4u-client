import React from "react";
import "./index.scss";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiMailSendLine } from "react-icons/ri";
import AffiliateMarketingItem from "../affiliateMarketingItem";
function affiliateMarketing() {
  return (
    <div className="a-m__container">
      <div className="a-m__item__container">
        <AffiliateMarketingItem />
      </div>
      <div className="a-m__share-container">
        <div className="a-m__share">
          <div className="a-m__share-title">
            Chia sẻ liên kết giới thiệu cá nhân của bạn
          </div>
          <div className="a-m__share-content">
            Khi ai đó đăng ký bằng liên kết giới thiệu duy nhất này, bạn sẽ nhận
            được nhiều hơn các ưu đãi từ 4UNISEX.
            <br />
            Chia sẻ cũng dễ dàng — chỉ cần sao chép liên kết hoặc chia sẻ liên
            kết đó lên Twitter, Facebook hoặc gửi email trực tiếp bằng các nút
            chia sẻ nhanh bên dưới.
          </div>
        </div>
        <div className="a-m__share-button">
          <div className="a-m__share-button-share">
            <input type="text" value="https://4unisex.com/invite/123456" />
            <button>Sao chép liên kết</button>
          </div>
          <h3 className="a-m__share-button-or">Hoặc chia sẻ qua</h3>

          <div className="a-m__share-button__container">
            <div className="a-m__share-button__contact">
              <FaFacebookF />
            </div>
            <div className="a-m__share-button__contact">
              <FaXTwitter />
            </div>
            <div className="a-m__share-button__contact">
              <RiMailSendLine />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default affiliateMarketing;
