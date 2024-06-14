import React, { ReactNode } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import DefaultLayout from "../layouts/defaultLayout";
import Dashboard from "../components/dashboard";
import Notfound from "../components/notfound";
import Login from "../components/login";
import LoginLayout from "../layouts/loginLayout";
import Products from "../components/products";
import Revenue from "../components/revenue";
import Category from "../components/category";
import Inventory from "../components/inventory";
import Users from "../components/users";
import Vouchers from "../components/vouchers";
import Staff from "../components/staff";
import ProductActions from "../components/productActions";

interface AuthProps {
  children: ReactNode;
}

const RequireAuth: React.FC<AuthProps> = ({ children }) => {
  const location = useLocation();
  const isAuthenticated = localStorage.getItem("token");

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

const PreventLogin: React.FC<AuthProps> = ({ children }) => {
  const isAuthenticated = localStorage.getItem("token");

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
};

const RouterMain: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/dashboard" />} />
      <Route
        path="/login"
        element={
          <PreventLogin>
            <LoginLayout children={<Login />} />
          </PreventLogin>
        }
      />
      <Route
        index
        path="/dashboard"
        element={
          <RequireAuth>
            <DefaultLayout children={<Dashboard />} />
          </RequireAuth>
        }
      />
      <Route
        path="/products"
        element={
          <RequireAuth>
            <DefaultLayout children={<Products />} />
          </RequireAuth>
        }
      />
      <Route
        path="/category"
        element={
          <RequireAuth>
            <DefaultLayout children={<Category />} />
          </RequireAuth>
        }
      />
      <Route
        path="/revenue"
        element={
          <RequireAuth>
            <DefaultLayout children={<Revenue />} />
          </RequireAuth>
        }
      />
      <Route
        path="/inventory"
        element={
          <RequireAuth>
            <DefaultLayout children={<Inventory />} />
          </RequireAuth>
        }
      />
      <Route
        path="/users"
        element={
          <RequireAuth>
            <DefaultLayout children={<Users />} />
          </RequireAuth>
        }
      />
      <Route
        path="/voucher"
        element={
          <RequireAuth>
            <DefaultLayout children={<Vouchers />} />
          </RequireAuth>
        }
      />
      <Route
        path="/staff"
        element={
          <RequireAuth>
            <DefaultLayout children={<Staff />} />
          </RequireAuth>
        }
      />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
};

export default RouterMain;
