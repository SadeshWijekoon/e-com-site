import { Navigate, Outlet } from "react-router-dom";


const UserProtected = () => {
    const user=false
  return user?<Outlet/>: // user is coming as the outlet 
    <Navigate to ='/login'/> // if uder not found it will direct to the login 
}

export default UserProtected;