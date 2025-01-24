import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"; // Make sure the import path is correct

const store = configureStore({
  reducer: {
    auth: authReducer, // Correct placement inside reducer object
  },
});

export default store;
