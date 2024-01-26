import React from "react";
import { IoIosArrowRoundDown } from "react-icons/io";
import img1 from '../assets/unsplash_5sF6NrB1MEg.png'
import img2 from '../assets/unsplash_GkFQEOubrCo.png'
import img3 from '../assets/unsplash_OqtafYT5kTw.png'
import img4 from '../assets/unsplash_d2w-_1LJioQ.png'
import img5 from '../assets/unsplash_mP7aPSUm7aE.png'
import img6 from '../assets/unsplash_woC7_1c_kZQ.png'

const Work = () => {
  return (
    <div id="work" className="mx-16 py-6 mb-48">
      <div>
        {/* text */}
        <div className="flex gap-1 items-center mb-14">
          <IoIosArrowRoundDown className="font-light" size={35}/>
          <h1 className="uppercase">Featured Work</h1>
        </div>
        {/* grid */}
        <div className="mx-auto w-full">
          <div className="grid grid-cols-3 gap-x-7 gap-y-7">
            <img className="cursor-pointer hover:scale-95 duration-300 w-full" src={img1} alt="" />
            <img className="cursor-pointer hover:scale-95 duration-300 w-full" src={img2} alt="" />
            <img className="cursor-pointer hover:scale-95 duration-300 w-full" src={img3} alt="" />
            <img className="cursor-pointer hover:scale-95 duration-300 w-full" src={img4} alt="" />
            <img className="cursor-pointer hover:scale-95 duration-300 w-full" src={img5} alt="" />
            <img className="cursor-pointer hover:scale-95 duration-300 w-full" src={img6} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
