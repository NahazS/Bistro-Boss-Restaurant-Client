import React from 'react';

const FoodCard = ({food}) => {
    const {name, recipe, image} = food
    return (
        <div>
            <div className="card bg-[#F3F3F3] w-[318px] h-[405px] shadow-xl rounded-none">
              <figure className="h-[225px]">
                <img loading='lazy' className='h-full object-fill' src={image}  alt="Shoes" />
              </figure>
              <div className="flex flex-col items-center text-center">
                <h2 className="mt-6 text-[18px] font-Inter font-semibold">{name}</h2>
                <p className='max-w-[258px] text-[12px] font-Inter'>{recipe}</p>
                <div className="card-actions">
                  <button className="btn btn-[#E8E8E8] absolute bottom-2 left-[50%] translate-x-[-50%] hover:bg-[#1F2937] border-[3px] border-[#BB8506] text-[#BB8506] border-t-0 border-x-0">ADD TO CART</button>
                </div>
              </div>
            </div>
        </div>
    );
};

export default FoodCard;