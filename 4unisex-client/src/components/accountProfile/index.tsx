import React, { useEffect, useRef } from "react";
import "./index.scss";
import { FaRegCopy } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";

interface Props {
  handleSetState: (number: any) => void;
}

function AccountProfile(props: Props) {
  const itemsRef = useRef<NodeListOf<Element>>();
  const profileItems = [
    {
      id: 1,
      title: "Khuyến mãi",
      tab: 5,
    },
    {
      id: 2,
      title: "Phương thức thanh toán",
      tab: 4,
    },
    {
      id: 3,
      title: "Đơn hàng của tôi",
      tab: 3,
    },
    {
      id: 4,
      title: "Danh sách yêu thích",
      tab: 2,
    },
    {
      id: 5,
      title: "Bảo mật",
      tab: 6,
    },
    {
      id: 6,
      title: "Xóa tài khoản",
      tab: 7,
    },
  ];

  const handleActive = (id: number) => {
    itemsRef.current?.forEach((item) => {
      item.classList.remove("ac-profile__body-active");
    });
    if (itemsRef.current && itemsRef.current[id - 1]) {
      itemsRef.current[id - 1].classList.add("ac-profile__body-active");
    }
  };

  useEffect(() => {
    itemsRef.current = document.querySelectorAll(".ac-profile__body-item");
    if (itemsRef.current && itemsRef.current[0]) {
      itemsRef.current[0].classList.add("ac-profile__body-active");
    }
  }, []);

  return (
    <div className="ac-profile">
      <div className="ac-profile__header">
        <img src={"./img/home/section2.png"} alt="avatar" />
        <div className="ac-profile__header-name">
          <span>NGUYEN LE PHAN TRAN TIEU MY</span>
          <div className="ac-profile__header-code">
            <span>MÃ KH: 12345678</span>
            <FaRegCopy />
            <MdEdit />
          </div>
        </div>
      </div>
      <div className="ac-profile__body">
        {profileItems.map((item) => (
          <div
            className="ac-profile__body-item"
            key={item.id}
            onClick={() => {
              handleActive(item.id);
              props.handleSetState(item.tab);
            }}
          >
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AccountProfile;
