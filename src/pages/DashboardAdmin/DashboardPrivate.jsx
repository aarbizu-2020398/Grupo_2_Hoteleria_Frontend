import { DashboardPageAdmin } from "./DashboardPageAdmin"
import PrivateRoutes from "../../components/privateRoutes"

export const DashboardPrivate = () => {

    return (
    <>
        <PrivateRoutes element= {<DashboardPageAdmin/>}/>
    </>
  )
}
