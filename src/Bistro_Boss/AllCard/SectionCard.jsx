import React from 'react';

const SectionCard = ({section}) => {
    const {image, title, description} = section
    return (
        <div className='max-w-[990px] px-5 xl:px-0 mx-auto'>
            <div className="bg-[url('https://i.ibb.co.com/xznrLkx/chef-service.jpg')] bg-cover min-h-[429px] w-full mx-auto relative flex justify-center items-center mt-[100px]">
                <div className='bg-white absolute mx-8 xl:mx-0 lg:w-[822px] text-center min-h-[250px] flex flex-col  justify-center'>
                    <h1 className='font-Cinzel text-[32px]'>Bistro Boss</h1>
                    <p className='font-Inter text-[12px] max-w-[571px] mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>
        </div>
    );
};

export default SectionCard;