import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    task:{
        id:"asdf",
        title:"Initialize frontend",
        description:"create Home page,and routing",
        dueDate:2025-11,
        isCompleted:false,
        priority: "High",
    }
}
const taskSlice = createSlice({
    name:"task",
    initialState,
    reducers:{},
});

export default taskSlice.reducer;
