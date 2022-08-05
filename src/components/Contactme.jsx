import React from "react";
import pin from "./location.png";
import email from "./email.png";
const Contactme = () => {
  return (
      <div className="w-fit h-fit  flex justify-center items-center flex-col space-y-20">
        <h1 className="name">Get in touch</h1>
        <div className=" backdrop-hue-rotate-180 w-[320px] h-14 flex space-x-6   items-center  rounded-3xl backdrop-blur-3xl shadow-xl shadow-black">
          <h1></h1>
          <h1></h1>
          <img src={pin} alt="pin" className="h-7 w-7 " />
          <p className="text-xs">Himanchal Pardesh,Palmpur</p>
        </div>
        <div className=" w-[320px] h-14 flex space-x-6   items-center backdrop-hue-rotate-180 backdrop-blur-3xl  rounded-3xl shadow-xl shadow-black">
          <h1></h1>
          <h1></h1>
          <a href="tel:7807717169" className="text-sm ">
            <button>
              {" "}
              <i class="Phone is-animating "></i>
            </button>
          </a>

          <p className="text-sm ">+91 7807717169</p>
        </div>
        <div className=" w-[320px] h-14 flex space-x-6   items-center backdrop-hue-rotate-180 backdrop-blur-3xl  rounded-3xl shadow-xl shadow-black">
          <h1></h1>
          <h1></h1>
          <a
            class="button"
            href="mailto:chandel.sanjeev5@gmail.com"
            className=""
          >
            <img src={email} alt="email" className="h-7 w-7 animate-bounce" />
          </a>
          <p className="text-sm">chandel.sanjeev5@gmail.com</p>
        </div>
      </div>
  );
};

export default Contactme;
