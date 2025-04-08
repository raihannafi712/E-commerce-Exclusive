import React from "react";
import Container from './../components/Container';
import { Link } from 'react-router-dom';
import phone from '../assets/phone.png';
import mail from '../assets/mail.png';


const ContactPage = () => {

  return (
    <section>
      <Container>
        <div className="py-[80px] flex  items-center ">
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
          <div className="w-[45%] ">
            <div>
              <div>
                <div className="flex items-center">
                  <img src={phone} alt="" />
                  <h3 className="font-pop font-medium text-black text-[16px] pl-[16px] " >Call To Us</h3>
                </div>
                <div className="font-pop font-normal text-black text-[14px]">
                  <p className="py-[20px] ">We are available 24/7, 7 days a week.</p>
                  <p>Phone: +8801611112222</p>
                </div>
              </div>
              <div></div>
            </div>
          </div>
          <div className="w-[45%] "></div>
        </div>
      </Container>
    </section>
  )
};

export default ContactPage;
