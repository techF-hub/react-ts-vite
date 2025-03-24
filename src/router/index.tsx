import React, { lazy } from "react";
import Home from "@/views/Home";
import { Navigate } from "react-router-dom";

// 路由懒加载 外面需要套一层React.Suspense
const About = lazy(() => import("@/views/About"));
const withLoadingComponent = (comp: any) => (
  <React.Suspense fallback={<div>loading...</div>}>{comp}</React.Suspense>
);
const routes = [
  {
    path: "/",
    element: <Navigate to="/home"></Navigate>,
  },
  {
    path: "/home",
    element: <Home></Home>,
  },
  {
    path: "/about",
    element: withLoadingComponent(<About />),
  },
];

export default routes;
