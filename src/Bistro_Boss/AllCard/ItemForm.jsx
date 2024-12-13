import React from 'react';
import { useForm } from 'react-hook-form';
import { FaUtensils } from 'react-icons/fa';
const ItemForm = ({formName, onSubmit, item}) => {
    const {register,reset,handleSubmit, formState:{errors}} = useForm()
    return (
        <div className='w-full xl:w-[900px] bg-[#F3F3F3] mt-[64px] mb-[130px]'>
                <form onSubmit={handleSubmit(onSubmit)} className='w-full p-[50px] flex flex-col gap-3'>
                    <div className="form-control">
                        <label className="label">
                          <span className="label-text">Recipe name*</span>
                        </label>
                        <input type="text" {...register('name')} placeholder="Full Name" className="input focus:border-none focus:outline-none bg-white" required defaultValue={item && item.name}
                        />
                    </div>
                    <div className='w-full flex flex-col sm:flex-row gap-6'>
                        <div className="form-control w-full sm:w-1/2">
                            <label className="label">
                            <span className="label-text">Category*</span>
                            </label>
                            <select {...register('category')} defaultValue={item ? item.category : ""} className="select focus:border-none focus:outline-none bg-white" required>
                            <option disabled value={""}>Category*</option>
                            <option value={"salad"}>Salad</option>
                            <option value={"pizza"}>Pizza</option>
                            <option value={"soup"}>Soup</option>
                            <option value={"dessert"}>Dessert</option>
                            <option value={"drinks"}>Drink</option>
                            </select>
                        </div>
                        <div className="form-control w-full sm:w-1/2">
                            <label className="label">
                            <span className="label-text">Price*</span>
                            </label>
                            <input type="text" {...register('price')} placeholder="Price" className="input focus:border-none focus:outline-none bg-white" required defaultValue={item && item.price}
                            />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                          <span className="label-text">Recipe Details*</span>
                        </label>
                        <textarea {...register('recipe')} className="textarea focus:border-none focus:outline-none bg-white w-full max-h-[250px] min-h-[150px]" placeholder="Recipe Details" defaultValue={item && item.recipe}></textarea>
                    </div>
                    <div>
                        <label className="label">
                          <span className="label-text">Recipe photo*</span>
                        </label>
                        <input type="file" {...register('photo')} className="file-input pl-0 btn text-[#9da3ae] max-w-xs" defaultValue={item && item.photo}
                        />
                    </div>
                    <button className='btn text-white max-w-[180px] mt-8' style={{background: "linear-gradient(90deg, #835D23 0%, #B58130 100%)",}}>{formName}<FaUtensils></FaUtensils></button>
                </form>
        </div>
    );
};

export default ItemForm;