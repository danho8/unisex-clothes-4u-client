import React from "react";
import Link from "next/link";
import "./index.scss";
import { Breadcrumb } from "antd";
import { IoIosArrowForward } from "react-icons/io";

interface Props {
  breadcrumbItems?: any[];
  title?: string;
}

const ContentBannerProduct = (props: Props) => {
  const breadcrumbItems = [
    { title: "Trang chủ", href: "/" },
    { title: "Sản phẩm", href: "/products" },
  ];

  return (
    <div className="content-banner-product">
      <h3>{props.title ?? "Sản phẩm"}</h3>
      <Breadcrumb separator={<IoIosArrowForward />}>
        {!props.breadcrumbItems
          ? breadcrumbItems.map((item) => (
              <Breadcrumb.Item key={item.title}>
                {item.href ? (
                  <Link
                    className="content-banner-product-breadcrumb-item"
                    href={item.href}
                    passHref
                  >
                    {item.title}
                  </Link>
                ) : (
                  <span>{item.title}</span>
                )}
              </Breadcrumb.Item>
            ))
          : props.breadcrumbItems.map((item) => (
              <Breadcrumb.Item key={item.title}>
                {item.href ? (
                  <Link
                    className="content-banner-product-breadcrumb-item"
                    href={item.href}
                    passHref
                  >
                    {item.title}
                  </Link>
                ) : (
                  <span>{item.title}</span>
                )}
              </Breadcrumb.Item>
            ))}
      </Breadcrumb>
    </div>
  );
};

export default ContentBannerProduct;
