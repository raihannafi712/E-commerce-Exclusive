import React from "react";
import Container from './../components/Container';
import sign from '../assets/signup.png';
import google from "../assets/google.png";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";


const SignupPage = () => {

  const auth = getAuth();
  let [email , setEmail] = useState("");
  let [password , setPassword] = useState("");
  let navigate = useNavigate();                   /* To navigate to login page */
  let [error , setError] = useState();


  let handleEmail = (e) => {
    setEmail(e.target.value);
  }

  let handlePassword = (e) =>{
    setPassword(e.target.value);
  }

  let handleSubmit = () => {
      if (email == "") {
          setError("Please enter your Email!");     

      } else if (password == "") {
          setError("Please set a new password!");
          
      }else {
          createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            navigate("/login")
          console.log("done" , userCredential);         /* to check */
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError("Email already exists!");
          });
      }
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
            <Link>
              <h3 className="font-pop font-normal text-black text-[14px] cursor-pointer hover:underline ">
                SignUp
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
                Create an account
              </h3>
              <p className="font-pop font-normal text-black text-[16px] ">
                Enter your details below
              </p>
            </div>
            <div>        
              <form class="max-w-md py-[48px] ">
                <div class="relative z-0 w-full mb-5 group">
                    <input type="name" name="floating_name" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label for="floating_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      Name
                    </label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                    <input onChange={handleEmail} type="email" id="email" placeholder="" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                    <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      Email
                    </label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                    <input type="password" onChange={handlePassword} id="password" placeholder="" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"/>
                    <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      Password
                    </label>
                </div>
                <div>
                  <h3 className="font-dm font-medium text-red-700 pb-[20px] ">
                    {error}
                  </h3>
                </div>
                <div className="mx-auto">
                  <h3 onClick={handleSubmit} className="cursor-pointer text-white bg-red-600 hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-[16px] w-full sm:w-auto px-[160px] py-[16px] text-center ease-in-out duration-300 ">
                    Create Account 
                  </h3>
                  <h3  class="flex gap-x-[16px] items-center my-[18px] border-black border-[1px] text-black bg-white hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-[16px] w-full sm:w-auto px-[119px] py-[16px] text-center ease-in-out duration-300 ">
                    <img src={google} alt="" />
                    Sign up with Google
                  </h3>
                </div>
                <div className="flex justify-center items-center pb-[20px] ">
                    <h3 className="font-dm lg:text-[16px] text-[14px] font-medium text-black">Already a member?</h3>
                    <Link to="/login">
                        <h3 className="ms-2 font-dm lg:text-[14px] text-[12px] font-medium text-black hover:underline hover:font-bold ">Log in</h3>
                    </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
};

export default SignupPage;
