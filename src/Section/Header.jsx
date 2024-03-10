import React from 'react';
import { Link } from 'react-scroll';
import { useState } from 'react';
import { FaXmark, FaBars } from 'react-icons/fa6'


const Header = () => {

  const [ismenuOpen, setisMenuOpen] = useState(false);

  const toggelmenu = () => {
    setisMenuOpen(!ismenuOpen);
  }

  const closeMenu = () => {
    setisMenuOpen(false);
  }
  const navItems = [
    { link: 'Home', path: 'home' },
    { link: 'About', path: 'about' },
    { link: 'Menu', path: 'menu' },
    { link: 'Gallery', path: 'Gallery' },
    { link: 'Contact', path: 'contact' },
  ]
  return (
    <nav className='flex justify-between items-center gap-4 bg-slate-800 lg:px-10 px-4 py-6 sticky top-0 z-30'>
      <div id='logo'>
      <h1 className="text-3xl lg:text-5xl font-bold text-blue-500 italic">
      Flavor Fusion
    </h1>
      </div>

      <ul className='lg:flex justify-center item-center gap-10 hidden'>
        {navItems.map(({ link, path }) => (
          <Link key={path} to={path} spy={true} offset={-100} smooth={true} className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-orange-500 hover:text-black">{link}</Link>
        ))}
      </ul>
      {/* Mobile menu starts */}

      <div className='flex justify-center items-center lg:hidden' onClick={toggelmenu}>
        <div>
          {ismenuOpen ? <FaXmark className='text-white text-2xl cursor-pointer' /> : <FaBars className='text-white text-2xl cursor-pointer' />}
        </div>
      </div>
      <div className={`${ismenuOpen ? 'flex' : 'hidden'} w-full h-fit bg-slate-800 p-4 absolute top-[80px] left-0`} onClick={closeMenu}>
        <ul className='flex flex-col justify-center items-center gap-2 w-full'>
          {navItems.map(({ link, path }) => (
            <Link key={path} to={path} spy={true} offset={-100} smooth={true} className='text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-orange-500 hover:text-black w-full text-center'>{link}</Link>
          ))}
        </ul>
      </div>

      <button className='bg-green-500 px-8 py-3 rounded-full hover:bg-orange-500 hover:text-black font-bold mt-3 hidden lg:flex'>ORDER NOW</button>

    </nav>
  )
}

export default Header