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
    
    ],
}
const taskSlice = createSlice({
    name:"task",
    initialState,
    reducers:{},
});

export default taskSlice.reducer;
