import  { React, useContext } from "react";
import Container from './Container';
import Countdown from 'react-countdown';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import shape from '../assets/shape.png';
import control from '../assets/controller.png';
import { Link } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { RxStarFilled } from "react-icons/rx";
import { IoStarHalfOutline , IoStarOutline , IoGameController   } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsSmartwatch } from "react-icons/bs";
import { FaCamera , FaHeadphones  } from "react-icons/fa6";
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




const Flash = () => {

  let endDate = new Date();                /* Set date */
  endDate.setFullYear(endDate.getFullYear() + 2);
  let {data , data2} = useContext(ApiData);          /* API data */


  var renderer = ({ days, hours, minutes, seconds, completed }) => {      /* These values(props) are provided from the countdown component(installed) */
    if (completed) {
      return <span className="font-pop font font-bold text-black text-[32px]">The sale has ended</span>;
    } else {
      return (
        <div className="flex justify-center gap-x-[53px] font-pop font font-bold text-black text-[32px]" >
          <div className="w-[20%] flex items-center  " >
            <span >{days}</span> 
            <span className="text-red-500 text-[30px] pl-[28px] ">:</span>
          </div>
          <div className="w-[20%] flex items-center " >
            <span >{hours}</span> 
            <span className="text-red-500 text-[30px] pl-[28px] ">:</span>
          </div>
          <div className="w-[20%] flex items-center  " >
            <span >{minutes}</span> 
            <span className="text-red-500 text-[30px] pl-[28px] ">:</span>
          </div>
          <div className="w-[20%] flex items-center " >
            <span className="mr-[20px] " >{seconds}</span> 
          </div>
      </div>
      );
    }
  };

  // Slider
  var settings = {          /* copy-pasted the setting variable from react slick's site */
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:true,
    dots: false,
    infinite:true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  var settings2 = {          
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:false,
    dots: false,
    infinite:true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  // Client rating
  let clientRating = Array.from({length:5},(_ , index)=>{      /* _ is for blank spaces */
    let number = index + 0.5
    return data2.rating > index + 1 ? <RxStarFilled/> : data2.rating > number ? <IoStarHalfOutline /> : <IoStarOutline/>
  })


  return (
    <section>
        <Container>
          <div className="flex gap-4 items-center">
            <img src={shape} alt="shape" />
            <span className="font-pop font font-semibold text-red-600 text-[16px] ">Today's</span>
          </div>
          <div className="flex gap-x-[80px] items-center py-[25px] ">
            <h3 className="font-pop font font-semibold text-black text-[36px] ">Flash Sales</h3>
            <div className="">
              <div className="flex gap-x-[53px] text-center font-pop font font-semibold text-black text-[16px] ">
                <div className="w-[20%] " >
                  <p>Days</p>
                </div>
                <div className="w-[20%] " >
                  <p>Hours</p>
                </div>
                <div className="w-[20%] " >
                  <p>Minutes</p>
                </div>
                <div className="w-[20%] " >
                  <p>Seconds</p>
                </div>
              </div>
              <Countdown date={endDate} renderer={renderer} />
            </div>
          </div>
          <div className="py-[40px]  relative">
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
          </div>
          <div className="py-[60px] text-center border-b-[1px] border-solid ">
            <Link to="/shop">
              <a href="" className="font-pop font-normal text-white px-[48px] py-[16px] bg-[#DB4444] hover:bg-black ease-in-out duration-300  " >
                View All Products
              </a>
            </Link>
          </div>  
          <div className="py-[80px] border-b-[1px] border-solid mb-[70px] ">
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
                  <div className="!w-[80%] border-[2px] border-solid">
                    <div className="text-center px-[55px] py-[32px] ">
                      <div className="flex justify-center text-[40px] "><MdOutlinePhoneIphone /></div>
                      <h3 className="font-pop font-normal text-[16px] text-black pt-[22px] ">Phones</h3>
                    </div>
                  </div>
                  <div className="!w-[80%] border-[2px] border-solid">
                    <div className="text-center px-[55px] py-[32px] ">
                      <div className="flex justify-center text-[40px] "><HiOutlineDesktopComputer /></div>
                      <h3 className="font-pop font-normal text-[16px] text-black pt-[22px] ">Phones</h3>
                    </div>
                  </div>
                  <div className="!w-[80%] border-[2px] border-solid">
                    <div className="text-center px-[55px] py-[32px] ">
                      <div className="flex justify-center text-[40px] "><BsSmartwatch /></div>
                      <h3 className="font-pop font-normal text-[16px] text-black pt-[22px] ">Phones</h3>
                    </div>
                  </div>
                  <div className="!w-[80%] border-[2px] border-solid">
                    <div className="text-center px-[55px] py-[32px] ">
                      <div className="flex justify-center text-[40px] "><FaCamera /></div>
                      <h3 className="font-pop font-normal text-[16px] text-black pt-[22px] ">Phones</h3>
                    </div>
                  </div>
                  <div className="!w-[80%] border-[2px] border-solid">
                    <div className="text-center px-[55px] py-[32px] ">
                      <div className="flex justify-center text-[40px] "><FaHeadphones /></div>
                      <h3 className="font-pop font-normal text-[16px] text-black pt-[22px] ">Phones</h3>
                    </div>
                  </div>
                  <div className="!w-[80%] border-[2px] border-solid">
                    <div className="text-center px-[55px] py-[32px] ">
                      <div className="flex justify-center text-[40px] "><IoGameController /></div>
                      <h3 className="font-pop font-normal text-[16px] text-black pt-[22px] ">Phones</h3>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
          <div  className="">
            <div className="flex gap-4 items-center">
              <img src={shape} alt="shape" />
              <span className="font-pop font font-semibold text-red-600 text-[16px] ">This Month</span>
            </div>
            <div className="flex justify-between items-center ">
              <h3 className="font-pop font font-semibold text-black text-[36px] py-[40px] ">
                Best Selling Products              
              </h3>
              <Link to="/shop">
                <a href="" className="font-pop font-normal text-white px-[48px] py-[16px] bg-[#DB4444] hover:bg-black ease-in-out duration-300  " >
                  View All
                </a>
              </Link>
            </div>
            <div>
              <div className="py-[40px] relative">
                <Slider {...settings2}>
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
            </div>
          </div>
        </Container>
    </section>
  )
};
export default Flash;
