import App from "@/App"
import {createBrowserRouter} from "react-router-dom"
import User from "../pages/user";
import Task from "../pages/task";


const routes = createBrowserRouter([
    {
        path:"/",
        element:<App />,
        children:[
            {
                index:true,
                element:<Task />
            },
            {
                path:"users",
                element:<User />
            }
        ]
    }
])

export default routes;