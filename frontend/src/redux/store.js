import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import jobSlice from "./jobSlice"; // Make sure the import path is correct

const store = configureStore({
  reducer: {
    auth: authReducer, // Correct placement inside reducer object
    job: jobSlice, // Correct placement inside reducer object
  },
});

export default store;
