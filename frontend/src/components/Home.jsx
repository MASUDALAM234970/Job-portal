import React from "react";
import { Navbar } from "./shared/Navbar";
import HeroSection from "./HeroSection";
import CategoryCarousel from "./CategoryCarousel ";
import LatestJobs from "./LatestJobs";

import ScrollToTop from "./ScrollToTop";
import Footer from "./shared/Footer";

export default function Home() {
  return (
    <div className="bg-gray-100">
      Home
      <Navbar />
      <HeroSection />
      <CategoryCarousel />
      <LatestJobs />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
