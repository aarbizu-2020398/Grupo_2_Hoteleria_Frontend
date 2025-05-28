import { PrivateRoutesRole } from "../components/privateRoutes"
import RoomForm from "../components/room/roomForm"
import HotelRegistrationPage from "./HotelRegistrationPage"
import RoomFormPages from "./RoomFormPage"
import RoomListPage from "./RoomList"
import AddServicePage from "./Services"

export const HotelFormPage = () => {
  return (
    <>
        <PrivateRoutesRole element={<HotelRegistrationPage />}/>
    </>
  )
}

export const RoomFormPage = () =>{
  return(
    <>
      <PrivateRoutesRole element={<RoomFormPages/>}/>
    </>
  )
}

export const PrivateFormRoom = () =>{
  return(
    <>
      <PrivateRoutesRole element={<RoomForm/>}/>
    </>
  )
}

export const PrivateServices = () =>{
  return(
    <>
      <PrivateRoutesRole element={<AddServicePage/>}/>
    </>
  )
}

export const PrivateListRooms = () =>{
  return(
    <>
      <PrivateRoutesRole element={<RoomListPage/>}/>
    </>
  )
}