
import { Outlet } from "react-router-dom";
import Footer from "../Componts/Footer/Footer"
import Header from "../Componts/Header/Header"

const MainLayout = () => {
  return (
    <div  className="overflow-hidden w-screen  h-screen">
       <Header/>
       <Outlet/> {/* all nested routes coming to here.when we go to home all home come to this outlet and header and foter is there */}
       <Footer/> 

    </div>
  )
}

export default MainLayout;