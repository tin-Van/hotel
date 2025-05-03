import React from "react";
import Header from "../components/Header";
import Sreach from "../components/Sreach";
import { motion } from "framer-motion";
import { fadeIn, slideIn, hoverEffect } from "../service/animationService";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../service/apiService";
function Home() {

  return (
    <section id="home" class="welcome-hero">
      <Header />
      <Sreach />
    </section>
  );
}
export default Home;
