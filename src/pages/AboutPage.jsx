import React from "react";
import Container from './../components/Container';
import { Link } from "react-router-dom";
import CountUp from 'react-countup';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../components/css/about.css'
import about from '../assets/about1.png';
import s1 from '../assets/s1.png';
import s2 from '../assets/s2.png';
import s3 from '../assets/s3.png';
import s4 from '../assets/s4.png';
import delivery from '../assets/delivery.png';
import headphone from '../assets/headphone.png';
import safe from '../assets/safe.png';
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import { FaLinkedinIn, FaInstagram  } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaRegCopyright } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

// Slider start

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="text-black text-[20px] bg-[#F5F5F5] rounded-full p-[20px] absolute top-[32%] left-[96%] cursor-pointer z-10 "
      onClick={onClick}
    > <FaArrowRight /> </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="text-black text-[20px] bg-[#F5F5F5] rounded-full p-[20px] absolute top-[32%] right-[96%] cursor-pointer z-10 "
      onClick={onClick}
    ><FaArrowLeft /> </div>
  );
}

const AboutPage = () => {

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 1500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
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
                About
              </h3>
            </Link>
        </div>
        <div className="flex justify-between items-center">
          <div className="w-[50%] ">
            <h3 className="font-pop font-semibold text-black text-[54px] pb-[40px]  ">
              Our Story
            </h3>
            <p className="font-pop font-normal text-black text-[16px] pb-[24px]">
              Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. 
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
            </p>
          </div>
          <div className="w-[40%] ">
            <img src={about} alt="" />
          </div>
        </div>
        <div className="py-[80px] flex justify-between ">
          <div className="w-[24%] border-black border-[1px]  ">
            <div className="mx-auto text-center py-[30px] ">
              <div className="flex justify-center">
                <img src={s1} alt="s1" />
              </div>
              <h3 className="font-pop font-bold text-black text-[32px] py-[18px]">
                <CountUp
                  end={10500}
                  duration={10}
                  decimals={1}
                  formattingFn={(value) => `${(value / 1000).toFixed(1)}k` }
                />
              </h3>
              <p className="font-pop font-normal text-black text-[16px]">
                Sellers active our site
              </p>
            </div>
          </div>
          <div className="w-[24%] border-black border-[1px]  bg-red-500   ">
            <div className="mx-auto text-center py-[30px] ">
              <div className="flex justify-center">
                <img src={s2} alt="s1" />
              </div>
              <h3 className="font-pop font-bold text-black text-[32px] py-[18px] ">
                <CountUp
                  end={33000}
                  duration={10}
                  decimals={1}
                  formattingFn={(value) => `${(value / 1000).toFixed(0)}k` }
                />
              </h3>
              <p className="font-pop font-normal text-black text-[16px] ">
                Monthly Product Sale
              </p>
            </div>
          </div>
          <div className="w-[24%] border-black border-[1px]  ">
            <div className="mx-auto text-center py-[30px] ">
              <div className="flex justify-center">
                <img src={s3} alt="s1" />
              </div>
              <h3 className="font-pop font-bold text-black text-[32px] py-[18px]">
                <CountUp
                  end={45500}
                  duration={15}
                  decimals={1}
                  formattingFn={(value) => `${(value / 1000).toFixed(1)}k` }
                />
              </h3>
              <p className="font-pop font-normal text-black text-[16px]">
                Customer active in our site
              </p>
            </div>
          </div>
          <div className="w-[24%] border-black border-[1px]  ">
            <div className="mx-auto text-center py-[30px] ">
              <div className="flex justify-center">
                <img src={s4} alt="s1" />
              </div>
              <h3 className="font-pop font-bold text-black text-[32px] py-[18px]">
                <CountUp
                  end={25000}
                  duration={10}
                  decimals={1}
                  formattingFn={(value) => `${(value / 1000).toFixed(0)}k` }
                />
              </h3>
              <p className="font-pop font-normal text-black text-[16px]">
                Annual gross sale in our site
              </p>
            </div>
          </div>
        </div>
        <div className="pb-[170px] about ">
          <Slider {...settings}>
            <div className="w-[30%] ">
              <div className="flex justify-center">
                <img src={p1} alt="" />
              </div>
              <div className="text-center">
                <h3 className="font-pop font-medium text-black text-[32px] pt-8 ">Tom Cruise</h3>
                <p className="font-pop font-normal text-black text-[16px] pt-2 pb-4 ">Founder & Chairman</p>
                <div className="flex justify-center gap-x-[16px] text-black text-[20px] ">
                  <a className=" " href="https://www.x.com/">
                    <RiTwitterXLine />
                  </a>
                  <a className="" href="https://www.instagram.com/">
                      <FaInstagram />
                  </a>
                  <a className="" href="https://www.linkedin.com/">
                      <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
            <div className="w-[30%] ">
              <div className="flex justify-center">
                <img src={p2} alt="" />
              </div>
              <div className="text-center">
                <h3 className="font-pop font-medium text-black text-[32px] pt-8 ">Emma Watson</h3>
                <p className="font-pop font-normal text-black text-[16px] pt-2 pb-4 ">Managing Director</p>
                <div className="flex justify-center gap-x-[16px] text-black text-[20px] ">
                  <a className=" " href="https://www.x.com/">
                    <RiTwitterXLine />
                  </a>
                  <a className="" href="https://www.instagram.com/">
                      <FaInstagram />
                  </a>
                  <a className="" href="https://www.linkedin.com/">
                      <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
            <div className="w-[30%] ">
              <div className="flex justify-center">
                <img src={p3} alt="" />
              </div>
              <div className="text-center">
                <h3 className="font-pop font-medium text-black text-[32px] pt-8 ">Will Smith</h3>
                <p className="font-pop font-normal text-black text-[16px] pt-2 pb-4 ">Product Designer</p>
                <div className="flex justify-center gap-x-[16px] text-black text-[20px] ">
                  <a className=" " href="https://www.x.com/">
                    <RiTwitterXLine />
                  </a>
                  <a className="" href="https://www.instagram.com/">
                      <FaInstagram />
                  </a>
                  <a className="" href="https://www.linkedin.com/">
                      <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
            <div className="w-[30%] ">
              <div className="flex justify-center">
                <img src={p1} alt="" />
              </div>
              <div className="text-center">
                <h3 className="font-pop font-medium text-black text-[32px] pt-8 ">Tom Cruise</h3>
                <p className="font-pop font-normal text-black text-[16px] pt-2 pb-4 ">Founder & Chairman</p>
                <div className="flex justify-center gap-x-[16px] text-black text-[20px] ">
                  <a className=" " href="https://www.x.com/">
                    <RiTwitterXLine />
                  </a>
                  <a className="" href="https://www.instagram.com/">
                      <FaInstagram />
                  </a>
                  <a className="" href="https://www.linkedin.com/">
                      <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
            <div className="w-[30%] ">
              <div className="flex justify-center">
                <img src={p2} alt="" />
              </div>
              <div className="text-center">
                <h3 className="font-pop font-medium text-black text-[32px] pt-8 ">Emma Watson</h3>
                <p className="font-pop font-normal text-black text-[16px] pt-2 pb-4 ">Managing Director</p>
                <div className="flex justify-center gap-x-[16px] text-black text-[20px] ">
                  <a className=" " href="https://www.x.com/">
                    <RiTwitterXLine />
                  </a>
                  <a className="" href="https://www.instagram.com/">
                      <FaInstagram />
                  </a>
                  <a className="" href="https://www.linkedin.com/">
                      <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
            <div className="w-[30%] ">
              <div className="flex justify-center">
                <img src={p3} alt="" />
              </div>
              <div className="text-center">
                <h3 className="font-pop font-medium text-black text-[32px] pt-8 ">Will Smith</h3>
                <p className="font-pop font-normal text-black text-[16px] pt-2 pb-4 ">Product Designer</p>
                <div className="flex justify-center gap-x-[16px] text-black text-[20px] ">
                  <a className=" " href="https://www.x.com/">
                    <RiTwitterXLine />
                  </a>
                  <a className="" href="https://www.instagram.com/">
                      <FaInstagram />
                  </a>
                  <a className="" href="https://www.linkedin.com/">
                      <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          </Slider>
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
      </Container>
    </section>
  )
};

export default AboutPage;
