import { Navigate } from "react-router"
import { DashboardPageAdmin } from "./Dashboards/DashboardPageAdmin"
import  DashboardUser  from "./Dashboards/DashboardUser"
import {  PrivateRoutesRole, PrivateRoutes } from "../components/privateRoutes"

export const Dashboard = () => {
    const role = localStorage.getItem("roleUser")
    if(role === "USER"){
        return (
            <PrivateRoutes element={<DashboardUser />}/>
        )
    }else if(role === "ADMIN_PLATAFORM"){
        return (
            <>
                <PrivateRoutesRole element = {<DashboardPageAdmin/>}/>
            </>
        )
    }else{
        return <Navigate to={"/login"}/>
    }
}
