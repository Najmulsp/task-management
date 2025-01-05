import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    task: {
        id: "dklksgsg",
        title: "dfghksjdfghk",
        description: "alkgfa;sgjlg",
        isCompleted: false,
        dueDate: "2025-11",
        priority: "High",
    }
}

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers:{

    }
})

export default taskSlice.reducer;