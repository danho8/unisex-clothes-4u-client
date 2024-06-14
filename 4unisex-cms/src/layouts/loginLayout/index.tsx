import React, { ReactNode } from "react";
import "./index.scss";

interface Props {
  children: ReactNode;
}

const LoginLayout = (props: Props) => {
  return <section className="wrapper-login">{props.children}</section>;
};

export default LoginLayout;
