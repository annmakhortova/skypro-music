import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./reducers/reducers";

export const store = configureStore({
  reducer: {
    player: playerReducer,
  },
});
