import React from "react";
import Container from './../components/Container';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { decrementProduct, incrementProduct, productRemove } from "../components/slice/ProductSlice";
import { ImCross } from "react-icons/im";
import { FaAngleRight , FaMinus , FaPlus   } from "react-icons/fa";
import 'flowbite';


const CartPage = () => {

  // Add-drop product
  let data = useSelector((state)=>state.product.cartItem);
  console.log(data);
  let dispatch = useDispatch();

  let handleIncrement = (index) => {        /* Increasing product quantity  */
    dispatch(incrementProduct(index));    
  };

  let handledecrement = (index) => {        /* decreasing product quantity  */
    dispatch(decrementProduct(index));    
  }
   
  let handleCross = (i) => {
    dispatch(productRemove(i));
  }

  
  // Total pricing
  let {totalPrice , totalQuantity} = data.reduce((acc , item)=>{
    acc.totalPrice += item.price * item.quantity
    acc.totalQuantity += item.quantity

    return acc
  },{totalPrice: 0 , totalQuantity:0})

  let vat = totalPrice * 15 / 100;


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
            <h3 className="font-pop font-normal text-gray-500 text-[14px] cursor-pointer hover:underline ">
              Shop
            </h3>
            <span className="px-[12px] ">/</span>
          </Link>
          <Link>
            <h3 className="font-pop font-normal text-black text-[14px] cursor-pointer hover:underline ">
              Cart
            </h3>
          </Link>
        </div>
        <div>

          <div className="flex justify-between items-center pb-[80px] ">
            <div className="w-[15%] mx-auto">
              <h3 className="font-pop font-normal text-black text-[16px]">
                Product
              </h3>
            </div>
            <div className="w-[15%] mx-auto ">
              <h3 className="font-pop font-normal text-black text-[16px]">
                Price
              </h3>
            </div>
            <div className="w-[15%] mx-auto ">
              <h3 className="font-pop font-normal text-black text-[16px]">
                Quantity
              </h3>
            </div>
            <div className="w-[15%] mx-auto ">
              <h3 className="font-pop font-normal text-black text-[16px]">
                Subtotal
              </h3>
            </div>
          </div>
          {data.length > 0
            ?
            <>
              {data.map((item , i) => (
                <div className="flex justify-between items-center pb-[70px]">
                  <div className="w-[21%] flex justify-around items-center">
                    <div onClick={()=> handleCross(item)} className="w-[10%] text-[18px] pl-5 cursor-pointer hover:text-red-500 ease-in-out duration-300 ">
                      <ImCross />
                    </div>
                    <div className="w-[40%]">
                      <img src={item.thumbnail} alt="" />
                    </div>
                    <div className="w-[50%]">
                      <h3 className="font-pop font-normal text-black text-[16px]">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <div className="w-[21%] text-center">
                    <h3 className="font-pop font-normal text-black text-[16px] text-center">
                      ${item.price}
                    </h3>
                  </div>
                  <div className="w-[21%] mx-auto ">          
                    <form class="ml-[50px] ">
                      <div class="flex justify-center items-center h-[50px] border-black border-[1px] ">
                        <h3 onClick={()=>handledecrement(i)} className=" cursor-pointer hover:text-black hover:font-bold ">
                          <FaMinus />
                        </h3>
                        <h3 className="mx-[60px] text-[20px] ">
                          {item.quantity}
                        </h3>
                        <h3 onClick={()=>handleIncrement(i)} className=" cursor-pointer hover:text-black hover:font-bold ">
                          <FaPlus />
                        </h3>
                      </div>
                    </form>
                  </div>
                  <div className="w-[21%] ">
                    <h3 className="ml-[30px]  font-pop font-normal text-black text-[16px]">
                      ${(item.price * item.quantity).toFixed(2)} 
                    </h3>
                  </div>
                </div>
              ))}
            </>
            :
            <h3 className="items-center py-8 text-center text-[24px] font-bold font-pop text-black">
              No Products
            </h3>
          }
        </div>
        <div className="flex justify-between pt-[80px] pb-[140px]">
          <div className="w-[30%] flex justify-between items-center ">
            <form class="">
              <div class="">
                <input type="email" id="email" class="bg-white text-black border-black border-[1px] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Coupon Code" required />
              </div>
            </form>
            <Link to="/" className="font-pop font-normal text-white px-[48px] py-[16px] bg-[#DB4444] hover:bg-black ease-in-out duration-300  ">
                Apply Coupon
            </Link>
          </div>
          <div className="w-[50%] ">
            <div className="border-black border-[2px] ">
              <div className="py-[32px] px-[24px] ">
                <h3 className="font-pop font-medium text-black text-[20px] pb-6 ">
                  Cart Total
                </h3>
                <ul>
                  <li className="flex justify-between font-pop font-normal text-black text-[16px] pb-[10px] mb-4 border-b-gray-500 border-b-[1px]  ">
                    <h3>
                      Subtotal:
                    </h3>
                    <h4>
                      ${totalPrice.toFixed(2)}
                    </h4>
                  </li>
                  <li className="flex justify-between font-pop font-normal text-black text-[16px] pb-[10px] mb-4 border-b-gray-500 border-b-[1px]  ">
                    <h3>
                      Vat:
                    </h3>
                    <h4>
                      $ {vat.toFixed(2)}
                    </h4>
                  </li>
                  <li className="flex justify-between font-pop font-normal text-black text-[16px] pb-[10px] mb-4 border-b-gray-500 border-b-[1px]  ">
                    <h3>
                      Shipping:
                    </h3>
                    <h4>
                      Free
                    </h4>
                  </li>
                  <li className="flex justify-between font-pop font-normal text-black text-[16px] pb-[10px] mb-4  ">
                    <h3>
                      Total:
                    </h3>
                    <h4>
                      ${(totalPrice + vat).toFixed(2) }
                    </h4>
                  </li>
                </ul>
                <div className="text-center">
                  <Link to="/checkout" className="font-pop font-normal text-white px-[48px] py-[16px] bg-[#DB4444] hover:bg-black ease-in-out duration-300  ">
                    Proceed to checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
};

export default CartPage;
