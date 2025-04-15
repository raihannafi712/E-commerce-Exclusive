import React from "react";
import Container from './../components/Container';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import control from '../assets/controller.png';
import shape from '../assets/shape.png';
import { FaRegHeart } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { RxStarFilled } from "react-icons/rx";
import { IoStarHalfOutline , IoStarOutline , IoGameController   } from "react-icons/io5";

const WishPage = () => {

  // Slider
  var settings = {          /* copy-pasted the setting variable from react slick's site */
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:true,
    dots: true,
    infinite:true,
  };

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
              Wish List
            </h3>
          </Link>
        </div>
        <div className="flex justify-between pb-[60px] ">
          <div>
            <h3 className="font-pop font-normal text-black text-[20px]">
              Wishlist(4)
            </h3>
          </div>
          <div>
            <Link>
              <a href="" className="font-pop font-medium text-black text-[16px] px-[48px] py-[16px] border-[1px] border-black  ">
                Move All To Bag
              </a>
            </Link>
          </div>
        </div>
        <div className="pt-[40px] pb-[100px]  relative">
          <Slider {...settings}>
            <div className="!w-[95%] font-pop">
                <div className="bg-[#F5F5F5] px-[35px] py-[40px] rounded-lg relative group cursor-pointer ">
                  <Link to="/contacts">
                    <div className="flex justify-center py-[30px] ">
                      <img src={control} alt="" />
                    </div>
                    <div className="absolute top-[5%] left-[5%] font-normal text-[12px] ">
                      <h3 className="px-[12px] py-[4px] rounded-[4px] bg-red-500 text-white ">-40%</h3>
                    </div>
                    <div className="w-full h-[0px] opacity-0 group-hover:h-full duration-500 ease-in-out group-hover:opacity-100 ">
                      <div className="absolute top-[5%] right-[5%] ">
                        <div className="p-[10px] rounded-[50%] bg-white mb-[8px] cursor-pointer hover:bg-red-500 hover:text-white ease-in-out duration-300 ">
                          <FaRegHeart />
                        </div>
                        <div className="p-[10px] rounded-[50%] bg-white cursor-pointer hover:bg-red-500 hover:text-white ease-in-out duration-300 ">
                          <FaRegEye />
                        </div>
                      </div>
                      <div className="absolute w-full bottom-0 left-0 py-[8px] rounded-b-lg font-semibold text-[16px] text-white bg-black text-center hover:underline " >
                        <h3>Add To Cart</h3>
                      </div>
                    </div>
                  </Link>
              </div>
              <div className="my-[12px] ">
                <Link>
                  <a href="" className="font-bold text-[16px] hover:underline "> 
                    HAVIT HV-G92 Gamepad
                  </a>
                </Link>
              </div>
              <div>
                <h3 className="font-normal text-[16px] text-red-500 items-center ">
                $120
                <span className="line-through pl-[12px] text-black ">$160</span>
                </h3>
              </div>
              <div>
                {/* <span className="font-dm font-normal text-[14px] pl-6 ">
                  {" "}
                  {singleProduct?.reviews?.length} reviews
                </span> */}
              </div>
              <div className="flex gap-x-2 py-[10px] items-center">
                  <RxStarFilled/>
                  <RxStarFilled/>
                  <RxStarFilled/>
                  <IoStarHalfOutline />
                  <IoStarOutline/>
                  <h3>(33)</h3>
              </div>
            </div>
            <div className="!w-[95%] font-pop">
                <div className="bg-[#F5F5F5] px-[35px] py-[40px] rounded-lg relative group cursor-pointer ">
                  <Link to="/contacts">
                    <div className="flex justify-center py-[30px] ">
                      <img src={control} alt="" />
                    </div>
                    <div className="absolute top-[5%] left-[5%] font-normal text-[12px] ">
                      <h3 className="px-[12px] py-[4px] rounded-[4px] bg-red-500 text-white ">-40%</h3>
                    </div>
                    <div className="w-full h-[0px] opacity-0 group-hover:h-full duration-500 ease-in-out group-hover:opacity-100 ">
                      <div className="absolute top-[5%] right-[5%] ">
                        <div className="p-[10px] rounded-[50%] bg-white mb-[8px] cursor-pointer hover:bg-red-500 hover:text-white ease-in-out duration-300 ">
                          <FaRegHeart />
                        </div>
                        <div className="p-[10px] rounded-[50%] bg-white cursor-pointer hover:bg-red-500 hover:text-white ease-in-out duration-300 ">
                          <FaRegEye />
                        </div>
                      </div>
                      <div className="absolute w-full bottom-0 left-0 py-[8px] rounded-b-lg font-semibold text-[16px] text-white bg-black text-center hover:underline " >
                        <h3>Add To Cart</h3>
                      </div>
                    </div>
                  </Link>
              </div>
              <div className="my-[12px] ">
                <Link>
                  <a href="" className="font-bold text-[16px] hover:underline "> 
                    HAVIT HV-G92 Gamepad
                  </a>
                </Link>
              </div>
              <div>
                <h3 className="font-normal text-[16px] text-red-500 items-center ">
                $120
                <span className="line-through pl-[12px] text-black ">$160</span>
                </h3>
              </div>
              <div>
                {/* <span className="font-dm font-normal text-[14px] pl-6 ">
                  {" "}
                  {singleProduct?.reviews?.length} reviews
                </span> */}
              </div>
              <div className="flex gap-x-2 py-[10px] items-center">
                  <RxStarFilled/>
                  <RxStarFilled/>
                  <RxStarFilled/>
                  <IoStarHalfOutline />
                  <IoStarOutline/>
                  <h3>(33)</h3>
              </div>
            </div>
            <div className="!w-[95%] font-pop">
                <div className="bg-[#F5F5F5] px-[35px] py-[40px] rounded-lg relative group cursor-pointer ">
                  <Link to="/contacts">
                    <div className="flex justify-center py-[30px] ">
                      <img src={control} alt="" />
                    </div>
                    <div className="absolute top-[5%] left-[5%] font-normal text-[12px] ">
                      <h3 className="px-[12px] py-[4px] rounded-[4px] bg-red-500 text-white ">-40%</h3>
                    </div>
                    <div className="w-full h-[0px] opacity-0 group-hover:h-full duration-500 ease-in-out group-hover:opacity-100 ">
                      <div className="absolute top-[5%] right-[5%] ">
                        <div className="p-[10px] rounded-[50%] bg-white mb-[8px] cursor-pointer hover:bg-red-500 hover:text-white ease-in-out duration-300 ">
                          <FaRegHeart />
                        </div>
                        <div className="p-[10px] rounded-[50%] bg-white cursor-pointer hover:bg-red-500 hover:text-white ease-in-out duration-300 ">
                          <FaRegEye />
                        </div>
                      </div>
                      <div className="absolute w-full bottom-0 left-0 py-[8px] rounded-b-lg font-semibold text-[16px] text-white bg-black text-center hover:underline " >
                        <h3>Add To Cart</h3>
                      </div>
                    </div>
                  </Link>
              </div>
              <div className="my-[12px] ">
                <Link>
                  <a href="" className="font-bold text-[16px] hover:underline "> 
                    HAVIT HV-G92 Gamepad
                  </a>
                </Link>
              </div>
              <div>
                <h3 className="font-normal text-[16px] text-red-500 items-center ">
                $120
                <span className="line-through pl-[12px] text-black ">$160</span>
                </h3>
              </div>
              <div>
                {/* <span className="font-dm font-normal text-[14px] pl-6 ">
                  {" "}
                  {singleProduct?.reviews?.length} reviews
                </span> */}
              </div>
              <div className="flex gap-x-2 py-[10px] items-center">
                  <RxStarFilled/>
                  <RxStarFilled/>
                  <RxStarFilled/>
                  <IoStarHalfOutline />
                  <IoStarOutline/>
                  <h3>(33)</h3>
              </div>
            </div>
            <div className="!w-[95%] font-pop">
                <div className="bg-[#F5F5F5] px-[35px] py-[40px] rounded-lg relative group cursor-pointer ">
                  <Link to="/contacts">
                    <div className="flex justify-center py-[30px] ">
                      <img src={control} alt="" />
                    </div>
                    <div className="absolute top-[5%] left-[5%] font-normal text-[12px] ">
                      <h3 className="px-[12px] py-[4px] rounded-[4px] bg-red-500 text-white ">-40%</h3>
                    </div>
                    <div className="w-full h-[0px] opacity-0 group-hover:h-full duration-500 ease-in-out group-hover:opacity-100 ">
                      <div className="absolute top-[5%] right-[5%] ">
                        <div className="p-[10px] rounded-[50%] bg-white mb-[8px] cursor-pointer hover:bg-red-500 hover:text-white ease-in-out duration-300 ">
                          <FaRegHeart />
                        </div>
                        <div className="p-[10px] rounded-[50%] bg-white cursor-pointer hover:bg-red-500 hover:text-white ease-in-out duration-300 ">
                          <FaRegEye />
                        </div>
                      </div>
                      <div className="absolute w-full bottom-0 left-0 py-[8px] rounded-b-lg font-semibold text-[16px] text-white bg-black text-center hover:underline " >
                        <h3>Add To Cart</h3>
                      </div>
                    </div>
                  </Link>
              </div>
              <div className="my-[12px] ">
                <Link>
                  <a href="" className="font-bold text-[16px] hover:underline "> 
                    HAVIT HV-G92 Gamepad
                  </a>
                </Link>
              </div>
              <div>
                <h3 className="font-normal text-[16px] text-red-500 items-center ">
                $120
                <span className="line-through pl-[12px] text-black ">$160</span>
                </h3>
              </div>
              <div>
                {/* <span className="font-dm font-normal text-[14px] pl-6 ">
                  {" "}
                  {singleProduct?.reviews?.length} reviews
                </span> */}
              </div>
              <div className="flex gap-x-2 py-[10px] items-center">
                  <RxStarFilled/>
                  <RxStarFilled/>
                  <RxStarFilled/>
                  <IoStarHalfOutline />
                  <IoStarOutline/>
                  <h3>(33)</h3>
              </div>
            </div>
            <div className="!w-[95%] font-pop">
                <div className="bg-[#F5F5F5] px-[35px] py-[40px] rounded-lg relative group cursor-pointer ">
                  <Link to="/contacts">
                    <div className="flex justify-center py-[30px] ">
                      <img src={control} alt="" />
                    </div>
                    <div className="absolute top-[5%] left-[5%] font-normal text-[12px] ">
                      <h3 className="px-[12px] py-[4px] rounded-[4px] bg-red-500 text-white ">-40%</h3>
                    </div>
                    <div className="w-full h-[0px] opacity-0 group-hover:h-full duration-500 ease-in-out group-hover:opacity-100 ">
                      <div className="absolute top-[5%] right-[5%] ">
                        <div className="p-[10px] rounded-[50%] bg-white mb-[8px] cursor-pointer hover:bg-red-500 hover:text-white ease-in-out duration-300 ">
                          <FaRegHeart />
                        </div>
                        <div className="p-[10px] rounded-[50%] bg-white cursor-pointer hover:bg-red-500 hover:text-white ease-in-out duration-300 ">
                          <FaRegEye />
                        </div>
                      </div>
                      <div className="absolute w-full bottom-0 left-0 py-[8px] rounded-b-lg font-semibold text-[16px] text-white bg-black text-center hover:underline " >
                        <h3>Add To Cart</h3>
                      </div>
                    </div>
                  </Link>
              </div>
              <div className="my-[12px] ">
                <Link>
                  <a href="" className="font-bold text-[16px] hover:underline "> 
                    HAVIT HV-G92 Gamepad
                  </a>
                </Link>
              </div>
              <div>
                <h3 className="font-normal text-[16px] text-red-500 items-center ">
                $120
                <span className="line-through pl-[12px] text-black ">$160</span>
                </h3>
              </div>
              <div>
                {/* <span className="font-dm font-normal text-[14px] pl-6 ">
                  {" "}
                  {singleProduct?.reviews?.length} reviews
                </span> */}
              </div>
              <div className="flex gap-x-2 py-[10px] items-center">
                  <RxStarFilled/>
                  <RxStarFilled/>
                  <RxStarFilled/>
                  <IoStarHalfOutline />
                  <IoStarOutline/>
                  <h3>(33)</h3>
              </div>
            </div>
            <div className="!w-[95%] font-pop">
                <div className="bg-[#F5F5F5] px-[35px] py-[40px] rounded-lg relative group cursor-pointer ">
                  <Link to="/contacts">
                    <div className="flex justify-center py-[30px] ">
                      <img src={control} alt="" />
                    </div>
                    <div className="absolute top-[5%] left-[5%] font-normal text-[12px] ">
                      <h3 className="px-[12px] py-[4px] rounded-[4px] bg-red-500 text-white ">-40%</h3>
                    </div>
                    <div className="w-full h-[0px] opacity-0 group-hover:h-full duration-500 ease-in-out group-hover:opacity-100 ">
                      <div className="absolute top-[5%] right-[5%] ">
                        <div className="p-[10px] rounded-[50%] bg-white mb-[8px] cursor-pointer hover:bg-red-500 hover:text-white ease-in-out duration-300 ">
                          <FaRegHeart />
                        </div>
                        <div className="p-[10px] rounded-[50%] bg-white cursor-pointer hover:bg-red-500 hover:text-white ease-in-out duration-300 ">
                          <FaRegEye />
                        </div>
                      </div>
                      <div className="absolute w-full bottom-0 left-0 py-[8px] rounded-b-lg font-semibold text-[16px] text-white bg-black text-center hover:underline " >
                        <h3>Add To Cart</h3>
                      </div>
                    </div>
                  </Link>
              </div>
              <div className="my-[12px] ">
                <Link>
                  <a href="" className="font-bold text-[16px] hover:underline "> 
                    HAVIT HV-G92 Gamepad
                  </a>
                </Link>
              </div>
              <div>
                <h3 className="font-normal text-[16px] text-red-500 items-center ">
                $120
                <span className="line-through pl-[12px] text-black ">$160</span>
                </h3>
              </div>
              <div>
                {/* <span className="font-dm font-normal text-[14px] pl-6 ">
                  {" "}
                  {singleProduct?.reviews?.length} reviews
                </span> */}
              </div>
              <div className="flex gap-x-2 py-[10px] items-center">
                  <RxStarFilled/>
                  <RxStarFilled/>
                  <RxStarFilled/>
                  <IoStarHalfOutline />
                  <IoStarOutline/>
                  <h3>(33)</h3>
              </div>
            </div>
            <div className="!w-[95%] font-pop">
                <div className="bg-[#F5F5F5] px-[35px] py-[40px] rounded-lg relative group cursor-pointer ">
                  <Link to="/contacts">
                    <div className="flex justify-center py-[30px] ">
                      <img src={control} alt="" />
                    </div>
                    <div className="absolute top-[5%] left-[5%] font-normal text-[12px] ">
                      <h3 className="px-[12px] py-[4px] rounded-[4px] bg-red-500 text-white ">-40%</h3>
                    </div>
                    <div className="w-full h-[0px] opacity-0 group-hover:h-full duration-500 ease-in-out group-hover:opacity-100 ">
                      <div className="absolute top-[5%] right-[5%] ">
                        <div className="p-[10px] rounded-[50%] bg-white mb-[8px] cursor-pointer hover:bg-red-500 hover:text-white ease-in-out duration-300 ">
                          <FaRegHeart />
                        </div>
                        <div className="p-[10px] rounded-[50%] bg-white cursor-pointer hover:bg-red-500 hover:text-white ease-in-out duration-300 ">
                          <FaRegEye />
                        </div>
                      </div>
                      <div className="absolute w-full bottom-0 left-0 py-[8px] rounded-b-lg font-semibold text-[16px] text-white bg-black text-center hover:underline " >
                        <h3>Add To Cart</h3>
                      </div>
                    </div>
                  </Link>
              </div>
              <div className="my-[12px] ">
                <Link>
                  <a href="" className="font-bold text-[16px] hover:underline "> 
                    HAVIT HV-G92 Gamepad
                  </a>
                </Link>
              </div>
              <div>
                <h3 className="font-normal text-[16px] text-red-500 items-center ">
                $120
                <span className="line-through pl-[12px] text-black ">$160</span>
                </h3>
              </div>
              <div>
                {/* <span className="font-dm font-normal text-[14px] pl-6 ">
                  {" "}
                  {singleProduct?.reviews?.length} reviews
                </span> */}
              </div>
              <div className="flex gap-x-2 py-[10px] items-center">
                  <RxStarFilled/>
                  <RxStarFilled/>
                  <RxStarFilled/>
                  <IoStarHalfOutline />
                  <IoStarOutline/>
                  <h3>(33)</h3>
              </div>
            </div>
          </Slider>
        </div>
        <div className="flex justify-between items-center pb-[68px] ">
          <div className="flex gap-4 items-center">
            <img src={shape} alt="shape" />
            <span className="font-pop font font-semibold text-red-600 text-[16px] ">
              Just For You          
            </span>
          </div>
          <div>
            <Link>
              <a href="" className="font-pop font-medium text-black text-[16px] px-[48px] py-[16px] border-[1px] border-black  ">
                See All
              </a>
            </Link>
          </div>
        </div>
        <div className="flex justify-between pb-[140px] ">
          <div className="!w-[23%] font-pop">
                <div className="bg-[#F5F5F5] px-[35px] py-[40px] rounded-lg relative group cursor-pointer ">
                  <Link to="/contacts">
                    <div className="flex justify-center py-[30px] ">
                      <img src={control} alt="" />
                    </div>
                    <div className="absolute top-[5%] left-[5%] font-normal text-[12px] ">
                      <h3 className="px-[12px] py-[4px] rounded-[4px] bg-red-500 text-white ">-40%</h3>
                    </div>
                    <div className="w-full h-[0px] opacity-0 group-hover:h-full duration-500 ease-in-out group-hover:opacity-100 ">
                      <div className="absolute top-[5%] right-[5%] ">
                        <div className="p-[10px] rounded-[50%] bg-white mb-[8px] cursor-pointer hover:bg-red-500 hover:text-white ease-in-out duration-300 ">
                          <FaRegHeart />
                        </div>
                        <div className="p-[10px] rounded-[50%] bg-white cursor-pointer hover:bg-red-500 hover:text-white ease-in-out duration-300 ">
                          <FaRegEye />
                        </div>
                      </div>
                      <div className="absolute w-full bottom-0 left-0 py-[8px] rounded-b-lg font-semibold text-[16px] text-white bg-black text-center hover:underline " >
                        <h3>Add To Cart</h3>
                      </div>
                    </div>
                  </Link>
              </div>
              <div className="my-[12px] ">
                <Link>
                  <a href="" className="font-bold text-[16px] hover:underline "> 
                    HAVIT HV-G92 Gamepad
                  </a>
                </Link>
              </div>
              <div>
                <h3 className="font-normal text-[16px] text-red-500 items-center ">
                $120
                <span className="line-through pl-[12px] text-black ">$160</span>
                </h3>
              </div>
              <div>
                {/* <span className="font-dm font-normal text-[14px] pl-6 ">
                  {" "}
                  {singleProduct?.reviews?.length} reviews
                </span> */}
              </div>
              <div className="flex gap-x-2 py-[10px] items-center">
                  <RxStarFilled/>
                  <RxStarFilled/>
                  <RxStarFilled/>
                  <IoStarHalfOutline />
                  <IoStarOutline/>
                  <h3>(33)</h3>
              </div>
          </div>
          <div className="!w-[23%] font-pop">
              <div className="bg-[#F5F5F5] px-[35px] py-[40px] rounded-lg relative group cursor-pointer ">
                <Link to="/contacts">
                  <div className="flex justify-center py-[30px] ">
                    <img src={control} alt="" />
                  </div>
                  <div className="absolute top-[5%] left-[5%] font-normal text-[12px] ">
                    <h3 className="px-[12px] py-[4px] rounded-[4px] bg-red-500 text-white ">-40%</h3>
                  </div>
                  <div className="w-full h-[0px] opacity-0 group-hover:h-full duration-500 ease-in-out group-hover:opacity-100 ">
                    <div className="absolute top-[5%] right-[5%] ">
                      <div className="p-[10px] rounded-[50%] bg-white mb-[8px] cursor-pointer hover:bg-red-500 hover:text-white ease-in-out duration-300 ">
                        <FaRegHeart />
                      </div>
                      <div className="p-[10px] rounded-[50%] bg-white cursor-pointer hover:bg-red-500 hover:text-white ease-in-out duration-300 ">
                        <FaRegEye />
                      </div>
                    </div>
                    <div className="absolute w-full bottom-0 left-0 py-[8px] rounded-b-lg font-semibold text-[16px] text-white bg-black text-center hover:underline " >
                      <h3>Add To Cart</h3>
                    </div>
                  </div>
                </Link>
            </div>
            <div className="my-[12px] ">
              <Link>
                <a href="" className="font-bold text-[16px] hover:underline "> 
                  HAVIT HV-G92 Gamepad
                </a>
              </Link>
            </div>
            <div>
              <h3 className="font-normal text-[16px] text-red-500 items-center ">
              $120
              <span className="line-through pl-[12px] text-black ">$160</span>
              </h3>
            </div>
            <div>
              {/* <span className="font-dm font-normal text-[14px] pl-6 ">
                {" "}
                {singleProduct?.reviews?.length} reviews
              </span> */}
            </div>
            <div className="flex gap-x-2 py-[10px] items-center">
                <RxStarFilled/>
                <RxStarFilled/>
                <RxStarFilled/>
                <IoStarHalfOutline />
                <IoStarOutline/>
                <h3>(33)</h3>
            </div>
          </div>
          <div className="!w-[23%] font-pop">
              <div className="bg-[#F5F5F5] px-[35px] py-[40px] rounded-lg relative group cursor-pointer ">
                <Link to="/contacts">
                  <div className="flex justify-center py-[30px] ">
                    <img src={control} alt="" />
                  </div>
                  <div className="absolute top-[5%] left-[5%] font-normal text-[12px] ">
                    <h3 className="px-[12px] py-[4px] rounded-[4px] bg-red-500 text-white ">-40%</h3>
                  </div>
                  <div className="w-full h-[0px] opacity-0 group-hover:h-full duration-500 ease-in-out group-hover:opacity-100 ">
                    <div className="absolute top-[5%] right-[5%] ">
                      <div className="p-[10px] rounded-[50%] bg-white mb-[8px] cursor-pointer hover:bg-red-500 hover:text-white ease-in-out duration-300 ">
                        <FaRegHeart />
                      </div>
                      <div className="p-[10px] rounded-[50%] bg-white cursor-pointer hover:bg-red-500 hover:text-white ease-in-out duration-300 ">
                        <FaRegEye />
                      </div>
                    </div>
                    <div className="absolute w-full bottom-0 left-0 py-[8px] rounded-b-lg font-semibold text-[16px] text-white bg-black text-center hover:underline " >
                      <h3>Add To Cart</h3>
                    </div>
                  </div>
                </Link>
            </div>
            <div className="my-[12px] ">
              <Link>
                <a href="" className="font-bold text-[16px] hover:underline "> 
                  HAVIT HV-G92 Gamepad
                </a>
              </Link>
            </div>
            <div>
              <h3 className="font-normal text-[16px] text-red-500 items-center ">
              $120
              <span className="line-through pl-[12px] text-black ">$160</span>
              </h3>
            </div>
            <div>
              {/* <span className="font-dm font-normal text-[14px] pl-6 ">
                {" "}
                {singleProduct?.reviews?.length} reviews
              </span> */}
            </div>
            <div className="flex gap-x-2 py-[10px] items-center">
                <RxStarFilled/>
                <RxStarFilled/>
                <RxStarFilled/>
                <IoStarHalfOutline />
                <IoStarOutline/>
                <h3>(33)</h3>
            </div>
          </div>
          <div className="!w-[23%] font-pop">
              <div className="bg-[#F5F5F5] px-[35px] py-[40px] rounded-lg relative group cursor-pointer ">
                <Link to="/contacts">
                  <div className="flex justify-center py-[30px] ">
                    <img src={control} alt="" />
                  </div>
                  <div className="absolute top-[5%] left-[5%] font-normal text-[12px] ">
                    <h3 className="px-[12px] py-[4px] rounded-[4px] bg-red-500 text-white ">-40%</h3>
                  </div>
                  <div className="w-full h-[0px] opacity-0 group-hover:h-full duration-500 ease-in-out group-hover:opacity-100 ">
                    <div className="absolute top-[5%] right-[5%] ">
                      <div className="p-[10px] rounded-[50%] bg-white mb-[8px] cursor-pointer hover:bg-red-500 hover:text-white ease-in-out duration-300 ">
                        <FaRegHeart />
                      </div>
                      <div className="p-[10px] rounded-[50%] bg-white cursor-pointer hover:bg-red-500 hover:text-white ease-in-out duration-300 ">
                        <FaRegEye />
                      </div>
                    </div>
                    <div className="absolute w-full bottom-0 left-0 py-[8px] rounded-b-lg font-semibold text-[16px] text-white bg-black text-center hover:underline " >
                      <h3>Add To Cart</h3>
                    </div>
                  </div>
                </Link>
            </div>
            <div className="my-[12px] ">
              <Link>
                <a href="" className="font-bold text-[16px] hover:underline "> 
                  HAVIT HV-G92 Gamepad
                </a>
              </Link>
            </div>
            <div>
              <h3 className="font-normal text-[16px] text-red-500 items-center ">
              $120
              <span className="line-through pl-[12px] text-black ">$160</span>
              </h3>
            </div>
            <div>
              {/* <span className="font-dm font-normal text-[14px] pl-6 ">
                {" "}
                {singleProduct?.reviews?.length} reviews
              </span> */}
            </div>
            <div className="flex gap-x-2 py-[10px] items-center">
                <RxStarFilled/>
                <RxStarFilled/>
                <RxStarFilled/>
                <IoStarHalfOutline />
                <IoStarOutline/>
                <h3>(33)</h3>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
};

export default WishPage;
