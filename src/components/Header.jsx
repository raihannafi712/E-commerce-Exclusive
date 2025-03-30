import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="bg-black py-3 ">
      <Container>
        <div className="flex justify-between gap-3 items-center font-pop font-normal text-[14px] text-white ">
          <div className="flex mx-auto gap-4">
            <h3>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</h3>
            <div>
              <Link>
                <p className="cursor-pointer hover:underline font-bold ">
                  Show Now
                </p>
              </Link>
            </div>
          </div>
          <div className="">
            <select name="language" id="lan" className="bg-black ml-auto cursor-pointer">
              <option selected className="text-center">English</option>
              <option value="ValOne" className="text-center  ">French</option>
              <option value="ValOne" className="text-center">Spanish</option>
              <option value="ValOne" className="text-center">German</option>
            </select>
          </div>
        </div>
      </Container>
    </section>
  )
};

export default Header;
