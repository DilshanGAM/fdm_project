import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';

import './Header.css'; // Import a CSS file for styling (e.g., Header.css)
import { useEffect, useState } from 'react';

const Header = () => {
    const location = useLocation();
    const [activeNavLink, setActiveNavLink] = useState('home');

    useEffect(() => {
        if (location.pathname === '/') {
            setActiveNavLink('home');
        } else if (location.pathname === '/about') {
            setActiveNavLink('about');
        }else if (location.pathname === '/statistics') {
            setActiveNavLink('statitics');
        }
    }, [location]);

    return (
        <header className="w-full bg-primary min-h-[50px] max-h-[50px] flex items-center absolute test">
            <img src={logo} alt="logo" className='h-[40px] absolute' />
            <div className='w-full h-full flex items-center justify-end p-4'>
                <NavLink to='/' className={`text-white  text-base font-bold relative ${activeNavLink === "home" ? "border-b-[1px] border-white" : ""} nav-link z-[100]`}>Home</NavLink>
                <NavLink to='/about' className={`z-[100] text-white nav-link text-base font-bold ml-8 relative ${activeNavLink === "about" ? "border-b-[1px] border-white" : ""}`}>About</NavLink>
                <NavLink to='/statistics' className={`z-[100] text-white nav-link text-base font-bold ml-8 relative ${activeNavLink === "statitics" ? "border-b-[1px] border-white" : ""}`}>Statistics</NavLink>
            </div>
            
        </header>
    );
}

export default Header;
