import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";


const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Main />,
            children: [
                {
                    path: '/',
                    element: <h2>Real home</h2>
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