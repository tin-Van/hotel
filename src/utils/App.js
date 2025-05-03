// import logo from './logo.svg';
import "../assets/css/App.css";
import Home from "../pages/Home"
import Login from "../pages/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../assets/css/style2.css";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/hotel" index element={<Home />} />
          <Route path="/hotel/login" element={<Login />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
