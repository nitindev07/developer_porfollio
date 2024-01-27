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
    <section>
    <div id="work" className="mx-8 md:mx-16 py-6 mb-32 md:mb-48">
      <div>
        {/* text */}
        <div className="flex gap-1 items-center mb-14">
          <IoIosArrowRoundDown className="font-light" size={35}/>
          <h1 className="uppercase">Featured Work</h1>
        </div>
        {/* grid */}
        <div className="mx-auto max-w-[1200px] w-full">
          <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 gap-x-7 gap-y-7">
          
            
            <div className="relative h-full w-full card">
              <img className="img" src={img1} alt="" />
              <div className="p-4 back absolute top-0 left-0 bg-black/60 flex flex-col h-full text-center items-center w-full justify-center">
                <h1 className="text-2xl font-semibold mb-5">Catalyst Reachout</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi veniam, ducimus fugiat, itaque numquam dolorum atque adipisci doloribus impedit ea repellat? Expedita ratione voluptas odio esse eligendi laboriosam excepturi animi.</p>
              </div>
            </div>
            <div className="relative h-full w-full card">
              <img className="img" src={img2} alt="" />
              <div className="p-4 back absolute top-0 left-0 bg-black/60 flex flex-col h-full text-center items-center w-full justify-center">
                <h1 className="text-2xl font-semibold mb-5">Catalyst Reachout</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi veniam, ducimus fugiat, itaque numquam dolorum atque adipisci doloribus impedit ea repellat? Expedita ratione voluptas odio esse eligendi laboriosam excepturi animi.</p>
              </div>
            </div>
            <div className="relative h-full w-full card">
              <img className="img" src={img3} alt="" />
              <div className="p-4 back absolute top-0 left-0 bg-black/60 flex flex-col h-full text-center items-center w-full justify-center">
                <h1 className="text-2xl font-semibold mb-5">Catalyst Reachout</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi veniam, ducimus fugiat, itaque numquam dolorum atque adipisci doloribus impedit ea repellat? Expedita ratione voluptas odio esse eligendi laboriosam excepturi animi.</p>
              </div>
            </div>
            <div className="relative h-full w-full card">
              <img className=" img" src={img4} alt="" />
              <div className="p-4 back absolute top-0 left-0 bg-black/60 flex flex-col h-full text-center items-center w-full justify-center">
                <h1 className="text-2xl font-semibold mb-5">Catalyst Reachout</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi veniam, ducimus fugiat, itaque numquam dolorum atque adipisci doloribus impedit ea repellat? Expedita ratione voluptas odio esse eligendi laboriosam excepturi animi.</p>
              </div>
            </div>
            <div className="relative h-full w-full card">
              <img className=" img" src={img5} alt="" />
              <div className="p-4 back absolute top-0 left-0 bg-black/60 flex flex-col h-full text-center items-center w-full justify-center">
                <h1 className="text-2xl font-semibold mb-5">Catalyst Reachout</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi veniam, ducimus fugiat, itaque numquam dolorum atque adipisci doloribus impedit ea repellat? Expedita ratione voluptas odio esse eligendi laboriosam excepturi animi.</p>
              </div>
            </div>
            <div className="relative h-full w-full card">
              <img className=" img" src={img6} alt="" />
              <div className="p-4 back absolute top-0 left-0 bg-black/60 flex flex-col h-full text-center items-center w-full justify-center">
                <h1 className="text-2xl font-semibold mb-5">Catalyst Reachout</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi veniam, ducimus fugiat, itaque numquam dolorum atque adipisci doloribus impedit ea repellat? Expedita ratione voluptas odio esse eligendi laboriosam excepturi animi.</p>
              </div>
            </div>
            
       
            
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Work;
