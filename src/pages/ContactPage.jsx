import React from "react";
import Container from './../components/Container';
import { Link } from 'react-router-dom';
import phone from '../assets/phone.png';
import mail from '../assets/mail.png';


const ContactPage = () => {

  return (
    <section>
      <Container>
        <div className="pt-[20px] pb-[40px] flex  items-center ">
          <Link to="/" className="flex  items-center">
            <h3 className="font-pop font-normal text-gray-500 text-[14px] cursor-pointer hover:underline ">
              Home
            </h3>
            <span className="px-[12px] ">/</span>
          </Link>
          <Link>
            <h3 className="font-pop font-normal text-black text-[14px] cursor-pointer hover:underline ">Contact</h3>
          </Link>
        </div>
        <div className="flex justify-between">
          <div className="w-[40%] ">
            <div>
              <div className="pb-6 mb-[50px] border-black border-b-[1px] text-center ">
                <div className="flex items-center">
                  <img src={phone} alt="" />
                  <h3 className="font-pop font-medium text-black text-[16px] pl-[16px] " >Call To Us</h3>
                </div>
                <div className="font-pop font-normal text-black text-[14px]">
                  <p className="py-[20px] ">We are available 24/7, 7 days a week.</p>
                  <p>Phone: +8801611112222</p>
                </div>
              </div>
              <div className="pb-6 mb-[50px] text-center ">
                <div className="flex items-center">
                  <img src={mail} alt="mail" />
                  <h3 className="font-pop font-medium text-black text-[16px] pl-[16px] " >
                    Write To US
                  </h3>
                </div>
                <div className="font-pop font-normal text-black text-[14px]">
                  <p className="py-[20px] ">
                    Fill out our form and we will contact you within 24 hours.             
                  </p>
                  <p className="pb-[16px] ">Emails: customer@exclusive.com</p>
                  <p>Emails: support@exclusive.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[60%]">
            <div className="flex justify-center gap-x-[20px] ">
              <div>                
                <form class="max-w-sm mx-auto"> 
                  <input type="name" id="email" aria-describedby="helper-text-explanation" className="w-full border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 bg-[#F5F5F5]   dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Name *"/>
                </form>
              </div>
              <div>                
                <form class="max-w-sm mx-auto"> 
                  <input type="email" id="email" aria-describedby="helper-text-explanation" className="w-full border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 bg-[#F5F5F5]   dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Email *"/>
                </form>
              </div>
              <div>                
                <form class="max-w-sm mx-auto"> 
                  <input type="tel" id="tel" aria-describedby="helper-text-explanation" className="w-full border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 bg-[#F5F5F5]   dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Phone *"/>
                </form>
              </div>
            </div>
            <div className="py-[32px] ">             
              <form class="">
                <textarea id="message" rows="4" class="mx-auto w-[65%] !h-[207px] border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 bg-[#F5F5F5]   dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
              </form>
            </div>
            <div className="flex justify-center ">
              <Link>
                <a href="" className="font-pop font-normal text-white px-[48px] py-[16px] bg-[#DB4444] hover:bg-black ease-in-out duration-300  " >
                  Send Massage
                </a>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
};

export default ContactPage;
