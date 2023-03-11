import React from 'react'
import Logo from './logo/Logo';
import './header.css';
import Navbar from './navbar/Navbar';
import Button from './button/Button';

const Header = () => {
  return (
    <>
    <div className='header'>
        <Logo />
        <Navbar />
        <Button />
    </div>
    </>
  )
}

export default Header
