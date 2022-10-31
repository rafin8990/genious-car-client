import { createBrowserRouter } from "react-router-dom";
import Home from "../HomePage/Home/Home";
import Main from "../Layouts/Main";

const router =createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:([
            {
                path:'/',
                element:<Home></Home>
            }
        ])
    }
])

export default router;