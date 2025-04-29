import React, { useContext } from "react";
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
import { ImCross } from "react-icons/im";
import { IoStarHalfOutline , IoStarOutline , IoGameController   } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { ApiData } from "../components/ContextApi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, productRemove2 } from "../components/slice/ProductSlice";


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

const WishPage = () => {

  let {data , data2} = useContext(ApiData);          /* API data */
  let wishData = useSelector((state)=>state.product.wishItem);    /* Add-drop product */
  // console.log(data);
  let dispatch = useDispatch();



  let handleCross = (i) => {
    dispatch(productRemove2(i));
  }

  // Slider
  var settings = {          /* copy-pasted the setting variable from react slick's site */
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:false,
    dots: true,
    infinite:true,
    // autoplay: true,
    // autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };


  // Client rating
  let clientRating = Array.from({length:5},(_ , index)=>{      /* _ is for blank spaces */
    let number = index + 0.5
    return data2.rating > index + 1 ? <RxStarFilled/> : data2.rating > number ? <IoStarHalfOutline /> : <IoStarOutline/>
  })

  // Add to cart
  let handleCart = () => {
    wishData.forEach((item) => {
      dispatch(addToCart({ ...item, quantity: 1 }));
    });
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
              Wishlist({wishData.length})
            </h3>
          </div>
          <div>
            <Link onClick={handleCart} className="font-pop font-normal text-white px-[48px] py-[16px] bg-[#DB4444] hover:bg-black ease-in-out duration-300">
                Move All To Bag
            </Link>
          </div>
        </div>
        <div className="mt-[40px] pb-[100px] relative">
          {wishData.length > 0
            ?
            <>
              <Slider {...settings}>
                {wishData.map((item) =>(
                  <div key={item.id} className="!w-[95%] mt-[20px] font-pop relative">
                    <div className="bg-[#F5F5F5] px-[35px] py-[40px] rounded-lg relative group cursor-pointer ">
                      <Link to={`/shop/${item.id}`}>
                        <div className="flex justify-center py-[30px] ">
                          <img src={item.thumbnail} alt="" />
                        </div>
                        <div className="absolute top-[5%] left-[5%] font-normal text-[12px] ">
                          <h3 className="px-[12px] py-[4px] rounded-[4px] bg-red-500 text-white ">
                            {item.discountPercentage}%                         
                          </h3>
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
                    <div onClick={()=> handleCross(item)} className="text-[14px] text-white bg-red-500 p-[5px]  rounded-full absolute top-[-6px] left-[-9px] z-[99] cursor-pointer ">
                      <ImCross />
                    </div>
                  </div>
                ))}
              </Slider>
            </>
            :
            <h3 className="items-center py-8 text-center text-[24px] font-bold font-pop text-black">
              No Products
            </h3>
          }
        </div>
        <div className="flex justify-between items-center pb-[68px] ">
          <div className="flex gap-4 items-center">
            <img src={shape} alt="shape" />
            <span className="font-pop font font-semibold text-red-600 text-[16px] ">
              Just For You          
            </span>
          </div>
          <div>
            <Link to="/shop" className="font-pop font-normal text-white px-[48px] py-[16px] bg-[#DB4444] hover:bg-black ease-in-out duration-300" >
              See All
            </Link>
          </div>
        </div>
        <div className="pb-[140px] ">
          <Slider {...settings}>
            {data.map((item) =>(
              <div className="!w-[95%] font-pop">
                <div className="bg-[#F5F5F5] px-[35px] py-[40px] rounded-lg relative group cursor-pointer ">
                  <Link to="/shop">
                    <div className="flex justify-center py-[30px] ">
                      <img src={item.thumbnail} alt="" />
                    </div>
                    <div className="absolute top-[5%] left-[5%] font-normal text-[12px] ">
                      <h3 className="px-[12px] py-[4px] rounded-[4px] bg-red-500 text-white ">
                        {item.discountPercentage}%                         
                      </h3>
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
      </Container>
    </section>
  )
};

export default WishPage;