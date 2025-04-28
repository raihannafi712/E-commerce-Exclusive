import React, { useEffect, useState } from "react";
import Container from './../components/Container';
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import shape from '../assets/shape.png';
import { FiHeart } from "react-icons/fi";
import { FaTruck } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { FaRegHeart } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { RxStarFilled } from "react-icons/rx";
import { IoStarHalfOutline , IoStarOutline , IoGameController   } from "react-icons/io5";
import { useContext } from "react";
import { ApiData } from "../components/ContextApi";
import Slider from "react-slick";
import axios from "axios";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import { addToCart } from "../components/slice/ProductSlice";




const DetailsPage = () => {

    let {data , data2 , data3} = useContext(ApiData);          /* API data */
    let [ singleProduct , setsingleProduct ] = useState([]);
    let productId = useParams();         /* API DATA */
    let navigate = useNavigate()         /* We're using usenavigate method instead of Link to use tostify */
    let dispatch = useDispatch();

    // Single product data
    let singleData = ()=>{
        axios.get(`https://dummyjson.com/products/${productId.id}`).then((response)=>{   /* It is from the same dummy API, so only use products then / */
          // console.log(response.data);
          setsingleProduct(response.data)
        });
    };

    useEffect(()=>{
        singleData();
    },[])


    // Client rating
    let clientRating = Array.from({length:5},(_ , index)=>{      /* _ is for blank spaces */
        let number = index + 0.5
        return singleProduct.rating > index + 1 ? <RxStarFilled/> : singleProduct.rating > number ? <IoStarHalfOutline /> : <IoStarOutline/>
    })


    // Slider
    var settings = {          /* copy-pasted the setting variable from react slick's site */
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:false,
        dots: true,
        infinite:true,
        autoplay: true,
        autoplaySpeed: 1500,
    };

    // Toastify
    let handleCart = (item)=>{
        dispatch(addToCart({ ...item , quantity: 1}));        /* quantity has been added to item details */
        toast('Added to Cart!')
        setTimeout(() => {
          navigate('/cart')
        }, [2500])
    }



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
                <Link to="/shop" className="flex  items-center">
                    <h3 className="font-pop font-normal text-black text-[14px] cursor-pointer hover:underline ">
                        Shop
                    </h3>
                    <span className="px-[12px] ">/</span>
                </Link>
                <Link>
                    <h3 className="font-pop font-normal text-black text-[14px] cursor-pointer hover:underline ">
                        {singleProduct.title}
                    </h3>
                </Link>
            </div>
            <div className="flex justify-between items-center pb-[140px] ">
                <div className="w-[20%]">
                    <div className="py-2 h-[500px] overflow-y-scroll ">
                        {singleProduct.images?.map((img, index) => (
                            <div key={index} className="border-b-gray-500 border-b-[2px] " >
                            <img src={img} alt={`Thumbnail ${index}`} />
                            </div>
                        ))}
                    </div>
                    {/* <div className="py-2">
                        <img src={d1} alt="" />
                    </div>
                    <div className="py-2">
                        <img src={d1} alt="" />
                    </div>
                    <div className="py-2">
                        <img src={d1} alt="" />
                    </div> */}
                </div>
                <div className="w-[30%]">
                    <div className="">
                        <img src={singleProduct.thumbnail} alt="" />
                    </div>
                </div>
                <div className="w-[40%] ">
                    <h2 className="font-pop font-semibold text-black text-[24px] ">
                        {singleProduct.title}
                    </h2>
                    <div className="py-[16px] flex gap-x-[5px] items-center font-pop font-medium  ">
                        {clientRating}
                        <h3 className="text-gray-500 ">
                            {" "}
                            ({singleProduct?.reviews?.length} reviews)
                        </h3>
                        <h3 className="text-gray-500 ">
                            |
                        </h3>
                        <h3 className="text-[#00FF66] uppercase ">
                            {singleProduct.availabilityStatus} ({singleProduct.stock})
                        </h3>
                    </div>
                    <h3 className="font-pop font-semibold text-black text-[24px] ">
                        ${singleProduct.price}
                    </h3>
                    <p className="font-pop font-normal text-black text-[14px] py-[24px] border-b-black border-b-[1px]  ">
                        {singleProduct.description}
                    </p>
                    <div className="flex gap-x-[24px] py-6 items-center font-pop font-medium text-black text-[16px] ">
                        <h3>
                            Weight:
                        </h3>
                        {singleProduct.weight} lb
                    </div>
                    <div className="flex gap-x-[10px] font-pop font-medium text-black text-[16px] uppercase ">
                        <h3>{singleProduct.warrantyInformation}</h3>
                        |
                        <h3>{singleProduct.shippingInformation}</h3>
                        |
                        <h3>{singleProduct.returnPolicy}</h3>
                    </div>
                    <div className="flex justify-between items-center py-6 ">
                        <form class="">
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
                        <h3 onClick={()=> handleCart(singleProduct)} className="cursor-pointer font-pop font-normal text-white text-[16px] px-[48px] py-[10px] rounded-lg bg-[#DB4444] hover:bg-black ease-in-out duration-300  ">
                            Add to cart
                        </h3>
                        <ToastContainer
                            position="top-right"
                            autoClose={2000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick={false}
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="dark"
                            transition={Bounce}
                        />
                        <FiHeart className="text-[20px] cursor-pointer "  />
                    </div>
                    <div>
                        <div className="border-black border-[1px] rounded-lg mt-[30px] font-pop font-medium text-black text-[16px] ">
                            <div className="flex py-[20px] pl-[16px] gap-x-[20px] items-center border-b-black border-b-[1px] ">
                                <FaTruck className="text-[30px]" />
                                <div>
                                    <h3>
                                        Free Delivery
                                    </h3>
                                    <p>
                                        Enter your postal code for Delivery Availability
                                    </p>
                                </div>
                            </div>
                            <div className="flex py-[20px] pl-[16px] gap-x-[20px] items-center ">
                                <GiReturnArrow className="text-[30px]" />
                                <div>
                                    <h3>
                                        Return Delivery
                                    </h3>
                                    <p>
                                        Free 30 Days Delivery Returns. Details
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-[140px] ">
                <div className="flex gap-4 items-center pb-[70px] ">
                    <img src={shape} alt="shape" />
                    <span className="font-pop font font-semibold text-red-600 text-[16px] ">
                        Related Item               
                    </span>
                </div>
                <div>
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
                        ))}
                    </Slider>
                </div>
            </div>
        </Container>
    </section>
  )
};

export default DetailsPage;
