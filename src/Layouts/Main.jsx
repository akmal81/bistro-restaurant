import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../pages/Shared/Navbar/Navbar';
import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {

    const location = useLocation();
    console.log(location.pathname);
    const noHeaderFooter = location.pathname.includes('login')
    return (
        <>
        {
            location.pathname === '/login'|| location.pathname === '/signUp'? '': <Navbar />
        }
            <Outlet />
            {
            location.pathname === '/login'|| location.pathname === '/signUp'? '': <Footer/>
        }
        </>
    );
};
export default Main;