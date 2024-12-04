import React from 'react';

const SectionCard = ({section}) => {
    const {image, title, description} = section
    console.log(image)
    return (
            <div style={{backgroundImage: `url('${image ? image : 'https://i.ibb.co/xznrLkx/chef-service.jpg'}')`,}} className={`${image ? 'absolute -top-[100px] max-h-[600px]' : 'relative max-h-[525px]'} bg-cover w-full h-full mx-auto flex justify-center items-center mt-[100px] text-white`}>
                <div className={`bg-[#151515] bg-opacity-60 absolute mx-8 xl:mx-0 ${image ? 'max-w-[990px] max-h-[337px] ' : 'max-w-[822px] max-h-[262px]'} text-center  flex flex-col  justify-center w-full h-full`}>
                    <h1 className={`font-Cinzel ${image ? 'text-[66px] font-bold' : 'text-[33px] font-semibold'}`}>{title}</h1>
                    <p className={`font-Inter font-semibold ${image ? 'text-[18px]' : 'text-[12px]'} max-w-[571px] mx-auto`}>{description}</p>
                </div>
            </div>
    );
};

export default SectionCard;