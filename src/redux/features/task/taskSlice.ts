import { RootState } from '@/redux/store';
import { ITask } from '@/types';
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
// import { v4 as uuidv4 } from 'uuid';

interface InitialState {
    tasks : ITask[];
    filter: "All" | "High" | "Medium" | "Low";
}

const initialState : InitialState ={
    tasks: [],
    filter: "All",
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
        updateFilter: (state, action: PayloadAction<"All" | "Low" | "Medium" | "High" >) =>{
                state.filter = action.payload;
        }

    }
})

export const selectTasks = (state: RootState) => {
    const filter = state.todos.filter;

    if(filter === "Low"){
        return state.todos.tasks.filter((task) => task.priority === "Low")
    }
    else if(filter === "Medium"){
        return state.todos.tasks.filter((task) => task.priority === "Medium")
    }
    else if(filter === "High"){
        return state.todos.tasks.filter((task) => task.priority === "High")
    }
    else{
        return state.todos.tasks;
    }
}


export const {addTask, toggleCompletedState, deleteTask, updateTask, updateFilter} = taskSlice.actions;



export default taskSlice.reducer;