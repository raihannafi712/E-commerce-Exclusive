import {React ,useContext  } from "react";
import Container from './Container';
import { Link } from 'react-router-dom';
import enhance from '../assets/enhance.png';
import shape from '../assets/shape.png';
import last1 from '../assets/last1.png';
import last2 from '../assets/last2.png';
import last3 from '../assets/last3.png';
import last4 from '../assets/last4.png';
import control from '../assets/controller.png';
import delivery from '../assets/delivery.png';
import headphone from '../assets/safe.png';
import safe from '../assets/safe.png';
import Slider from "react-slick";
import { FaRegHeart } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { RxStarFilled } from "react-icons/rx";
import { IoStarHalfOutline , IoStarOutline , IoGameController   } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { ApiData } from "./ContextApi";



// Slider start

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="text-black text-[20px] bg-[#F5F5F5] rounded-full p-[10px] absolute top-[-28%] left-[85%] cursor-pointer "
      onClick={onClick}
    > <FaArrowRight /> </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="text-black text-[20px] bg-[#F5F5F5] rounded-full p-[10px] absolute top-[-28%] right-[17%] cursor-pointer "
      onClick={onClick}
    ><FaArrowLeft /> </div>
  );
}

// Slider end

const Enhance = () => {

    let {data , data2} = useContext(ApiData);          /* API data */



    // Slider
  var settings = {          /* copy-pasted the setting variable from react slick's site */
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:true,
    dots: false,
    infinite:true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  var settings2 = {          
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:false,
    dots: false,
    infinite:true,
    autoplay: true,
    autoplaySpeed: 1500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <section>
        <Container>
            <div className="flex justify-center py-[90px] ">
                <Link to="">
                    <img src={enhance} alt="" />
                </Link>
            </div>
            <div>
                <div className="flex gap-4 items-center">
                <img src={shape} alt="shape" />
                <span className="font-pop font font-semibold text-red-600 text-[16px] ">Categories</span>
                </div>
                <div>
                <h3 className="font-pop font font-semibold text-black text-[36px] py-[40px] ">Browse By Category</h3>
                </div>
                <div >
                    <div className="">
                    <Slider {...settings}>
                        {data.map((item) =>(
                            <div className="!w-[95%] font-pop">
                                <div className="bg-[#F5F5F5] px-[35px] py-[40px] rounded-lg relative group cursor-pointer ">
                                <Link to="/shop">
                                    <div className="flex justify-center py-[30px] ">
                                    <img src={item.thumbnail} alt="" />
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
                                <Link to={`${item.id}`}>
                                    <a href="" className="font-bold text-[16px] hover:underline "> 
                                    {item.title}
                                    </a>
                                </Link>
                                </div>
                                <div>
                                <h3 className="font-normal text-[16px] text-red-500 items-center ">
                                ${item.price}
                                <span className="line-through pl-[12px] text-black ">$160</span>
                                </h3>
                                </div>
                                <div className="flex gap-x-2 py-[10px] items-center">
                                {Array.from({ length: 5 }, (_, index) => {
                                    let number = index + 0.5;
                                    return (
                                    <span key={index}>
                                        {item.rating >= index + 1 ? (
                                        <RxStarFilled />
                                        ) : item.rating >= number ? (
                                        <IoStarHalfOutline />
                                        ) : (
                                        <IoStarOutline />
                                        )}
                                    </span>
                                    );
                                })}
                                    <h3>({item.reviews.length})</h3>
                                </div>
                            </div>
                        )) }
                    </Slider>
                    <Slider {...settings2} className="py-[60px]" >
                        {data2.map((item) =>(
                            <div className="!w-[95%] font-pop">
                                <div className="bg-[#F5F5F5] px-[35px] py-[40px] rounded-lg relative group cursor-pointer ">
                                <Link to="/shop">
                                    <div className="flex justify-center py-[30px] ">
                                    <img src={item.thumbnail} alt="" />
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
                                <Link to={`${item.id}`}>
                                    <a href="" className="font-bold text-[16px] hover:underline "> 
                                    {item.title}
                                    </a>
                                </Link>
                                </div>
                                <div>
                                <h3 className="font-normal text-[16px] text-red-500 items-center ">
                                ${item.price}
                                <span className="line-through pl-[12px] text-black ">$160</span>
                                </h3>
                                </div>
                                <div className="flex gap-x-2 py-[10px] items-center">
                                {Array.from({ length: 5 }, (_, index) => {
                                    let number = index + 0.5;
                                    return (
                                    <span key={index}>
                                        {item.rating >= index + 1 ? (
                                        <RxStarFilled />
                                        ) : item.rating >= number ? (
                                        <IoStarHalfOutline />
                                        ) : (
                                        <IoStarOutline />
                                        )}
                                    </span>
                                    );
                                })}
                                    <h3>({item.reviews.length})</h3>
                                </div>
                            </div>
                        )) }
                    </Slider>
                    </div>
                    <div className="py-[60px] text-center border-b-[1px] border-solid ">
                        <Link to="/shop" className="font-pop font-normal text-white px-[48px] py-[16px] bg-[#DB4444] hover:bg-black ease-in-out duration-300  ">
                            View All Products
                        </Link>
                    </div> 
                </div>
            </div>
            <div className="py-[100px] ">
                <div className="flex gap-4 items-center">
                    <img src={shape} alt="shape" />
                    <span className="font-pop font font-semibold text-red-600 text-[16px] ">
                        Featured                    
                    </span>
                </div>
                <div>
                    <h3 className="font-pop font font-semibold text-black text-[36px] py-[40px] ">
                        New Arrival                    
                    </h3>
                </div>  
                <div className="pt-[60px] pb-[140px] flex justify-between ">
                    <div className="w-[50%] ">
                        <img src={last1} alt="" className="h-[778px] cursor-pointer" />
                    </div>        
                    <div className="w-[50%] ">
                        <div>
                            <img src={last2} alt="" className="w-[768px] cursor-pointer" />
                        </div>
                        <div className="flex justify-between pt-[32px]">
                            <img src={last3} alt="" className="w-[45%] cursor-pointer" />
                            <img src={last4} alt="" className="w-[45%] cursor-pointer" />
                        </div>
                    </div>
                </div>      
                <div className="pb-[140px] flex justify-around ">
                    <div>
                        <div className="flex justify-center">
                            <img src={delivery} alt=""  />
                        </div>
                        <h3 className="font-pop font font-semibold text-[20px] pt-[24px] pb-[8px] ">
                            FREE AND FAST DELIVERY
                        </h3>
                        <p className="font-pop font font-normal text-[14px]">
                            Free delivery for all orders over $140
                        </p>
                    </div>  
                    <div>
                        <div className="flex justify-center">
                            <img src={headphone} alt="" />
                        </div>
                        <h3 className="font-pop font font-semibold text-[20px] pt-[24px] pb-[8px] ">
                            FREE AND FAST DELIVERY
                        </h3>
                        <p className="font-pop font font-normal text-[14px]">
                            Free delivery for all orders over $140
                        </p>
                    </div> 
                    <div>
                        <div className="flex justify-center">
                            <img src={safe} alt="" />
                        </div>
                        <h3 className="font-pop font font-semibold text-[20px] pt-[24px] pb-[8px] ">
                            FREE AND FAST DELIVERY
                        </h3>
                        <p className="font-pop font font-normal text-[14px]">
                            Free delivery for all orders over $140
                        </p>
                    </div>                     
                </div>     
            </div>
        </Container>
    </section>
  )
};

export default Enhance;
