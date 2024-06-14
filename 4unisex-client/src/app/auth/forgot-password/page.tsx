import AuthPage from "@/sites/auth";
import ForgotPassword from "@/sites/forgotPassword";
import React from "react";

const Forgot = () => {
  return (
    <html>
      <head>
        <title>4Unisex</title>
        <link rel="icon" type="image/x-icon" href="/img/logo-prim.png"></link>
        <link
          href="https://fonts.googleapis.com/css?family=Anton&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <main>
          <ForgotPassword />
        </main>
      </body>
    </html>
  );
};

export default Forgot;
