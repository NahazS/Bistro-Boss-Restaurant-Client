import React from 'react';
import { IoMenu } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { FaCircleUser } from "react-icons/fa6";
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className='relative z-50 bg-[#151515] bg-opacity-50'>
            <div className="navbar justify-between items-center text-white h-[95px] px-5 xl:px-0 xl:max-w-[1170px] mx-auto">
                <div className="flex flex-col text-left items-start">
                  <h1 className="text-xl lg:text-2xl font-extrabold">BISTRO BOSS</h1>
                  <span className='uppercase text-[18px] font-bold'>Restaurant</span>
                </div>
                <div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                          <IoMenu className='h-5 w-5'></IoMenu>
                        </div>
                        <ul
                          tabIndex={0}
                          className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-[1] mt-3 w-fit px-5 p-2 shadow text-[15px]">
                          <li><NavLink to={'/'}>Home</NavLink></li>
                          <li><NavLink to={'/contactUs'}>Contact us</NavLink></li>
                          <li><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
                          <li><NavLink to={'/ourMenu'}>Our Menu</NavLink></li>
                          <li><NavLink to={'/ourShop'}>Our Shop</NavLink></li>
                          <li><Link>Shopping Cart</Link></li>
                          <li>Sign Out</li>
                        </ul>
                    </div>  
                    <div className=" hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 items-center text-[15px] font-bold">
                            <li><NavLink to={'/'}>Home</NavLink></li>
                            <li><NavLink to={'/contactUs'}>Contact us</NavLink></li>
                            <li><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
                            <li><NavLink to={'/ourMenu'}>Our Menu</NavLink></li>
                            <li><NavLink to={'/ourShop'}>Our Shop</NavLink></li>
                            <li><Link ><FiShoppingCart className='w-5 h-5' /></Link></li>
                        </ul>
                    </div>
                    <div className="flex gap-1 items-center text-[15px] font-bold">
                        <NavLink to={'/signIn'} className="hidden sm:flex">Sign In</NavLink>
                        <Link><FaCircleUser className='w-5 h-5' /></Link>
                    </div>
                </div>
            </div>
                  
              
        </div>
    );
};

export default Navbar;