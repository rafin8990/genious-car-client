import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";
import Register from "../../RegisterPage/Register";
import Checkout from "../Checkout/Checkout";
import Home from "../HomePage/Home/Home";
import Main from "../Layouts/Main";
import Login from "../Login/Login";
import Orders from "../Orders/Orders";

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
            },
            {
                path: '/checkout/:id',
                element:<PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/orders',
                element:<Orders></Orders>
            }
        ])
    }
])

export default router;