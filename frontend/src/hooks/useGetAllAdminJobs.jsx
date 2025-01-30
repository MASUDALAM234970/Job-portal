import { setAllAdminJobs } from "@/redux/jobSlice";
import { JOB_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetAllAdminJobs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController(); // Create an AbortController to cancel requests if needed

    const fetchAllAdminJobs = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/getadminjobs`, {
          withCredentials: true,
          signal: controller.signal, // Attach the signal to allow cancellation
        });

        if (res.data.success) {
          dispatch(setAllAdminJobs(res.data.jobs));
        }
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request canceled:", error.message);
        } else {
          console.log("Error fetching jobs:", error);
        }
      }
    };

    fetchAllAdminJobs();

    return () => controller.abort(); // Cleanup function to cancel request on unmount
  }, [dispatch]);
};

export default useGetAllAdminJobs;
