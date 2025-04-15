import React from "react";
import Container from './../components/Container';
import { Link } from "react-router-dom";
import c1 from '../assets/c1.png';
import c2 from '../assets/c2.png';

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
          <div className="flex justify-between items-center pb-[70px] ">
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
              <form class="max-w-xs mx-auto">
                <label for="quantity-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose quantity:</label>
                <div class="relative flex items-center max-w-[8rem]">
                    <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input" class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                        <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                        </svg>
                    </button>
                    <input type="text" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="999" required />
                    <button type="button" id="increment-button" data-input-counter-increment="quantity-input" class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                        <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
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
              <h3 className="font-pop font-normal text-black text-[16px] text-center">
              <input
                type="number"
                min="1"
                max="99"
                value="1"
                className="w-16 px-2 py-1 border rounded-md text-center appearance-none no-spinner text-lg font-mono"
              />
              </h3>
            </div>
            <div className="w-[21%] mx-auto ">
              <h3 className="font-pop font-normal text-black text-[16px] text-center">
                Subtotal
              </h3>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
};

export default CartPage;
