
import Root from "@/components/layout/Root";
import Login from "@/pages/Login";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children : [
            {
                path: "login",
                element: <Login />
            },
        ]
    },
    // {
    //     path: "",
    //     element: ,
    // },
    
]
)
export default routes;