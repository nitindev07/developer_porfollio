import React from "react";
import Footer from "./Footer";
import { MdOutlineMailOutline } from "react-icons/md";

const Contact = () => {
  return (
    <section className="">
      <div id="contact" className=" bg-green-100">
        <div className="bg-contact h-full bg-no-repeat bg-cover">
          <div className="flex flex-col py-32 justify-center h-full text-center items-center">
            <h1 className="text-[36px] font-semibold mb-5">Contact Me</h1>
            <p className="text-[24px] max-w-[610px] font-semibold w-full mb-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis
              vel suspendisse risus, tempor.
            </p>
            {/* btn */}
            <div className="flex gap-3 justify-center items-center btn">
              <MdOutlineMailOutline/>
              <p>xyz@gmail.com</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default Contact;
