import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import ContactUs from "../Pages/ContactUs/contactUs";
import Dashboard from "../Pages/Dashboard/Dashboard";
import OurMenu from "../Pages/OurMenu/OurMenu";
import OurShop from "../Pages/OurShop/OurShop";
import SignIn from "../Pages/Sign/SignIn/SignIn";
import SignUp from "../Pages/Sign/SignUp/SignUp";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/contactUs',
                element: <ContactUs></ContactUs>,
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>,
            },
            {
                path: '/ourMenu',
                element: <OurMenu></OurMenu>,
            },
            {
                path: '/ourShop',
                element: <OurShop></OurShop>,
            },
            {
                path: '/signIn',
                element: <SignIn></SignIn>,
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>,
            }
        ]
    }
])

export default Router