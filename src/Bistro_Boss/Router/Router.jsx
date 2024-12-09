import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import ContactUs from "../Pages/ContactUs/contactUs";
import Dashboard from "../Pages/Dashboard/Dashboard";
import OurMenu from "../Pages/OurMenu/OurMenu";
import OurShop from "../Pages/OurShop/OurShop";
import SignIn from "../Pages/Sign/SignIn/SignIn";
import SignUp from "../Pages/Sign/SignUp/SignUp";
import UserHome from "../Pages/Dashboard/Children/User/UserHome/UserHome";
import Reservation from "../Pages/Dashboard/Children/User/Reservation/Reservation";
import PaymentHistory from "../Pages/Dashboard/Children/User/PaymentHistory/PaymentHestory";
import MyCart from "../Pages/Dashboard/Children/User/MyCart/MyCart";
import AddReview from "../Pages/Dashboard/Children/User/AddReview/AddReview";
import MyBooking from "../Pages/Dashboard/Children/User/MyBooking/MyBooking";
import AdminHome from "../Pages/Dashboard/Children/Admin/AdminHome/AdminHome";
import AddItems from "../Pages/Dashboard/Children/Admin/AddItems/AddItems";
import ManageItems from "../Pages/Dashboard/Children/Admin/ManageItems/ManageItems";
import ManageBookings from "../Pages/Dashboard/Children/Admin/ManageBookings/ManageBookings";
import AllUsers from "../Pages/Dashboard/Children/Admin/AllUsers/AllUsers";

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
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'userHome',
                element: <UserHome></UserHome>
            },
            {
                path: 'reservation',
                element: <Reservation></Reservation>
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: 'myCart',
                element: <MyCart></MyCart>
            },
            {
                path: 'addReview',
                element: <AddReview></AddReview>
            },
            {
                path: 'myBooking',
                element: <MyBooking></MyBooking>
            },
            {
                path: 'adminHome',
                element: <AdminHome></AdminHome>
            },
            {
                path: 'addItems',
                element: <AddItems></AddItems>
            },
            {
                path: 'manageItems',
                element: <ManageItems></ManageItems>
            },
            {
                path: 'manageBookings',
                element: <ManageBookings></ManageBookings>
            },
            {
                path: 'allUsers',
                element: <AllUsers></AllUsers>
            }
        ]
    }
])

export default Router