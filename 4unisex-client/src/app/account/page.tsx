import React from "react";
import MyAccountPage from "@/sites/myAccount";
const Account = () => {
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
          <MyAccountPage />
        </main>
      </body>
    </html>
  );
};

export default Account;
