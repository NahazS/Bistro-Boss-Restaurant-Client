import React from 'react';
import { FaFacebookF, FaInstagram,FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <div>
            <footer className="bg-neutral flex flex-col sm:flex-row  text-white font-Inter h-[600px] sm:h-[300px] mt-[97px]">
                <div className='bg-[#1F2937] w-full h-full flex flex-col justify-center items-center'>
                  <h6 className="text-[24px] font-medium">Services</h6>
                  <p className="text-[15px]">123 ABS Street, Uni 21, Bangladesh</p>
                  <p className="text-[15px]">+88 123456789</p>
                  <p className="text-[15px]">Mon - Fri: 08:00 - 22:00</p>
                  <p className="text-[15px]">Sat - Sun: 10:00 - 23:00</p>
                </div>
                <div className='bg-[#111827] w-full h-full flex flex-col justify-center items-center'>
                    <h6 className="text-[24px] font-medium mb-[18px]">Follow US</h6>
                    <p className="text-[15px] mb-6">Join us on social media</p>
                    <div className='flex gap-x-6'>
                        <FaFacebookF  className='w-[26px] h-[26px]'/>
                        <FaInstagram  className='w-[26px] h-[26px]'/>
                        <FaTwitter    className='w-[26px] h-[26px]'/>
                    </div>
                </div>
            </footer>
            <aside className='bg-[#151515] text-white text-center py-[12px]'>
                  <p>Copyright © {new Date().getFullYear()} - CulinaryCloud. All rights reserved.</p>
            </aside>
        </div>
    );
};

export default Footer;