import React from "react";
import "./index.scss";
import ButtonPrim from "../buttonPrim";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import useNavigation from "@/hooks/useNavigate";

const categories: string[] = [
  "BIKINI",
  "ĐẦM NGỦ",
  "ĐỒ BƠI",
  "ÁO NGỰC",
  "ĐỒ MẶC NHÀ",
  "BRA SET",
];

const HomeSuggest = () => {
  const { navigateTo } = useNavigation();
  return (
    <section className="home-suggest">
      <div
        className="home-suggest-categories animate"
        data-animate="slideInRight 1s"
      >
        <div style={{ width: 850 }}>
          {categories.map((item: string) => {
            return (
              <span key={item} className="home-suggest-category">
                <span>{item}</span> /{" "}
              </span>
            );
          })}
        </div>
      </div>
      <div
        className="home-suggest-bestchoose animate"
        data-animate="slideInLeft 1s"
      >
        <img src="/img/home/section1.png" alt="4Unisex" width={600} />
        <div className="home-suggest-bestchoose-block">
          <p className="home-suggest-bestchoose-block-title">
            CHỌN ĐIỀU TỐT NHẤT
          </p>
          <p className="home-suggest-bestchoose-block-desc">
            Chúng tôi nghiên cứu, kiểm tra, lựa chọn những thứ tốt nhất dành cho
            bạn
          </p>
          <img src="/img/home/bestchoose.png" width={250} alt="4Unisex" />
        </div>
      </div>
      <div className="home-suggest-inspiration ">
        <div
          className="home-suggest-inspiration-block animate"
          data-animate="slideInRight 1s"
        >
          <p className="home-suggest-inspiration-block-title">
            TRUYỀN CẢM HỨNG
          </p>
          <p className="home-suggest-inspiration-block-desc">
            Vật liệu an toàn, thiết kế mang tính thẩm mỹ trong từng sản phẩm
          </p>
          <ButtonPrim
            onClick={() => {
              navigateTo("/products");
            }}
            text="Xem sản phẩm"
            icon={
              <FaRegArrowAltCircleRight className="content-banner-home-btn-icon" />
            }
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
          className="animate"
          data-animate="slideInLeft 1s"
        >
          <img src="/img/home/section2.png" alt="4Unisex" width={600} />
        </div>
      </div>
    </section>
  );
};

export default HomeSuggest;
