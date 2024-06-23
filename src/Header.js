import React, { useEffect, useRef } from 'react';

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navlistRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      headerRef.current.classList.toggle('sticky', window.scrollY > 120);
    };

    const handleMenuClick = () => {
      menuRef.current.classList.toggle('bx-x');
      navlistRef.current.classList.toggle('active');
    };

    const handleWindowScroll = () => {
      menuRef.current.classList.remove('bx-x');
      navlistRef.current.classList.remove('active');
    };

    window.addEventListener('scroll', handleScroll);
    menuRef.current.addEventListener('click', handleMenuClick);
    window.addEventListener('scroll', handleWindowScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      menuRef.current.removeEventListener('click', handleMenuClick);
      window.removeEventListener('scroll', handleWindowScroll);
    };
  }, []);

  return (
    <header ref={headerRef}>
      <a href="#home" className="logo">Coder<span>X.</span></a>
      <div className="bx bx-menu" id="menu-icon" ref={menuRef}></div>
      <ul className="navlist" ref={navlistRef}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#service">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="top-btnn">
        <li><a href="#contact" className="cont-btnn">Contact Me</a></li>
      </div>
    </header>
  );
};

export default Header;
