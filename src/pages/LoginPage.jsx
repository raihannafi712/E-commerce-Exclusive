import React from "react";
import sign from '../assets/signup.png';
import google from "../assets/google.png";
import { Link } from "react-router-dom";
import Container from "../components/Container";

const LoginPage = () => {
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
                        LogIn
                    </h3>
                </Link>
            </div>
            <div className="flex justify-between items-center pt-[60px] pb-[140px] ">
                <div className="w-[50%] ">
                    <img src={sign} alt="signup" />
                </div>
                <div className="w-[40%]">
                    <div>
                        <h3 className="font-pop font-medium text-black text-[36px] ">
                            Log in to Exclusive
                        </h3>
                        <p className="font-pop font-normal text-black text-[16px] ">
                            Enter your details below
                        </p>
                    </div>
                    <div>        
                        <form class="max-w-md py-[48px] ">
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Email or Phone Number
                                </label>
                            </div>
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="password" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Password
                                </label>
                            </div>
                            <div className="flex justify-around gap-x-[80px] pt-[40px] items-center ">
                                <button type="submit" class=" text-white bg-red-600 hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-[16px] w-full sm:w-auto px-[48px] py-[16px] text-center ease-in-out duration-300 ">
                                    Log In 
                                </button>
                                <button type="submit" class="flex gap-x-[16px] items-center my-[18px] text-black bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-[16px] w-full sm:w-auto text-center ease-in-out duration-300 ">
                                    Forget Password?
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Container>
  </section>
  )
};

export default LoginPage;
