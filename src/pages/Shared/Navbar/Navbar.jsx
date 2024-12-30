import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const menuStyle = 'font-bold uppercase text-xl text-white hover:text-primary bg-none hover:bg-none'

    const menuOption =
        <>
            <li><Link to='/' className={menuStyle}>home</Link></li>
            <li><Link to='' className={menuStyle}>Contactus</Link></li>
            <li><Link to='' className={menuStyle}>dashboard</Link></li>
            <li><Link to='' className={menuStyle}>our menu</Link></li>
            <li><Link to='' className={menuStyle}>our shop</Link></li>
            <li><Link to='' className={menuStyle}>cart</Link></li>
        </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {menuOption}
                    </ul>
                </div>
                <div>

                    <a className="text-3xl font-cinzel font-black text-white uppercase">bistro boss</a>
                    <p className='uppercase font-cinzel font-bold text-white tracking-[.25em] text-2xl'>restaurant</p>
                </div>
            </div>
           
            <div className="navbar-end">
                <ul className="menu menu-horizontal px-1">
                    {menuOption}
                </ul>
                <a className={menuStyle}>sign out</a>
            </div>
        </div>
    );
};

export default Navbar;