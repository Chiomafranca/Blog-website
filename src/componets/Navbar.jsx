import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoTwitter } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  // navitems
  const navItems = [
    { path: "/", link: "Home" },
    { path: "/services", link: "Services" },
    { path: "/about", link: "About" },
    { path: "/blogs", link: "Blogs" },
    { path: "/contact", link: "Contact" }
  ];

  return (
    <div>
      <header className='bg-gray-800 text-neutral-200'>
        <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
          <a href="/" className='text-xl font-bold text-white'>Design <span className='text-neutral-500'>CH</span></a>

          {/* navItems for lg devices*/}
          <ul className='md:flex gap-12 text-lg hidden'>
            {navItems.map(({ path, link }) => (
              <li key={path} className='text-neutral-200'>
                <NavLink  className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    } to={path}>{link}</NavLink>
              </li>
            ))}
          </ul>

          {/* menu icons */}
          <div className='text-neutral-200 lg:flex gap-4 items-center hidden'>
            <a href="/" className='hover:text-blue-400'><AiFillFacebook /></a>
            <a href="/" className='hover:text-pink-700'><BiLogoTwitter /></a>
            <a href="/" className='hover:text-red-500'><AiFillInstagram /></a>
            <button className='bg-pink-800 px-6 py-2 font-medium rounded hover:bg-slate-300 hover:text-pink-800 transition-all duration-200 ease-in'>Log in</button>
          </div>

          {/* mobile menu btn, display only on mobile screen */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isMenuOpen ? <AiOutlineClose />: <FaBars />}
            </button>
          </div>
        </nav>

        {/* meun items only for mobile */}

<div>
  <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-slate-200 ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all duration-150 ease-out" :"hidden"}`}>
            {navItems.map(({ path, link }) => (
<li key={path} className='text-neutral-800'>
     <NavLink onClick={toggleMenu} to={path}>{link}</NavLink>
   </li>
 ))}
          </ul>
     </div>

      </header>
    </div>
  )
}

export default Navbar;
