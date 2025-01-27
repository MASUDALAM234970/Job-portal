import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import jobReducer from "./jobSlice"; // Ensure this path is correct

const store = configureStore({
  reducer: {
    auth: authReducer, // Match key names used in your application
    job: jobReducer,
  },
});

export default store;
