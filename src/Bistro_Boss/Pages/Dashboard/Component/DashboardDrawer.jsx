import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaCalendarAlt, FaWallet, FaShoppingCart, FaCalendarCheck } from "react-icons/fa";
import { MdEmail, MdMenu, MdRateReview } from "react-icons/md";
import { FaBagShopping, FaBook, FaUsers, FaUtensils } from 'react-icons/fa6';
const DashboardDrawer = ({isAdmin}) => {
    return (
        <div>
            <div className="drawer lg:drawer-open h-full z-50">
              <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content flex justify-between items-center bg-[#D1A054] h-[95px]">
                {/* Page content here */}
                <div className='lg:hidden'>
                  <h1 className='text-2xl font-Cinzel font-extrabold'>BISTRO BOSS</h1>
                  <h2 className='text-[18px] font-Cinzel font-bold uppercase'>R e s t a u r a n t</h2>
                </div>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                  <MdMenu/>
                </label>
              </div>
              <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu text-base-content min-h-full w-[250px] p-4 bg-[#D1A054] pt-[50px] pl-[35px]">
                  {/* Sidebar content here */}
                  <h1 className='text-2xl font-Cinzel font-extrabold'>BISTRO BOSS</h1>
                  <h2 className='text-[18px] font-Cinzel font-bold uppercase mb-[52px]'>R e s t a u r a n t</h2>
                  <div>
                    {
                      isAdmin ? <>
                      <NavLink to={'adminHome'}><p className='text-[18px] font-Cinzel font-medium flex gap-x-[10px] items-center mb-6'><FaHome />Admin Home</p></NavLink>
                      <NavLink to={'addItems'}><p className='text-[18px] font-Cinzel font-medium flex gap-x-[10px] items-center mb-6'><FaUtensils />Add Items</p></NavLink>
                      <NavLink to={'manageItems'}><p className='text-[18px] font-Cinzel font-medium flex gap-x-[10px] items-center mb-6'><MdMenu />Manage Items</p></NavLink>
                      <NavLink to={'manageBookings'}><p className='text-[18px] font-Cinzel font-medium flex gap-x-[10px] items-center mb-6'><FaBook />Manage Bookings</p></NavLink>
                      <NavLink to={'allUsers'}><p className='text-[18px] font-Cinzel font-medium flex gap-x-[10px] items-center mb-6'><FaUsers />All Users</p></NavLink>
                      </> 
                      : <>
                      <NavLink to={'userHome'}><p className='text-[18px] font-Cinzel font-medium flex gap-x-[10px] items-center mb-6'><FaHome />User Home</p></NavLink>
                      <NavLink to={'reservation'}><p className='text-[18px] font-Cinzel font-medium flex gap-x-[10px] items-center mb-6'><FaCalendarAlt />Reservation</p></NavLink>
                      <NavLink to={'paymentHistory'}><p className='text-[18px] font-Cinzel font-medium flex gap-x-[10px] items-center mb-6'><FaWallet />Payment History</p></NavLink>
                      <NavLink to={'myCart'}><p className='text-[18px] font-Cinzel font-medium flex gap-x-[10px] items-center mb-6'><FaShoppingCart />My Cart</p></NavLink>
                      <NavLink to={'addReview'}><p className='text-[18px] font-Cinzel font-medium flex gap-x-[10px] items-center mb-6'><MdRateReview />Add Review</p></NavLink>
                      <NavLink to={'myBooking'}><p className='text-[18px] font-Cinzel font-medium flex gap-x-[10px] items-center mb-6'><FaCalendarCheck />My Booking</p></NavLink>
                      </>
                    }
                  </div>
                  <hr  className='text-white'/>
                  <NavLink to={'/'}><p className='text-[18px] font-Cinzel font-medium flex gap-x-[10px] items-center my-6'><FaHome />Home</p></NavLink>
                  <NavLink to={'/ourMenu'}><p className='text-[18px] font-Cinzel font-medium flex gap-x-[10px] items-center mb-6'><MdMenu />Menu</p></NavLink>
                  <NavLink to={'/ourShop'}><p className='text-[18px] font-Cinzel font-medium flex gap-x-[10px] items-center mb-6'><FaBagShopping />Shop</p></NavLink>
                  <NavLink to={'/contactUs'}><p className='text-[18px] font-Cinzel font-medium flex gap-x-[10px] items-center mb-6'><MdEmail />Contact</p></NavLink>
                </ul>
              </div>
            </div>
        </div>
    );
};

export default DashboardDrawer;