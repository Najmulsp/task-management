import { ITask } from '@/types';
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
// import { v4 as uuidv4 } from 'uuid';

interface InitialState {
    tasks : ITask[];
    filter: "all" | "High" | "Medium" | "Low";
}

const initialState : InitialState ={
    tasks: [],
    filter: "all",
}

type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">;

const createTask = (taskData: DraftTask) =>{
    return {id: nanoid(), isCompleted: false, ...taskData}
}

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers:{
        addTask : (state, action: PayloadAction<ITask>) =>{
            // const id = uuidv4();
            // const taskData = {
            //     ...action.payload,
            //     id,
            //     isCompleted: false,
            // }
            const taskData = createTask(action.payload)
            state.tasks.push(taskData);
        },
        toggleCompletedState: (state, action: PayloadAction<string>) =>{
            state.tasks.forEach((task) =>
            task.id === action.payload ?
            (task.isCompleted = !task.isCompleted)
            : task
            )
        },
        deleteTask: (state, action: PayloadAction<string>) =>{
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        },
        updateTask: (state, action: PayloadAction<ITask>) => {
            const index = state.tasks.findIndex((task) => task.id === action.payload.id);
            if (index !== -1) {
                state.tasks[index] = {
                    ...state.tasks[index],
                    ...action.payload,
                };
            }
        },
        updateFilter: (state, action: PayloadAction< "Low" | "Medium" | "High" >) =>{
                state.filter = action.payload;
        }

    }
})

export const {addTask, toggleCompletedState, deleteTask, updateTask} = taskSlice.actions;

export default taskSlice.reducer;