import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useForm } from 'react-hook-form';
import Loading from '../../LoadingErrorPage/Loading';
const SignIn = () => {
    const {userSignIn, user, userSignOut, loading} = useContext(AuthContext)
    if(loading)
    {
        return <h1>loading</h1>
    }
    const {register, handleSubmit, formState:{errors}, reset} = useForm()
    const [signInError, setSignInError] = useState(null)
    useEffect(() => {
        loadCaptchaEnginge(10,'transparent');
    }, [])
    const [isValid, setIsValid] = useState(false)
    
    const handleValidateCaptcha = (e) => {
        const captcha = e.target.value
        if (validateCaptcha(captcha)) {
          setIsValid(true);
        }
    };
    const onSubmit = (data) => {
        const email = data.email
        const password = data.password
        userSignIn(email, password)
        .then((result) => {
            console.log(result.user)
            reset();
        })
        .catch(error => {
            console.log(error.message)
            setSignInError(error.message)
        })
    }
    const handleSignOut = () => {
        userSignOut()
        .then(() =>{
            console.log("signOut successfully")
            setSignInError(null)
        })
        .catch((error) => console.log(error.message))
    }
    return (
        <div className="bg-[url('https://i.ibb.co.com/BnnrYJQ/authentication.png')] bg-cover bg-no-repeat py-4 xl:py-0 px-5 xl:px-0 h-screen w-screen flex justify-center items-center">
            <div className="card bg-base-100 max-w-[1250px] md:max-h-[700px] w-full  h-full shrink-0 shadow-2xl bg-[url('https://i.ibb.co.com/BnnrYJQ/authentication.png')] bg-cover bg-no-repeat flex flex-col sm:flex-row items-center justify-between">
                <div className='w-full sm:h-auto sm:w-1/2 hidden sm:flex'>
                    <img src="https://i.ibb.co.com/NYMTSwY/authentication2.png" alt="" />
                </div>  
                <div className='w-full max-h-full sm:h-auto sm:w-1/2 max-w-[536px] my-auto flex flex-col'>
                    <h1 className='text-[30px] font-Inter font-bold text-center'>Sign In</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body min-w-full mt-[-20px]">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required {...register('email')} defaultValue={user?.email} disabled={user}
                        />
                      </div>
                      <div className={`input input-bordered items-center flex mt-5 ${user && 'hidden'}`}>
                        <h1 className='ml-[-10px] overflow-auto'><LoadCanvasTemplateNoReload /></h1>
                      </div>
                      <div className={`form-control ${user && 'hidden'}`}>
                        <label className="label">
                          <span className="label-text">Type the Captcha</span>
                        </label>
                        <input onBlur={handleValidateCaptcha} type="text" placeholder="Type the Captcha" className="input input-bordered" required 
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required {...register('password')} defaultValue={user && ".........."} disabled={user}
                        />
                      </div>
                      {signInError && <p>{signInError}</p>}
                      <div className="form-control mt-6">
                        <button disabled={!isValid} className={`btn bg-[#d6bb8b] ${user && 'hidden'}`}>SignIn</button>
                        <button onClick={handleSignOut} className={`btn bg-[#d6bb8b] ${!user && 'hidden'}`}>SignOut</button>
                      </div>
                      <h5 className='text-[#D1A054] text-[16px] font-Inter font-medium text-center'>New here?<Link to={'/signUp'}>Create a New Account</Link></h5>
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