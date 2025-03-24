// 组件形式的写法
import Home from "@/views/Home";
import About from "@/views/About";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import App from "@/App";

const baseRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App></App>}>
        {/* 重定向 */}
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

export default baseRouter;
