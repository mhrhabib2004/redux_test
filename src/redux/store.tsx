import { configureStore } from "@reduxjs/toolkit";
import logger from "./middlewares/logger";
import counterReducer from "./features/counter/counterSlice"
import taskReducer from "./../redux/features/task/taskSlice"


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        task: taskReducer,
        // user: userReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;