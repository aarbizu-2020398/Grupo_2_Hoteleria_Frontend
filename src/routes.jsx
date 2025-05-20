import { Navigate } from "react-router";
import React from 'react'
import HomePage from "./pages/HomePage";

const routes = [
    {path: "/HomePage", element: <HomePage />},
    {path: "/", element: <Navigate to={"/Homepage"}/>}
]

export default routes
