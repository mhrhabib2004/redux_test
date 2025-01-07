import { configureStore } from "@reduxjs/toolkit";
import logger from "./middlewares/logger";
import counterSlice from "./features/counterSlice"



export const store = configureStore({
    reducer: {
        counter: counterSlice,
        // todo: taskReducer,
        // user: userReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;