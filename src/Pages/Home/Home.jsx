import { useState } from "react";
import Add from "./Add";
import Products from "./Products";
import Loading from "../../Componts/Loading/Loading";


const Home = () => {
   const[loading,setLoading]=useState(true)

   if(loading) {
    return <Loading/>
   }
  return (
    <div className="px-5 py-[100px] pt-[100px] w-full h-screen overflow-y-scroll">
      <Add/> 
      <Products title='Top purched Itams'/>
      <Products title='Electrical  Iteams'/>
      <Products title='Funitures'/>
     </div>
  )
}

export default Home;