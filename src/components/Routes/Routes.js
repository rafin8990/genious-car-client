import { createBrowserRouter } from "react-router-dom";
import Register from "../../RegisterPage/Register";
import Home from "../HomePage/Home/Home";
import Main from "../Layouts/Main";
import Login from "../Login/Login";

const router =createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:([
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ])
    }
])

export default router;