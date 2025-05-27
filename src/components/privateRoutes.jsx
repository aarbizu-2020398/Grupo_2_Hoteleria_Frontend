import { Navigate } from "react-router-dom"

const PrivateRoutes = ({element}) => {  


    const verification = localStorage.getItem("user")

    return verification ? element : <Navigate to={"/login"}/>

}

export default PrivateRoutes