import React from "react";
import { Navbar } from "./shared/Navbar";
import HeroSection from "./HeroSection";
import CategoryCarousel from "./CategoryCarousel ";
import LatestJobs from "./LatestJobs";

import ScrollToTop from "./ScrollToTop";
import Footer from "./shared/Footer";
import useGetAllJobs from "../hooks/useGetAllJobs";

export default function Home() {
  useGetAllJobs();
  return (
    <div className="bg-gray-100">
      <Navbar />
      <HeroSection />
      <CategoryCarousel />
      <LatestJobs />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
