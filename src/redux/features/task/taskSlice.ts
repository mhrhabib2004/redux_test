import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice} from "@reduxjs/toolkit";

interface IinitialState{
    tasks:ITask[];
}
const initialState : IinitialState = {
    tasks:[
        {
            id:"asdf",
            title:"Initialize frontend",
            description:"create Home page,and routing",
            dueDate:"2025-01-09",
            isCompleted:false,
            priority: "High",
        },
        {
            id:"asdf",
            title:"Initialize bakend",
            description:"create Home page,and routing",
            dueDate:"2025-01-09",
            isCompleted:false,
            priority: "Low",
        },
    
    ],
}
const taskSlice = createSlice({
    name:"task",
    initialState,
    reducers:{

    },
});

export const selectTasks = (state : RootState)=>{
    return state.todo.tasks
}

export default taskSlice.reducer;
