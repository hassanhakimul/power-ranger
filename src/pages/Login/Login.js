
import React from 'react';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin';


const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    let signInError;

    if (loading) {
        // return <Loading />
    }
    if (user) {
        navigate(from, { replace: true });
    }
    if (error) {
        signInError = <p className='text-red-500'><small>{error?.message}</small></p>
    }

    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)
    };




    return (

        <div class="py-6">
            <div class="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                <div class="hidden lg:block lg:w-1/2 bg-cover bg-[url('https://wallpapercave.com/dwp1x/wp5153518.jpg')]"  ></div>
                <div class="w-full p-8 lg:w-1/2">
                    <h2 class="text-2xl font-semibold text-gray-700 text-center">Power Warriors</h2>
                    <p class="text-xl text-gray-600 text-center">Welcome back!</p>
                    <SocialLogin />
                    <div class="mt-4 flex items-center justify-between">
                        <span class="border-b w-1/5 lg:w-1/4"></span>
                        <a href="#" class="text-xs text-center text-gray-500 uppercase">or login with email</a>
                        <span class="border-b w-1/5 lg:w-1/4"></span>
                    </div>
                    <form className='pl-4' onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-1xl font-bold">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'please input a valid email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-1xl font-bold">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                            </label>
                        </div>
                        {signInError}
                        <input
                            className="btn bg-primary w-full max-w-xs border-none text-white"
                            type="submit"
                            value=' Sign in' />
                    </form>
                    <div class="mt-4 flex items-center justify-between">
                        <span class="border-b w-1/5 md:w-1/4"></span>
                        <Link to='/register' class="text-xs text-sky-500 ">new to Rangers ? sign up</Link>
                        <span class="border-b w-1/5 md:w-1/4"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;






