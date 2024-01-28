
import { createBrowserRouter } from "react-router-dom"

import Register from "../pages/Register"
import Verify from "../pages/Verify"
import Login from "../pages/Login"
import AuthLayout from "../Lay/AuthLayout"
import Layout from "../Lay/Layout"
import Createstudy from "../pages/Createstudy"
import Hero from "../components/static/Hero"


export const mainrouter = createBrowserRouter([
    {
        path: "/",
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <Hero />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/verify",
                element: <Verify />
            },


        ]
    },
    {
        path: "/dash",
        element: <Layout />,
        children: [
            {
                path: "add",
                element: <Createstudy />
            }
        ],

    },


])