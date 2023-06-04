import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import MenuPages from "../pages/MenuPages/MenuPages";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Home/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/Shared/Secret/Secret";
import SignUp from "../pages/Home/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import AdminRoutes from "./AdminRoutes";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import Payment from "../pages/Dashboard/Payment/Payment";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'menu',
                element: <MenuPages></MenuPages>
            },
            {
                path: 'order/:category',
                element: <Order></Order>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'secret',
                element: <PrivateRoute><Secret></Secret></PrivateRoute>
            },
        ],
    },
    {
        path: 'dashboard',
        element: <PrivateRoute> <Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'myCart',
                element: <MyCart></MyCart>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            //Admin Route
            {
                path: 'allUsers',
                element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
            },
            {
                path: 'addItem',
                element: <AdminRoutes><AddItem></AddItem></AdminRoutes>
            },
            {
                path: 'manageItems',
                element: <AdminRoutes><ManageItems></ManageItems></AdminRoutes>
            }
        ]
    }
]);