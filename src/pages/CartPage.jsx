import React from "react";
import Container from './../components/Container';
import { Link } from "react-router-dom";
import c1 from '../assets/c1.png';
import c2 from '../assets/c2.png';
import 'flowbite';

const CartPage = () => {
  return (
    <section>
      <Container>
        <div className="pt-[20px] pb-[40px]  flex  items-center ">
          <Link to="/" className="flex  items-center">
            <h3 className="font-pop font-normal text-gray-500 text-[14px] cursor-pointer hover:underline ">
              Home
            </h3>
            <span className="px-[12px] ">/</span>
          </Link>
          <Link>
            <h3 className="font-pop font-normal text-black text-[14px] cursor-pointer hover:underline ">
              Cart
            </h3>
          </Link>
        </div>
        <div>
          <div className="flex justify-between items-center pb-[80px] ">
            <div className="w-[15%] mx-auto">
              <h3 className="font-pop font-normal text-black text-[16px]">
                Product
              </h3>
            </div>
            <div className="w-[15%] mx-auto ">
              <h3 className="font-pop font-normal text-black text-[16px]">
                Price
              </h3>
            </div>
            <div className="w-[15%] mx-auto ">
              <h3 className="font-pop font-normal text-black text-[16px]">
                Quantity
              </h3>
            </div>
            <div className="w-[15%] mx-auto ">
              <h3 className="font-pop font-normal text-black text-[16px]">
                Subtotal
              </h3>
            </div>
          </div>
          <div className="flex justify-between items-center pb-[70px]">
            <div className="w-[21%] flex justify-around items-center">
              <img src={c1} alt="" />
              <h3 className="font-pop font-normal text-black text-[16px]">
                LCD Monitor
              </h3>
            </div>
            <div className="w-[21%] text-center">
              <h3 className="font-pop font-normal text-black text-[16px] text-center">
                $650
              </h3>
            </div>
            <div className="w-[21%] mx-auto ">          
              <form class="ml-[87px] ">
                <div class="relative flex items-center max-w-[11rem]">
                  <button type="button" id="decrement-button" data-input-counter-decrement="bedrooms-input" className="bg-white text-black border-black border-[1px] rounded-s-lg p-3 h-11 focus:ring-gray-100  focus:ring-2 focus:outline-none">
                    <svg class="w-3 h-3  dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                    </svg>
                  </button>
                  <input type="text" id="bedrooms-input" data-input-counter data-input-counter-min="1" data-input-counter-max="5" aria-describedby="helper-text-explanation" class="bg-white text-black border-black border-[1px]  h-11 font-medium text-center text-sm focus:ring-blue-500 focus:border-blue-500 block w-full dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" value="0"/>
                  <button type="button" id="increment-button" data-input-counter-increment="bedrooms-input" class="bg-white text-black border-black border-[1px] rounded-e-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                    <svg class="w-3 h-3 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                    </svg>
                  </button>
                </div>
              </form>
            </div>
            <div className="w-[21%] mx-auto ">
              <h3 className="font-pop font-normal text-black text-[16px] text-center">
                Subtotal
              </h3>
            </div>
          </div>
        </div>
        <div className="flex justify-between pt-[80px] pb-[140px]">
          <div className="w-[30%] flex justify-between items-center ">
            <form class="">
              <div class="">
                <input type="email" id="email" class="bg-white text-black border-black border-[1px] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Coupon Code" required />
              </div>
            </form>
            <Link to="/" className="font-pop font-normal text-white px-[48px] py-[16px] bg-[#DB4444] hover:bg-black ease-in-out duration-300  ">
                Apply Coupon
            </Link>
          </div>
          <div className="w-[50%] ">
            <div className="border-black border-[2px] ">
              <div className="py-[32px] px-[24px] ">
                <h3 className="font-pop font-medium text-black text-[20px] pb-6 ">
                  Cart Total
                </h3>
                <ul>
                  <li className="flex justify-between font-pop font-normal text-black text-[16px] pb-[10px] mb-4 border-b-gray-500 border-b-[1px]  ">
                    <h3>
                      Subtotal:
                    </h3>
                    <h4>
                      $1750
                    </h4>
                  </li>
                  <li className="flex justify-between font-pop font-normal text-black text-[16px] pb-[10px] mb-4 border-b-gray-500 border-b-[1px]  ">
                    <h3>
                      Shipping:
                    </h3>
                    <h4>
                      Free
                    </h4>
                  </li>
                  <li className="flex justify-between font-pop font-normal text-black text-[16px] pb-[10px] mb-4  ">
                    <h3>
                      Total:
                    </h3>
                    <h4>
                      $1750
                    </h4>
                  </li>
                </ul>
                <div className="text-center">
                  <Link to="/" className="font-pop font-normal text-white px-[48px] py-[16px] bg-[#DB4444] hover:bg-black ease-in-out duration-300  ">
                    Procees to checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
};

export default CartPage;
