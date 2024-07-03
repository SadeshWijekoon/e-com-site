import Add from "./Add";
import Products from "./Products";


const Home = () => {
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