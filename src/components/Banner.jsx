import React from "react";
import Container from "./Container";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './css/banner.css';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import apple from '../assets/apple.png';
import iphone from '../assets/ban1.png';
import ban2 from '../assets/watch.jpg';
import ban3 from '../assets/watch2.jpg';
import ban4 from '../assets/head1.webp';
import ban5 from '../assets/head2.jpg';
import { useState } from "react";
import { Link } from "react-router-dom";

const Banner = () => {

    let [categoryShow , setCategoryShow] = useState();
    let [categoryShow2 , setCategoryShow2] = useState();

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500
      };

  return (
      <section className="pb-[140px]">
        <Container>
            <div className="flex justify-between">
                <div className="w-[20%] ">
                    <ul className="border-r-gray-300 border-r-[1px] border-solid font-pop font-medium text-[16px] text-black pb-[0px]  ">
                        <li className='pt-[48px] py-[8px] hover:font-bold ease-in-out duration-200 '>
                            <p  onClick={() => setCategoryShow(!categoryShow) }
                                className="flex items-center cursor-pointer ">
                                Woman’s Fashion 
                                <span>
                                    {categoryShow == true ? <MdKeyboardArrowDown /> : <MdOutlineKeyboardArrowRight /> }
                                </span>
                            </p>
                            <div className={`overflow-hidden transition-all duration-700 ${categoryShow ? "max-h-[500px]" : "max-h-0"}`}>
                                { categoryShow && (
                                    <ul className="ml-[20px] ">
                                        <li className="py-[5px] font-pop font-normal text-[16px] cursor-pointer hover:font-bold ease-in-out duration-200">
                                            Clothes
                                        </li>
                                        <li className="py-[5px] font-pop font-normal text-[16px] cursor-pointer hover:font-bold ease-in-out duration-200">
                                            Accessories
                                        </li>
                                        <li className="py-[5px] font-pop font-normal text-[16px] cursor-pointer hover:font-bold ease-in-out duration-200">
                                            Jewelries
                                        </li>
                                        <li className="py-[5px] font-pop font-normal text-[16px] cursor-pointer hover:font-bold ease-in-out duration-200">
                                            Makeup
                                        </li>

                                    </ul>
                                ) }
                            </div>
                        </li>
                        <li className='py-[8px] hover:font-bold ease-in-out duration-200 '>
                            <p  onClick={() => setCategoryShow2(!categoryShow2) }
                                className="flex items-center cursor-pointer ">
                                Men’s Fashion 
                                <span>
                                    {categoryShow2 == true ? <MdKeyboardArrowDown /> : <MdOutlineKeyboardArrowRight /> }
                                </span>
                            </p>
                            <div className={`overflow-hidden transition-all duration-700 ${categoryShow2 ? "max-h-[500px]" : "max-h-0"}`}>
                                { categoryShow2 && (
                                    <ul className="ml-[20px] ">
                                        <li className="py-[5px] font-pop font-normal text-[16px] cursor-pointer hover:font-bold ease-in-out duration-200">
                                            Clothes
                                        </li>
                                        <li className="py-[5px] font-pop font-normal text-[16px] cursor-pointer hover:font-bold ease-in-out duration-200">
                                            Accessories
                                        </li>
                                        <li className="py-[5px] font-pop font-normal text-[16px] cursor-pointer hover:font-bold ease-in-out duration-200">
                                            Sports
                                        </li>
                                        <li className="py-[5px] font-pop font-normal text-[16px] cursor-pointer hover:font-bold ease-in-out duration-200">
                                            Sunglasses
                                        </li>

                                    </ul>
                                ) }
                            </div>
                        </li>
                        <li className="py-[12px] hover:font-bold ease-in-out duration-200 ">
                            <a href="#">Electronics</a>
                        </li>
                        <li className="py-[12px] hover:font-bold ease-in-out duration-200 ">
                            <a href="#">Home & Lifestyle</a>
                        </li>
                        <li className="py-[12px] hover:font-bold ease-in-out duration-200 ">
                            <a href="#">Medicine</a>
                        </li>
                        <li className="py-[12px] hover:font-bold ease-in-out duration-200 ">
                            <a href="#">Sports & Outdoor</a>
                        </li>
                        <li className="py-[12px] hover:font-bold ease-in-out duration-200 ">
                            <a href="#">Baby’s & Toys</a>
                        </li>
                        <li className="py-[12px] hover:font-bold ease-in-out duration-200 ">
                            <a href="#">Groceries & Pets</a>
                        </li>
                        <li className="py-[12px] hover:font-bold ease-in-out duration-200 ">
                            <a href="#">Health & Beauty</a>
                        </li>
                    </ul>
                </div>                    
                <div className="w-[70%] banner">
                    <Link to="/shop">
                        <Slider {...settings} >    
                        <div>
                            <div className="mt-[48px] bg-black flex justify-between cursor-pointer ">
                                <div className="w-[33%] ">
                                    <div className="py-[50px] pl-[64px] ">
                                        <div className="flex font-pop font-normal text-white text-[16px] items-center gap-6 ">
                                            <img src={apple} alt="apple" className="img-fluid" /> 
                                            <span>iPhone 14 Series</span>
                                        </div>
                                        <h3 className="font-pop font-semibold text-white text-[48px] items-center py-[22px] ">
                                            Up to 10% off Voucher
                                        </h3>
                                        <div className="">
                                            <a href="" className="flex items-center gap-[8px] font-pop font-normal text-white text-[16px]  duration-300 ease-in-out relative after:absolute after:left-0 after:bottom-[-5px] after:content-[''] after:w-0 after:duration-300 after:ease-in-out after:h-[3px] after:bg-white hover:after:w-[35%]  ">
                                                Shop Now
                                                <FaArrowRight />
                                            </a> 
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[55%] ">
                                    <div className="mt-[48px]">
                                        <img src={iphone} alt="iphone" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="mt-[48px] ">
                                <a href="">
                                    <img src={ban2} className="object-scale-down h-[380px] mx-auto " alt="iphone" />
                                </a>
                            </div>
                        </div>
                        <div>
                            <div className="mt-[48px] ">
                                <a href="">
                                    <img src={ban3} className="object-scale-down h-[380px] mx-auto " alt="iphone" />
                                </a>
                            </div>
                        </div>
                        <div>
                            <div className="mt-[48px] ">
                                <a href="">
                                    <img src={ban4} className="object-scale-down h-[380px] mx-auto " alt="iphone" />
                                </a>
                            </div>
                        </div>
                        <div>
                            <div className="mt-[48px] ">
                                <a href="">
                                    <img src={ban5} className="object-scale-down h-[380px] mx-auto " alt="iphone" />
                                </a>
                            </div>
                        </div>
                        </Slider>
                    </Link>
                </div>
            </div>
        </Container>
      </section>
  )
};

export default Banner;
