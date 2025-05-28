import { PrivateRoutesRole } from "../components/privateRoutes"
import HotelRegistrationPage from "./HotelRegistrationPage"

export const HotelFormPage = () => {
  return (
    <>
        <PrivateRoutesRole element={<HotelRegistrationPage />}/>
    </>
  )
}
