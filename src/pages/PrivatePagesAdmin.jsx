import { PrivateRoutesRole } from "../components/privateRoutes"
import RoomForm from "../components/room/roomForm"
import HotelRegistrationPage from "./HotelRegistrationPage"
import AddResourcePage from "./ResourcesForm"
import RoomFormPages from "./RoomFormPage"
import RoomListPage from "./RoomList"
import RSPage from "./RSPage"
import AddServicePage from "./Services"
import UsersPages from "./UsersPages"

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

export const PrivateResources = () =>{
  return(
    <>
      <PrivateRoutesRole element={<AddResourcePage/>}/>
    </>
  )
}

export const PrivateRSPage = () =>{
  return(
    <>
      <PrivateRoutesRole element={<RSPage/>}/>
    </>
  )
}

export const PrivateUsersPage = () =>{
  return(
    <>
      <PrivateRoutesRole element={<UsersPages/>}/>
    </>
  )
}