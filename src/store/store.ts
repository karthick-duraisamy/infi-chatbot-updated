import { configureStore } from "@reduxjs/toolkit";
import chatReducer from './chatSlice';
import themeReducer from './themeSlice';
import { GRMConfigSerice } from "../services/service";

export const store = configureStore({
  reducer: {
    chat: chatReducer, // ✅ key must match state slice
    theme: themeReducer,
    [GRMConfigSerice.reducerPath]: GRMConfigSerice.reducer, // ✅ key from RTK Query service
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(GRMConfigSerice.middleware),
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
