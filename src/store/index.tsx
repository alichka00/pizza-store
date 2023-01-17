import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filter";
import cartReducer from "./cart";
import pizzaReducer from "./pizza";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    cart: cartReducer,
    pizza: pizzaReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
