import React from "react";
import Container from './../components/Container';
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import bank from '../assets/bank.png';
import { useDispatch, useSelector } from "react-redux";

const CheckoutPage = () => {

  // Add-drop product
  let data = useSelector((state)=>state.product.cartItem);
  // console.log(data);
  let dispatch = useDispatch();


  return (
    <section>
      <Container>
        <div className="pt-[20px]">
          <h3 className="font-dm text-[39px] font-bold ">Checkout</h3>
          <div className="flex text-[12px] font-normal font-dm text-[#767676] items-center mt-2 ">
            <Link to="/" className="hover:text-black hover:underline">Home</Link>
            <p> <FaAngleRight /></p>
            <Link to="/signup" className="hover:text-black hover:underline">Checkout</Link>
          </div>
        </div>   
        <div>
          <h3 className="font-dm font-bold text-[28px] text-black py-[30px] ">Billing Details</h3>
        </div>
        <div className="flex justify-between">
          <div className="w-[40%] ">
            <div className="flex justify-between">
              <div className="w-[20%] ">
                <div className="">
                  <h3 className="font-dm font-bold text-[18px] pt-[50px] pb-2  ">First Name*</h3>
                  <input type="text" placeholder="First Name"
                  className="border-b-2 "             
                  />
                </div>
                <div className="">
                  <h3 className="font-dm font-bold text-[18px] pt-[50px] pb-2  ">Companye Name (optional)</h3>
                  <input type="text" placeholder="Company Name"
                  className="border-b-2 "             
                  />
                </div>
              </div>
              <div className="w-[50%] ">
                  <div className="">
                      <h3 className="font-dm font-bold text-[18px] pt-[50px] pb-2  ">Last Name*</h3>
                      <input type="text" placeholder="Last Name"
                      className="border-b-2 "             
                      />
                  </div>
                  <div className="">
                    <h3 className="font-dm font-bold text-[18px] pt-[50px] pb-2  ">Country *</h3>
                    <select name="cate" id="cate" className="w-[30%] border-black border-[1px] duration-300 ease-in-out ">
                        <option value="valOne" className="text-center ">Bangladesh</option>
                        <option value="valOne" className="text-center ">Bangladesh</option>
                        <option value="valOne" className="text-center ">Bangladesh</option>
                        <option value="valOne" className="text-center ">Bangladesh</option>
                        <option value="valOne" className="text-center ">Bangladesh</option>
                    </select>
                  </div>
              </div>
            </div>
            <div className="">
              <h3 className="font-dm font-bold text-[18px] pt-[50px] pb-2  ">Street Address *</h3>
              <input type="text" placeholder="First House number and street name"
              className="border-b-2 "             
              />
            </div>
            <div className="">
              <h3 className="font-dm font-bold text-[18px] pt-[50px] pb-2  ">Town/City *</h3>
              <input type="text" placeholder="Town/City"
              className="border-b-2 "             
              />
            </div>
            <div className="">
              <h3 className="font-dm font-bold text-[18px] pt-[50px] pb-2  ">County (optional)</h3>
              <input type="text" placeholder="County"
              className="border-b-2 "             
              />
            </div>
            <div className="">
              <h3 className="font-dm font-bold text-[18px] pt-[50px] pb-2  ">Post Code *</h3>
              <input type="text" placeholder="Post Code"
              className="border-b-2 "             
              />
            </div>
            <div className="">
              <h3 className="font-dm font-bold text-[18px] pt-[50px] pb-2  ">Phone *</h3>
              <input type="text" placeholder="Phone"
              className="border-b-2 "             
              />
            </div>
            <div className="">
              <h3 className="font-dm font-bold text-[18px] pt-[50px] pb-2  ">Email Address *</h3>
              <input type="text" placeholder="Email"
              className="border-b-2 "             
              />
            </div>
          </div>
          <div  className="w-[50%]">
            <div>
              <div className="justify-between mb-[80px] overflow-y-scroll h-[300px] ">
                {data.map((item , i) => (
                  <div className="flex justify-between items-center my-[20px] pb-[10px] border-b-black border-b-[1px] ">
                    <div className="w-[40%] flex justify-around items-center">
                      <div className="w-[40%]">
                        <img src={item.thumbnail} alt="" />
                      </div>
                      <div className="w-[50%]">
                        <h3 className="font-pop font-normal text-black text-[16px]">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <div className="w-[40%] text-center">
                      <h3 className="font-pop font-normal text-black text-[16px] text-center">
                        ${item.price}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
              <div className="font-pop font-medium text-[16px] text-black ">
                <div className="flex justify-between items-center my-[16px] border-b-black border-b-[1px] pb-[10px] ">
                  <h3>
                    Subtotal:
                  </h3>
                  <h3>
                    $1750
                  </h3>
                </div>
                <div className="flex justify-between items-center my-[16px] border-b-black border-b-[1px] pb-[10px] ">
                  <h3>
                    Shipping:
                  </h3>
                  <h3>
                    Free
                  </h3>
                </div>
                <div className="flex justify-between items-center my-[16px] border-b-black border-b-[1px] pb-[10px] ">
                  <h3>
                    Total:
                  </h3>
                  <h3>
                    $1750
                  </h3>
                </div>
                <div className="flex justify-between items-center ">             
                  <div class="flex items-center py-[32px] ">
                      <input id="link-radio" type="radio" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                      <label for="link-radio" class="ms-2 text-sm font-medium text-black text-[16px] ">
                        Bank 
                      </label>
                  </div>
                  <div>
                    <img src={bank} alt="" />
                  </div>
                </div>
              </div>
              <div class="flex items-center ">
                <input id="link-radio" type="radio" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label for="link-radio" class="ms-2 text-sm font-medium text-black text-[16px] ">
                  Cash on Delivery 
                </label>
              </div>
              <div className="flex justify-between items-center my-[32px] ">
                <form class="">
                  <div class="">
                    <input type="email" id="email" class="w-[180%] bg-white text-black border-black border-[1px] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Coupon Code" required />
                  </div>
                </form>
                <Link to="/checkout" className="font-pop font-normal text-white px-[48px] py-[16px] bg-[#DB4444] hover:bg-black ease-in-out duration-300  ">
                    Apply Coupon
                </Link>
              </div>
              <Link to="/checkout" className="font-pop font-normal text-white px-[48px] py-[16px] bg-[#DB4444] hover:bg-black ease-in-out duration-300  ">
                  Place Order
              </Link>
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-dm font-bold text-[28px] text-black pt-[60px] ">Additional Information</h3>
        </div>
        <div className=" ">
          <h3 className="font-dm font-bold text-[18px] pt-[50px] pb-2  ">Other Notes (optional)</h3>
          <input type="text" placeholder="Notes about your order, e.g. special notes for delivery."
          className="border-b-2 w-[40%] h-[100px] pl-[10px] "             
          />
        </div>
        <div className="py-[70px] ">
          <a href="#" className="font-dm lg:text-[14px] text-[12px] font-bold text-center text-[#262626]  py-[8px] lg:py-[15px] px-[47px]  cursor-pointer duration-300 ease-in-out hover:text-[white] hover:font-bold  hover:bg-[#2B2B2B] border-[1px] border-gray-300 mr-6 ">
            Proceed to Payment
          </a>
        </div>
      </Container>
    </section>
  )
};

export default CheckoutPage;
