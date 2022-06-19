import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo1.png'
const Header = () => {
  const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
      };
    return (
        <div class="navbar ">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li  className='text-primary'><a>Home</a></li>
        <li tabindex="0">
          <a class="justify-between">
          Favourite
          </a>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
  <a href=""> <img src={logo} alt="" /></a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
      <li></li><Link to='/' className='text-primary text-2xl font-bold	'>Home</Link><li></li>
      <li></li><Link to='/favourite' className='text-primary text-2xl font-bold	'>Favourite</Link><li></li>
      <li></li><Link to='/message' className='text-primary text-2xl font-bold	'>Contact Us</Link><li></li>
      <li>
        {
      user ? <button onClick={logout} className=" text-secondary text-2xl font-bold">SignOut</button> : <Link className=" text-primary text-2xl font-bold" to='/login'>Sign in</Link>
      }</li>
    </ul>
  </div>
  <div class="navbar-end  hidden lg:flex ">
  <div class="form-control bg-primary">
      <input type="text" placeholder="Search" class="input input-bordered" />
    </div>
    <button class="btn btn-ghost btn-circle">
      <div class="indicator">
      <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
        <span class="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
  </div>
</div>
    );
};

export default Header;