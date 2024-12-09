import axios from 'axios';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';
import useCart from '../Hooks/useCart';

const FoodCard = ({food}) => {
    const {refetch} = useCart()
    const navigate = useNavigate()
    const {user} = useContext(AuthContext)
    const {_id,name, recipe, image, category, price} = food
    const handleAddCart = () => {
      if(user && user.email)
      {
        axios.post('http://localhost:3000/cart',{
          menuId: _id,
          email: user.email,
          name,
          recipe,
          image,
          category,
          price,
        })
        .then(res => {
          console.log(res.data)
          if (res.data.insertedId) {
              Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `${name} added to your cart`,
                  showConfirmButton: false,
                  timer: 1500
              });
              // refetch cart to update the cart items count
              refetch();
          }
        })
      } else {
        navigate('/signIn')
      }
    }
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
                  <button onClick={handleAddCart} className="btn bg-[#E8E8E8] absolute bottom-2 left-[50%] translate-x-[-50%] hover:bg-[#1F2937] border-[3px] border-[#BB8506] text-[#BB8506] border-t-0 border-x-0">ADD TO CART</button>
                </div>
              </div>
            </div>
        </div>
    );
};

export default FoodCard;