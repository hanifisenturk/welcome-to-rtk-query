import { configureStore } from "@reduxjs/toolkit";
import { pokeApi } from "../services/pokemon";

export const store = configureStore({
  reducer: {
    [pokeApi.reducerPath]: pokeApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(pokeApi.middleware);
  },
});
