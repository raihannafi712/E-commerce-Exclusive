import React from "react";
import Container from "./Container";
import { HiOutlinePaperAirplane } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { LiaFacebookF } from "react-icons/lia";
import { FaLinkedinIn, FaInstagram  } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaRegCopyright } from "react-icons/fa6";
import qr from '../assets/qr.png'
import gp from '../assets/gp.png'
import ap from '../assets/ap.png'


const Footer = () => {
  return (
    <section className="bg-black">
      <Container>
        <div className="flex justify-between items-center py-[80px] ">
          <div className="w-[15%]">
            <div className="">
              <div  className="mb-[24px] ">
                <a href="#" className="font-pop font-bold text-[32px] text-white cursor-pointer ">
                  Exclusive
                </a>
              </div>
              <h3 className="font-pop font-normal text-[20px] text-white cursor-pointer ">
                Subscribe
              </h3>
              <h3 className="font-pop font-normal text-[16px] text-white my-[24px] ">
                Get 10% off your first order
              </h3>
              <div>
                <div className="relative">
                  <input type="email" id="search-navbar" 
                    className="block w-full my-[24px] p-2  text-[16px] text-gray-100 border border-white rounded-lg bg-black focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Enter your Email"/>
                  <div className="absolute top-[50%] translate-y-[-50%] right-[4%] text-white text-[20px]">
                    <HiOutlinePaperAirplane className="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[15%] ">
            <h3 className="font-pop font-bold text-[20px] text-white cursor-pointer mb-[24px] ">
              Support
            </h3>
            <h3 className="font-pop font-normal text-[16px] text-white cursor-pointer">
              111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.
            </h3>
            <h3 className="font-pop font-normal text-[16px] text-white my-[24px] ">
              exclusive@gmail.com
            </h3>
            <h3 className="font-pop font-normal text-[16px] text-white cursor-pointer my-[24px] ">
              +88015-88888-9999
            </h3>
          </div>
          <div className="w-[15%] ">
            <h3 className="font-pop font-bold text-[20px] text-white cursor-pointer mb-[24px] ">
              Account
            </h3>
            <div className="">
              <ul class="w-full dark:border-gray-700">
                  <li className="">
                    <a 
                      className="text-white font-pop font-normaltext-[16px]">
                      <Link to="/">
                        My Account
                      </Link>
                    </a>
                  </li>
                  <li className="my-[16px] ">
                    <a 
                      className="text-white font-pop font-normal text-[16px]">
                      <Link to="/">
                        Login / Register
                      </Link>
                    </a>
                  </li>
                  <li className="my-[16px] ">
                    <a 
                      className="text-white font-pop font-normal text-[16px]">
                      <Link to="/">
                        Cart
                      </Link>
                    </a>
                  </li>
                  <li className="my-[16px] ">
                    <a 
                      className="text-white font-pop font-normal text-[16px]">
                      <Link to="/">
                        Wishlist
                      </Link>
                    </a>
                  </li>
                  <li className="my-[16px] ">
                    <a 
                      className="text-white font-pop font-normal text-[16px]">
                      <Link to="/">
                        Shop
                      </Link>
                    </a>
                  </li>
                </ul>
            </div>
          </div>
          <div className="w-[15%] ">
            <h3 className="font-pop font-bold text-[20px] text-white cursor-pointer mb-[24px]">
              Quick Link
            </h3>
            <div className="">
              <ul class="w-full dark:border-gray-700">
                  <li className="">
                    <a 
                      className="text-white font-pop font-normaltext-[16px]">
                      <Link to="/">
                        Privacy Policy
                      </Link>
                    </a>
                  </li>
                  <li className="my-[16px] ">
                    <a 
                      className="text-white font-pop font-normal text-[16px]">
                      <Link to="/">
                        Terms of Use
                      </Link>
                    </a>
                  </li>
                  <li className="my-[16px] ">
                    <a 
                      className="text-white font-pop font-normal text-[16px]">
                      <Link to="/">
                        FAQ
                      </Link>
                    </a>
                  </li>
                  <li className="my-[16px] ">
                    <a 
                      className="text-white font-pop font-normal text-[16px]">
                      <Link to="/">
                        Contact
                      </Link>
                    </a>
                  </li>
                </ul>
            </div>
          </div>
          <div className="w-[15%] ">
            <h3 className="font-pop font-bold text-[20px] text-white cursor-pointer mb-[24px] ">
              Download App
            </h3>
            <h3 className="font-pop font-normal text-[12px] text-white ">
              Save $3 with App New User Only
            </h3>
            <div className="flex justify my-[24px] gap-x-[8px] items-center ">
              <div>
                <img src={qr} alt="" />
              </div>
              <div className="items-center">
                <img src={gp} className="mb-[10px] cursor-pointer" alt="" />
                <img src={ap} className="cursor-pointer" alt="" />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <div className="flex text-white text-[20px] ">
                  <a className="mx-[13px] " href="https://www.facebook.com/">
                      <LiaFacebookF />
                  </a>
                  <a className="mx-[13px] " href="https://www.x.com/">
                    <RiTwitterXLine />
                  </a>
                  <a className="mx-[13px] " href="https://www.instagram.com/">
                      <FaInstagram />
                  </a>
                  <a className="mx-[13px] " href="https://www.linkedin.com/">
                      <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex justify-center text-gray-200 text-[16px] gap-4  items-center ">
            <FaRegCopyright />
            Copyright Rimel 2022. All right reserved
          </div>
        </div>
      </Container>
    </section>
  )
};

export default Footer;
