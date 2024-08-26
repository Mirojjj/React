import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice.js";
import userReducer from "../features/users/userSlice.js";
import { weatherApi } from "../service/weatherApi.js";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
    users: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware),
});
