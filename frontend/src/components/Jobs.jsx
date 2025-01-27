import React from "react";
import { Navbar } from "./shared/Navbar";
import FilterCard from "./FilterCard";
import Job from "./Job";
import { motion } from "framer-motion";

//const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
import ScrollToTop from "./ScrollToTop";
import { useSelector } from "react-redux";
export default function jobs() {
  const { allJobs } = useSelector((store) => store.job);
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex gap-5 mt-10 mx-10">
          <div className="w-20%">
            <FilterCard />
          </div>
          {allJobs.length <= 0 ? (
            <span>Job not found</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
              <div className="grid grid-cols-3 gap-4">
                {allJobs.map((job) => (
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                    key={job?._id}
                  >
                    <Job job={job} />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
