import React from "react";
import pin from './pin.png';
import email from './email.png';
const Contactme = () => {
  return (
    <div className="border w-[350px] h-[40rem] mt-[400px] flex justify-center items-center flex-col space-y-20 ">
      <div className="border border-red-700 w-full h-14 flex space-x-6   items-center bg-red-800 rounded-3xl">
        <h1></h1>
        <img src={pin} alt="pin"  className="h-7 w-7"/>
        <p className="text-sm">Palmpur</p>
        <button className="text-sm">Copy</button>
      </div>
      <div className="border border-red-700 w-full h-14 flex space-x-6   items-center bg-red-800 rounded-3xl">
        <h1></h1>
        <i class="Phone is-animating "></i>
        <p className="text-sm">7807717169</p>
        <button className="text-sm">Copy</button>
      </div>
      <div className="border border-red-700 w-full h-14 flex space-x-6   items-center bg-red-800 rounded-3xl">
        <h1></h1>
        <img src={email} alt="email" className="h-7 w-7"/>
        <p className="text-sm">chandel.sanjeev5@gmail.com</p>
        <button className="text-sm">Copy</button>
      </div>
    </div>
  );
};

export default Contactme;
