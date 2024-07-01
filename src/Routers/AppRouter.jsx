import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "../Layout/MainLayout"
import Home from "../Pages/Home/Home";
import User from "../Pages/User/User";



const AppRouter = () => {
  return (
    <div>
     <BrowserRouter>
       <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home/>}/>
           <Route path="user" element={<User/>}/>
        </Route>
       </Routes>
     </BrowserRouter>
    </div>
  )
}

export default AppRouter;