import React from "react";
import Footer from "./Footer";
import { MdOutlineMailOutline } from "react-icons/md";

const Contact = () => {
  return (
    <section>
      <div id="contact" className=" bg-green-100">
        <div className="bg-contact h-full bg-no-repeat bg-cover">
          <div className="mx-4 sm:mx-0 flex flex-col py-32 justify-center h-full text-center items-center">
            <h1 className="text-4xl font-semibold mb-5">Contact Me</h1>
            <p className="sm:text-2xl text-lg max-w-[610px] font-semibold w-full mb-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis
              vel suspendisse risus, tempor.
            </p>
            {/* btn */}
            <div className="flex gap-3 justify-center items-center btn">
              <MdOutlineMailOutline size={25}/>
              <p className="text-lg">xyz@gmail.com</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default Contact;
