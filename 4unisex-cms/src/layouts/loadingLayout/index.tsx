import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";
import { RootState } from "../../store";

const LoadingOverlay: React.FC = () => {
  const isLoading = useSelector((state: RootState) => state.loading.isLoading);

  if (!isLoading) {
    return null;
  }

  return (
    <div className="loading-overlay-wrapper">
      <div className="spinner-content">
        <svg className="spinner" viewBox="0 0 50 50">
          <circle
            className="path"
            cx="25"
            cy="25"
            r="20"
            fill="none"
            strokeWidth="5"
          ></circle>
        </svg>
      </div>
    </div>
  );
};

export default LoadingOverlay;
