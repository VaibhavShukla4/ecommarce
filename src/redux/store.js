/**
 * Redux store
 * @author Vaibhav
 *
 **/

import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

import * as reducers from "./reducers";

let initialState = {};

export const store = configureStore({
  reducer: {
    addToCart: reducers.addToCart,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      process.env.NODE_ENV === "production" ? [] : createLogger()
    ),
  initialState,
});
