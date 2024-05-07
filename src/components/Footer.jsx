import React from 'react';
import Navbar from './Navbar';
import SocialIcons from './SocialIcons';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='max-padd-container bg-tertiary py-8'>
      <div className='flex flex-col items-center gap-y-4'>
        {/* Logo */}
        <Link to="/" className="flex items-center gap-x-2">
          <img src={logo} alt="Logo" height={31} width={31} />
          <span className="bold-24 hidden text-white xs:flex">Merchanza</span>
        </Link>

        {/* Navbar */}
        <div className='py-5'>
          <nav className="flex gap-x-5 xl:gap-x-10 text-white medium-15 rounded-full">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/clothing" className="hover:underline">Clothing</Link>
            <Link to="/cosmetics" className="hover:underline">Cosmetics</Link>
            <Link to="/electronics" className="hover:underline">Electronics</Link>
          </nav>
        </div>

        {/* Social Icons */}
        <SocialIcons />

        {/* Horizontal Divider */}
        <hr className="my-4 border-gray-400 w-full" />

        {/* Copyright Line */}
        <div className="text-sm text-gray-400">
          Copyright &copy; Merchanza | All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
