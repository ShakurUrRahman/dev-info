import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-slate-500 text-white md:px-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact  dropdown-content mt-3 p-2 shadow  nav-list bg-black">
                            <NavLink to='/'>Topics</NavLink>
                            <NavLink to='/statistics'>Statistics</NavLink>
                            <NavLink to='/blog'>Blog</NavLink>
                        </ul>
                    </div>
                    <div>
                        <Link to='/' className='lg:text-4xl text-xl font-extrabold text-[#61DAFB]'>Dev <span className='text-[#F7E018]'>Info</span></Link>
                    </div>
                </div>
                <div className="navbar-end nav-list hidden lg:flex">
                    <div className="menu menu-horizontal p-0">
                        <NavLink to='/'>Topics</NavLink>
                        <NavLink to='/statistics'>Statistics</NavLink>
                        <NavLink to='/blog'>Blog</NavLink>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Navbar;