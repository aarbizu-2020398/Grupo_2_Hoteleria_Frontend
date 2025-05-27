import { DashboardPageAdmin } from "./DashboardPageAdmin"
import { PrivateRoutes } from "../../components/privateRoutes"
import { PrivateRoutesRole } from "../../components/privateRoutes"
import DashboardUser from "./DashboardUser"

export const DashboardPrivate = () => {
    return (
    <>
        <PrivateRoutes element= {<DashboardPageAdmin/>}/>
        <PrivateRoutesRole element = {<DashboardPageAdmin/>}/>
    </>
  )
}

export const DasboardPrivateUser = () =>{
  return (
      <>
        <PrivateRoutes element={<DashboardUser />}/>
      </>
  )
}