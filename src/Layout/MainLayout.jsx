
import { Outlet } from "react-router-dom";
import Footer from "../Componts/Footer/Footer"
import Header from "../Componts/Header/Header"

const MainLayout = () => {
  return (
    <div  className="overflow-hidden w-screen  h-screen">
       <Header/>
       <Outlet/>
       <Footer/> 

    </div>
  )
}

export default MainLayout;