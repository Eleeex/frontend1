import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import user from '../assets/user.svg';
import Navbar from './Navbar';
import { MdClose, MdMenu } from 'react-icons/md';
import { RiShoppingCart2Line } from 'react-icons/ri';

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);

    const toggleMenu = () => {
        setMenuOpened(!menuOpened);
    };
        useEffect(() => {
            const handleScroll = () => {
                if (window.scrollY > 0) {
                if (menuOpened) {
                    setMenuOpened(false);
                }
                }
            };
            window.addEventListener("scroll", handleScroll);
            return() => {
                window.removeEventListener("scroll", handleScroll);
            };
        },[menuOpened]);



    return (
        <header className="max-padd-container w-full z-50">
            <div className="flexBetween py-3">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-x-2">
                    <img src={logo} alt="Logo" height={31} width={31} />
                    <span className="bold-24 hidden xs:flex">Merchanza</span>
                </Link>

                {/* Navbar & Buttons */}
                <div className="flexCenter gap-x-4">
                    {/* Desktop Navbar */}
                    <div>
                    <Navbar containerStyles="hidden xl:flex gap-x-5 xl:gap-x-10 medium-15 rounded-full px-2" />
                     </div>
                    {/* Mobile Navbar */}
                    {menuOpened && (
                        <div className="fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 z-50 flex flex-col gap-y-12">
                            <Navbar />
                        </div>
                    )}

                    {/* Toggle Menu Button and Additional Buttons */}
                    <div className="flexBetween gap-x-3 sm:gap-x-2 bold-16">
                        {menuOpened ? (
                            <MdClose
                                className="xl:hidden cursor-pointer text-3xl hover:text-secondary"
                                onClick={toggleMenu}
                            />
                        ) : (
                            <MdMenu
                                className="xl:hidden cursor-pointer text-3xl hover:text-secondary"
                                onClick={toggleMenu}
                            />
                        )}

                        <div className="flexBetween sm:gap-x-6">
                            {/* Shopping Cart Icon */}
                            <NavLink to="/cart" className="flex">
                                <RiShoppingCart2Line className="p-2 h-10 w-10 hover:text-secondary" />
                                <span className="relative flexCenter w-5 h-5 rounded-full bg-secondary text-primary medium-14 -top-2 right-3">
                                    {0}
                                </span>
                            </NavLink>

                            {/* User Login Button */}
                            <NavLink to="/login" className="btn-secondary gap-x-2 medium-16 rounded-xl flex items-center">
                                <img src={user} alt="User Icon" className="h-6 w-6" />
                                <span>Login</span>
                            </NavLink>

                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
