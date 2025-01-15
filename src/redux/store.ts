import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./features/task/taskSlice";


export const store = configureStore({
    reducer: {
        todos: taskReducer    // here I will give which name like todos in selector I will got it in selector hook.
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch