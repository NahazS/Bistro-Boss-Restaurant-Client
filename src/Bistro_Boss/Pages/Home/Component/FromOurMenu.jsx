import React from 'react';
import SectionTitle from '../../../AllCommonDiv/SectionTitle';

const FromOurMenu = () => {
    return (
        <div className='mt-[97px] px-5 xl:px-0 mx-auto'>
            <div className="relative bg-cover bg-center h-fit xl:h-[636px] w-full bg-[url('https://i.ibb.co.com/Lp14Ygw/featured.jpg')]">
                <div className="absolute inset-0 bg-black bg-opacity-50 h-full">
                </div>
                <div className='relative z-10 flex flex-col justify-center items-center pt-[97px] px-5 xl:px-0'>
                    <SectionTitle title={"FROM OUR MENU"} subTitle={"Check it out"} color={true}></SectionTitle>
                    <div className='flex flex-wrap pt-9 gap-[51px] items-center justify-center w-full'>
                        <img className='max-w-[486px] max-h-[300px] w-full' src="https://i.ibb.co.com/Lp14Ygw/featured.jpg" alt="" />
                        <div className='text-white'>
                            <p className='max-w-[453px]'>March 20, 2023<br /> WHERE CAN I GET SOME?<br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                            <button className='btn border-white border-[3px] border-t-0 border-x-0 max-w-[177px] mx-auto flex mt-9'>View Full  Menu</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FromOurMenu;