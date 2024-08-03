import {  RouterProvider,  createBrowserRouter } from "react-router-dom"
import MainLayout from "../Layout/MainLayout"
import Home from "../Pages/Home/Home";
import User from "../Pages/User/User";
import Login from "../Pages/Login/Login";
import UserProtected from "./UserProtected";
import Categoty from "../Pages/Category/Categoty";
import Categoryitems from "../Pages/Categoryitems/Categoryitems";
import ItemPage from "../Pages/ItemPage/ItemPage";

const router= createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[ // all nested routes called as childrean 
            {
                index:true, // in here we are activitate the index .index mean if we go / it goes to home 
                element:<Home/>,
            },
            {
                path:'category',// all the routes in side the MainLayout goes as the outlet 
                children:[
                   {
                    index:true, //When the path is /category, it shows the Categoty component.
                    element:<Categoty/>
                   },
                   {
                    path:':categoryId',
                    children:[
                      {
                        index:'true',
                        element:<Categoryitems/>
                      },
                      {
                        path:':iteamId',
                        element:<ItemPage/>
                      }  
                    ]
                   }
                ]
            },
            
            {
                element:<UserProtected/>, // user is only comeing when the logic inside Userprocted excuted 
                children:[
                    {
                        path:'profile',
                        element:<User/> // this is go as a outlet to the Userprotected 
                    }
                ]
            }
        ]
    },
    {
        path:'/login',
        element:<Login/>
    }
])

const AppRouter = () => {
    return <RouterProvider router={router}/>
//   return (
//     <div>
//      <BrowserRouter>
//        <Routes>
//         <Route path="/" element={<MainLayout/>}>
//           <Route index element={<Home/>}/>
//           <Route element={<UserProtected/>}>
//             <Route path="user" element={<User/>}/>
//           </Route>
//         </Route>
//         <Route path="login" element={<Login/>}/>
//        </Routes>
//      </BrowserRouter>
//     </div>
//   )
}

export default AppRouter;