import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import OurMenu from "../pages/OurMenu/OurMenu/OurMenu";
import OurShop from "../pages/OurShop/OurShop/OurShop";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ContactUs from "../pages/ContactUs/ContactUs";


const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Main />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path:'/ourMenu',
                    element:<OurMenu/>
                },
                {
                    path:'/ourShop/:category',
                    element:<OurShop/>
                },
                {
                    path:'/contact',
                    element:<ContactUs/>
                },
                {
                    path: '/login',
                    element:<Login/>
        
                },
                {
                    path: '/signUp',
                    element:<SignUp/>
        
                }
                    
            ]
        },
        // auth related routes
      
        {
            path: '*',
            element: <h2>Page Not found</h2>
        }
    ]
)

export default router