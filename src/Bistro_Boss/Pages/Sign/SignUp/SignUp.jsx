import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form"
import { AuthContext } from '../../../Provider/AuthProvider';
const SignIn = () => {
    const {userSignUp, updateUser} = useContext(AuthContext)
    const {register, watch, handleSubmit, formState: { errors }} = useForm()
    const onSubmit = (data) => {
        const name = data.name
        const photo = data.photo
        const email = data.email
        const password = data.password
        userSignUp(email, password)
        .then(() => {
            updateUser(name, photo)
            .then(() => console.log("Successfully updated user profile"))
            .catch((error) => console.log("Profile Update Error: ", error.message));
        })
        .catch(error => console.log(error.message))
        console.log(data)
    }
    return (
        <div className="bg-[url('https://i.ibb.co.com/BnnrYJQ/authentication.png')] bg-cover bg-no-repeat py-4 xl:py-0 px-5 xl:px-0 h-screen w-screen flex justify-center items-center">
            <div className="card bg-base-100 max-w-[1250px] md:max-h-[700px] w-full  h-full shrink-0 shadow-2xl bg-[url('https://i.ibb.co.com/BnnrYJQ/authentication.png')] bg-cover bg-no-repeat flex flex-col  sm:flex-row-reverse items-center justify-between">
                <div className='w-full sm:h-auto sm:w-1/2 hidden sm:flex'>
                    <img src="https://i.ibb.co.com/NYMTSwY/authentication2.png" alt="" />
                </div>  
                <div className='w-full max-h-full sm:h-auto sm:w-1/2 max-w-[536px] my-auto flex flex-col'>
                    <h1 className='text-[30px] font-Inter font-bold text-center'>Sign Up</h1>
                    <form className="card-body min-w-full mt-[-20px]" onSubmit={handleSubmit(onSubmit)}>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name")} placeholder="Full Name" className="input input-bordered" required 
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email")} placeholder="email" className="input input-bordered" required 
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" {...register("photo")} placeholder="Your Profile Photo URL" className="input input-bordered" required 
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password",{ required: "Password is required.", pattern: {value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, message: "Password must be at least 8 characters, include uppercase, lowercase, number, and special character."}})} placeholder="password" className="input input-bordered"
                        />
                        {errors.password && <p>{errors.password.message}</p>}
                      </div>
                      <div className="form-control mt-6">
                        <button className="btn bg-[#d6bb8b]">SignUp</button>
                      </div>
                      <h5 className='text-[#D1A054] text-[16px] font-Inter font-medium text-center'>Already registered?<Link to={'/signIn'}>Go to log in</Link></h5>
                      <h4 className='text-[#444] text-[20px] font-Inter font-medium text-center'>Or sign in with</h4>
                      <div className='flex mx-auto gap-x-[30px]'>
                        <button className='w-[40px] h-[40px] flex items-center justify-center border-2 border-[#444] rounded-full'><FaFacebookF /></button>
                        <button className='w-[40px] h-[40px] flex items-center justify-center border-2 border-[#444] rounded-full'><FaGoogle /></button>
                        <button className='w-[40px] h-[40px] flex items-center justify-center border-2 border-[#444] rounded-full'><FaGithub /></button>
                      </div>
                    </form>
                    <img className='flex sm:hidden' src="https://i.ibb.co.com/NYMTSwY/authentication2.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default SignIn;