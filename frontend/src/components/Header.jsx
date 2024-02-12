import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Header = () => {
  const [isOpen, setNavOpen] = useState(false);

  const handleNav = () => {
    setNavOpen(!isOpen);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  const navigationItems = [
    { label: 'HOME', path: '/' },
    { label: 'CONTRIBUTE', path: '/contribute' },
  ];

  return (
    <div className="shadow-xl fixed w-full top-0 bg-white z-30 text-center">
      <div className="flex justify-between items-center h-[8vh] max-w-7xl 2xl:max-w-[1800px] mx-auto px-4 text-[#126954]">
        <Link to="/" className="flex items-center text-2xl sm:text-4xl">
          <span className="font-bold">SCIOTO</span>&nbsp;CONNECT
        </Link>
        <ul className="hidden xl:flex justify-center lg:text-xl space-x-8">
          {navigationItems.map((item) => (
            <li
              key={item.label}
              className="hover:bg-opacity-80 py-2 px-4 rounded-lg font-bold ease-in-out duration-300 text-white bg-[#126954]"
            >
              <Link to={item.path} onClick={closeNav}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="block xl:hidden" onClick={handleNav}>
          {isOpen ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
        <ul
          className={`fixed top-[8vh] w-full bg-white shadow-xl ease-in-out duration-500 border-t-[1.5px] border-gray-300 ${
            isOpen ? 'left-0' : 'left-[-100%]'
          }`}
        >
          {navigationItems.map((item) => (
            <li key={item.label} className="text-center text-lg font-bold py-4 border-b border-gray-300">
              <Link to={item.path} onClick={closeNav}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
