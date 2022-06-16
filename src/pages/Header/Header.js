import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo1.png'
const Header = () => {
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
      <li></li><Link to='/about' className='text-primary text-2xl font-bold	'>About</Link><li></li>
      <li></li><Link to='/login' className='text-primary text-2xl font-bold	'>Login</Link><li></li>
      
      
    </ul>
  </div>
  <div class="navbar-end  hidden lg:flex ">
  <div class="form-control bg-primary">
      <input type="text" placeholder="Search" class="input input-bordered" />
    </div>
    <button class="btn btn-ghost btn-circle">
      <div class="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span class="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
  </div>
</div>
    );
};

export default Header;