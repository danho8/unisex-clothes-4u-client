import React from "react";
import "./index.scss";
import { ImHome } from "react-icons/im";
import { Link } from "react-router-dom";
const Notfound = () => {
  return (
    <section className="wrapper-notfound">
      <img src="/img/notfound.jpeg" loading="lazy" alt="4Unisex" />
      <Link className="wrapper-notfound-back" to={"/dashboard"}>
        Quay về <ImHome />
      </Link>
    </section>
  );
};

export default Notfound;
