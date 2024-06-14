import React, { useEffect } from "react";
import "./App.css";
import RouterMain from "./routes";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  useEffect(() => {
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    scrollToTop();
  }, [location.pathname]);

  return <RouterMain />;
}

export default App;
