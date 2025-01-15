import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

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

    const id = uuidv4();
    const taskdata = {
        ...action.payload,
        id,
        isCompleted : false,
    }
state.tasks.push(taskdata) 
}
    },
});

export const selectTasks = (state : RootState)=>{
    return state.todo.tasks
}

export const {addTask} = taskSlice.actions

export default taskSlice.reducer;
