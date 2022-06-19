import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from './Loading';


const Register = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [
      createUserWithEmailAndPassword,
      user1,
      loading1,
      error1,
  ] = useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const navigate=useNavigate();
  let signInError;

  if (loading || loading1 || updating) {
      return <Loading />
  }
  if (user || user1) {
      console.log(user || user1)
  }
  if (error || error1 || updateError) {
      signInError = <p className='text-red-500'><small>{error?.message || error1?.message || updateError?.message}</small></p>
  }
  const onSubmit =  data => {
    createUserWithEmailAndPassword(data.email, data.password)
    updateProfile({ displayName: data.name});
      console.log(data)
      navigate('/')

  };



    return (
<section class="text-gray-600 body-font rounded-lg">
  <div class="container px-5 py-24 mx-auto flex flex-wrap items-center justify-center  bg-[url('https://wallpapercave.com/wp/wp9203145.png')]">
    <div class="lg:w-3/5 lg:pr-0 pr-0">
      <h1 class="title-font font-medium font-bold text-5xl text-white">Power Ranger Ltd. -YOUR MOST TRUSTED Costume COMPANY IN ONLINE ARA</h1>
      <p class="leading-relaxed mt-4 text-white">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
    </div>
    <div class="lg:w-2/6 xl:w-2/5 md:w-2/3 bg-gray-100 rounded-lg p-8 flex flex-col lg:ml-auto w-full mt-10 lg:mt-0">
      <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)} className='pl-4'>

<div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text text-1xl font-bold">Name</span>
    </label>
    <input
        type="text"
        placeholder="Your Name"
        className="input input-bordered w-full max-w-xs"
        {...register("name", {
            required: {
                value: true,
                message: 'Name is required'
            }
        })}
    />
    <label className="label">
        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
    </label>
</div>

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
            minLength:{
                value: 6,
            message: 'must be 6 characters or longer'}
        })}
    />
    <label className="label">
        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

    </label>
</div>
{signInError}
<button class="btn  w-full text-white bg-primary border-0 py-2 px-8 focus:outline-none hover:bg-primary rounded text-lg">Sign Up</button>
</form>
     
      <p class="text-xs text-sky-500 mt-3">Already have an account ?  <Link to='/login'>Sign in</Link></p>
    </div>
  </div>
</section>
    );
};

export default Register;