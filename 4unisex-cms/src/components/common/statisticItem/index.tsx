import React from "react";
import "./index.scss";

interface Props {
  img: string;
  title: string;
  data: number;
  percent: number;
}

const StatisticItem = (props: Props) => {
  const { img, title, data, percent } = props;

  return (
    <div className="wrapper-statistic">
      <div className="wrapper-statistic-info">
        <img className="wrapper-statistic-info_img" src={img} alt="4Unisex" />
        <div className="wrapper-statistic-info_group">
          <p>{title}</p>
          <h3>{data.toLocaleString('en-GB')}</h3>
        </div>
      </div>
      <div className="wrapper-statistic-info_group_footer">
        <img src="/img/Path.png" alt="4Unisex" /> <span>{percent}%</span> <strong>tuần
        này</strong>
      </div>
    </div>
  );
};

export default StatisticItem;
