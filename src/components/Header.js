import React from "react";
import Sreach from "../components/Sreach";
import { motion } from "framer-motion";
import { fadeIn, slideIn, hoverEffect } from "../service/animationService";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <motion.div {...fadeIn(0.5)}>
        <nav class="navbar navbar-expand-lg bg-transparent d-flex justify-content-center">
          <div class="row container">
            <div class="col-12 col-md-6 col-lg-4 py-2 d-flex">
              <Link class="navbar-brand text-white fs-2 ms-5" to="/hotel">
                Booking Store
              </Link>
            </div>

            <div class="col-12 col-md-6 col-lg-4 py-2">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ms-auto">
                  <li class="nav-item ms-3">
                    <Link
                      class="nav-link active text-white fs-5"
                      to="/hotel/login"
                    >
                      Đăng nhập{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </motion.div>
      <motion.div {...fadeIn(2)}>
        <div class="welcome-hero-txt">
          <h2>Welcome To Booking Store</h2>
          <p>Đặt vé nhanh chóng, dễ dàng, thuận tiện tại đây.</p>
        </div>
      </motion.div>
    </div>
  );
}

export default Header;
