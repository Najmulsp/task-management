
import Root from "@/components/layout/Root";
import Home from "@/pages/home/Home";
import Jobs from "@/pages/jobs/Jobs";
import Login from "@/pages/Login";
import Tasks from "@/pages/tasks/Tasks";
import User from "@/pages/users/User";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children : [
            {
                index: true,
                element: <Home />
            },
            {
                path: "tasks",
                element: <Tasks />
            },
            {
                path: "user",
                element: <User />
            },
            {
                path: "login",
                element: <Login />
            },
        ]
    },
    {
        path: "/jobs",
        element: <Jobs /> ,
    },
    
]
)
export default routes;