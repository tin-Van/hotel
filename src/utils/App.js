// import logo from './logo.svg';
import "../assets/css/App.css";
import Header from "../components/Header";
import Sreach from "../components/Sreach";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../assets/css/style2.css";
function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <section id="home" class="welcome-hero">
          <Header />
        </section>
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
