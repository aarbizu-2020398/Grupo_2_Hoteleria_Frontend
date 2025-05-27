import { Navigate } from "react-router-dom"

export const PrivateRoutes = ({element}) => {  

    const verification = localStorage.getItem("user")

    return verification ? element : <Navigate to={"/login"}/>

}

export const PrivateRoutesRole = ({element}) =>{

    const verificationAdmin = localStorage.getItem("roleUser")
    return verificationAdmin === "ADMIN_PLATAFORM"? element : <Navigate to={"/homePage"}/>
}