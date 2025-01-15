import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice, nanoid, PayloadAction} from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

interface IinitialState{
    tasks:ITask[];
}
const initialState : IinitialState = {
    tasks:[],
}
type DarftTask = Pick<ITask,"title"|"description"|"dueDate" | "priority">;
const createTask = (taskData : DarftTask):ITask =>{
    return {id:nanoid(),isCompleted:false,...taskData}
}
const taskSlice = createSlice({
    name:"task",
    initialState,
    reducers:{
addTask: (state,action:PayloadAction<ITask>)=>{

    const taskdata = createTask(action.payload)
state.tasks.push(taskdata) 
}
    },
});

export const selectTasks = (state : RootState)=>{
    return state.todo.tasks
}

export const {addTask} = taskSlice.actions

export default taskSlice.reducer;
