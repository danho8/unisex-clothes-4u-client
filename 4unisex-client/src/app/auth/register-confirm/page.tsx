import RegisterConfirm from "@/sites/registerConfirm";
import React from "react";

const Register = () => {
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
          <RegisterConfirm />
        </main>
      </body>
    </html>
  );
};

export default Register;
