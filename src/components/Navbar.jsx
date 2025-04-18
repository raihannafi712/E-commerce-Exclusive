import React from "react";
import { Link } from 'react-router-dom';
import Container from './Container';
import { FaRegHeart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";


const Navbar = () => {
  return (
    <nav className="border-b-gray-300 border-b-[2px] border-solid">
      <Container>
        <div className="flex py-[30px] items-center ">
          <div className="w-[20%] ">
            <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
              <h2 className="font-pop font-bold text-[32px] cursor-pointer ">
                Exclusive
              </h2>
            </a>
          </div>
          <div className="w-[35%] mx-auto items-center">
            <ul class="w-full flex dark:border-gray-700">
              <li className="mx-6 py-1 ">
                <a 
                  className="text-[#767676] font-pop font-bold text-[16px] hover:text-black duration-300 ease-in-out hover:font-bold relative after:absolute after:right-0 after:bottom-[-5px] after:content-[''] after:w-0 after:duration-300 after:ease-in-out after:h-[3px] after:bg-black hover:after:w-full ">
                  <Link to="/">
                    Home
                  </Link>
                </a>
              </li>
              <li className="mx-6 py-1 ">
                <a 
                  className="text-[#767676] font-pop font-bold text-[16px] hover:text-black duration-300 ease-in-out hover:font-bold relative after:absolute after:right-0 after:bottom-[-5px] after:content-[''] after:w-0 after:duration-300 after:ease-in-out after:h-[3px] after:bg-black hover:after:w-full ">
                  <Link to="/contacts">
                    Contact
                  </Link>
                </a>
              </li>
              <li className="mx-6 py-1 ">
                <a 
                  className="text-[#767676] font-pop font-bold text-[16px] hover:text-black duration-300 ease-in-out hover:font-bold relative after:absolute after:right-0 after:bottom-[-5px] after:content-[''] after:w-0 after:duration-300 after:ease-in-out after:h-[3px] after:bg-black hover:after:w-full ">
                  <Link to="/about">
                    About
                  </Link>
                </a>
              </li>
              <li className="mx-6 py-1 ">
                <a 
                  className="text-[#767676] font-pop font-bold text-[16px] hover:text-black duration-300 ease-in-out hover:font-bold relative after:absolute after:right-0 after:bottom-[-5px] after:content-[''] after:w-0 after:duration-300 after:ease-in-out after:h-[3px] after:bg-black hover:after:w-full ">
                  <Link to="/signup">
                    Sign Up
                  </Link>
                </a>
              </li>
            </ul>
          </div>
          <div className="w-[15%]">
            <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
              <span class="sr-only">Search</span>
            </button>
            <div class="relative hidden md:block">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span class="sr-only">Search icon</span>
              </div>
              <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-[12px] text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="What are you looking for?"/>
            </div>
            <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
          </div>
          <div className="w-[30%] md:order-3 flex justify-end items-center gap-5 text-[26px] ">
            <div className="cursor-pointer">
              <Link to="/wishlist">
                <FaRegHeart />            
              </Link>
            </div>
            <div className="cursor-pointer">
              <Link to="/cart">
                <IoCartOutline />
              </Link>
            </div>
            <div className="cursor-pointer">
              <Link to="/accounts">
                <FaUserCircle />
              </Link>             
            </div>               
          </div>
        </div>
      </Container>
    </nav>


  )
};

export default Navbar;
