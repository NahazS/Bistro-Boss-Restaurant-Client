import React from 'react';
import SectionCard from '../../../AllCard/SectionCard';

const Banner = () => {
    const section = {image: "https://i.ibb.co.com/55pcBVd/banner3.jpg", title: "OUR MENU", description: "description"}
    return (
        <div>
            <div className='w-screen h-[600px]'>
                <SectionCard section={section}></SectionCard>
            </div>
        </div>
    );
};

export default Banner;