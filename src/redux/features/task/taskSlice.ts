import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IinitialState{
    tasks:ITask[];
}
const initialState : IinitialState = {
    tasks:[],
}
const taskSlice = createSlice({
    name:"task",
    initialState,
    reducers:{
addTask: (state,action:PayloadAction<ITask>)=>{
state.tasks.push(action.payload) 
}
    },
});

export const selectTasks = (state : RootState)=>{
    return state.todo.tasks
}

export const {addTask} = taskSlice.actions

export default taskSlice.reducer;
