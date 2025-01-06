import { ITask } from '@/types';
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    tasks : ITask[];
}

const initialState : InitialState ={
    tasks: [
        {
            id: "345456",
            title: "Learning Material UI",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, porro.",
            isCompleted: false,
            dueDate: "2025-11",
            priority: "Low",
        },
        {
            id: "324536",
            title: "Learning Sadcn UI",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, porro.",
            isCompleted: false,
            dueDate: "2025-11",
            priority: "Medium",
        },
        {
            id: "345364",
            title: "Learning Redux toolkit",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, porro.",
            isCompleted: false,
            dueDate: "2025-11",
            priority: "High",
        },
    ]
}

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers:{

    }
})

export default taskSlice.reducer;