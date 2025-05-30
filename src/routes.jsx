import { Navigate } from "react-router";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import EventRoomFormPage from "./pages/EventRoomFormPage";
import { Dashboard } from "./pages/Dashboard";
import { HotelFormPage, PrivateFormRoom, PrivateUsersPage, PrivateListRooms, PrivateResources, PrivateRSPage, PrivateServices } from "./pages/privatePagesAdmin";
import { RoomFormPage } from "./pages/privatePagesAdmin";
import LoungeForm from "./pages/LoungesForm";

const routes = [
    {path: "/HomePage", element: <HomePage />},
    {path: "/register", element: <RegisterPage />},
    {path: "/login", element: <LoginPage />},
    {path: "/hotel-form", element: <HotelFormPage />},
    {path: "/room-form", element: <RoomFormPage />},
    {path: "/event-room-form", element: <EventRoomFormPage />},
    {path: "/", element: <Navigate to={"/Homepage"}/>},
    {path: "/dashboard", element: <Dashboard/>},
    {path: "/add-room", element: <PrivateFormRoom/>},
    {path: "/services-form", element: <PrivateServices/>},
    {path: "/room-list", element: <PrivateListRooms/>},
    {path: "/resources-list", element: <PrivateResources/>},
    {path: "/services-list", element: <PrivateServices/>},
    {path: "/ServicesAndResources", element: <PrivateRSPage/>},
    {path: "/lounges", element: <LoungeForm/>},
    {path: "/usersAdmin", element: <PrivateUsersPage/>},
]

export default routes
