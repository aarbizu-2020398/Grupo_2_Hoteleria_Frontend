import { Navigate } from "react-router";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import RoomFormPage from "./pages/RoomFormPage";
import EventRoomFormPage from "./pages/EventRoomFormPage";
import { Dashboard } from "./pages/Dashboard";
import { HotelFormPage } from "./pages/privatePagesAdmin";

const routes = [
    {path: "/HomePage", element: <HomePage />},
    {path: "/register", element: <RegisterPage />},
    {path: "/login", element: <LoginPage />},
    {path: "/hotel-form", element: <HotelFormPage />},
    {path: "/room-form", element: <RoomFormPage />},
    {path: "/event-room-form", element: <EventRoomFormPage />},
    {path: "/", element: <Navigate to={"/Homepage"}/>},
    {path: "/dashboard", element: <Dashboard/>}
]

export default routes
