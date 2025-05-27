import { Navigate } from "react-router"
import { DasboardPrivateUser, DashboardPrivate } from "./Dashboards/DashboardPrivate"

export const Dashboard = () => {
    const role = localStorage.getItem("roleUser")
    if(role === "USER"){
        return <DasboardPrivateUser />
    }else if(role === "ADMIN_PLATAFORM"){
        return <DashboardPrivate />
    }else{
        return <Navigate to={"/login"}/>
    }
}
