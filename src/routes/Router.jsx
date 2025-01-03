import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import OurMenu from "../pages/OurMenu/OurMenu/OurMenu";
import OurShop from "../pages/OurShop/OurShop/OurShop";


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
                    path:'/ourShop',
                    element:<OurShop/>
                }
                    
            ]
        },
        {
            path: '*',
            element: <h2>Page Not found</h2>
        }
    ]
)

export default router