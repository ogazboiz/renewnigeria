import React from "react";
import solar from "../../Assets/Image/solar.png"; // Replace with actual solar image path
import background from "../../Assets/Image/abuja.png"; // Replace with actual background image path
import nigeria from "../../Assets/Image/renweew.png"; // Replace with actual Nigeria image path
import gold from "../../Assets/Image/gold.png"; // Replace with actual Nigeria image path
import goldOne from "../../Assets/Image/goldOne.png";
import legi from "../../Assets/Image/house of rep.png";
import staff from "../../Assets/Image/staff.png";
import year from "../../Assets/Image/2025.png";

const HeroOne = () => {
  return (
    <div className="w-full h-auto">
    <div
      className="relative w-full h-screen bg-center bg-no-repeat bg-cover font-sanss"
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center 20%",
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 opacity-80"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(77, 111, 65, 0.8) 80%, rgba(77, 95, 65, 1) 100%)",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center mx-auto">
        {/* Solar Image */}
        <img
          src={solar}
          alt="Solar Panel"
          className="absolute top-[1%] left-[-2%] w-[45vw] lg:w-[26.14vw] lg:h-[17.19vw] md:w-[35vw] md:left-[-1%]"
        />

        {/* Nigeria Image */}
        <img
          src={nigeria}
          alt="Renew Nigeria"
          className="absolute mt-[110%] md:mt-[35%] md:w-[70vw] md:left-[9%] lg:mt-[12%]   lg:top-[19%] 2xl:top-[19%] md:top-[170%] left-[10%] w-[79vw]  lg:w-[56vw] 2xl:left-[20%] lg:left-[19%] "
        />

        {/* Gold Image */}
        <img
          src={gold}
          alt="Gold Line"
          className="absolute hidden top-[33.2%] lg:top-[33%] left-[15.9%] w-[80%] lg:w-[59%]"
        />

        {/* GoldOne Image */}
        <img
          src={goldOne}
          alt="Flash"
          className="absolute hidden top-[30.1%] lg:top-[27.9%] left-[17.7%] lg:w-[5.10%]"
        />

        {/* Legislative Image */}
        <img
          src={legi}
          alt="Legislative Icon"
          className="absolute mt-[110%] right-[2%] w-[15vw] md:mt-[35%] md:w-[25vw] lg:mt-[11%] lg:w-[20vw] 2xl:top-[25%] md:top-[165%] lg:top-[14%]"
        />

        {/* Staff Image */}
        <img
          src={staff}
          alt="Staff"
          className="absolute mt-[110%] left-[-1%] w-[24vw] md:mt-[95%] md:w-[25vw] md:left-[-4%] lg:mt-[70%]  2xl:left-[-1%] 2xl:mt-[60%] sm:left-[1%] lg:left-[1%]"
        />

        {/* Main Text */}
       
  
          <p className="absolute top-[-90%] text-center p-2 text-[4vw] mt-[100%] lg:mt-[32%] 2xl:text-[2vw]   lg:ml-[17%]  font-bold leading-[1] md:text-[4vw] lg:text-[25px] lg:text-left 2xl:text-left md:top-[-190%] md:left-[2%] md:mt-[80%] 2xl:top-[-400%] lg:top-[-98%] lg:p-0 text-white ">
            FIRST NATIONAL LEGISLATIVE SUMMIT & EXPO ON <br /> RENEWABLE ENERGY
          </p>

          {/* Date and Location */}
          <p className=" absolute mt-[245%] text-[4vw]  text-white font-semibold md:text-[3vw] md:mt-[200%] lg:mt-[80%] lg:text-[2vw] lg:text-left lg:ml-[-32%] text-center">
            11th – 13th February, 2025
            <br />
            Eko Hotel, Lagos State, Nigeria
          </p>
      

          {/* Year Image */}
          <img
            src={year}
            alt="2025"
            className="absolute w-[40vw] md:mt-[140%] md:w-[35vw] lg:w-[30vw] lg:mt-[80%] lg:ml-[30%] mt-[170%]  2xl: 2xl:left-[25%] ]"
          />

          {/* Theme */}
        
          <p className="absolute  text-[4vw] lg:text-[2.5vw] md:text-[3vw] sm:text-[4.5vw] italic font-raleway mt-[280%] p-2 text-center md:mt-[220%] lg:mt-[93%] lg:ml-[7%]">
            <span className="font-semibold text-[#FFC707]">Theme:</span>{" "}
            <span className="font-bold text-white">RENEW NIGERIA&nbsp;</span>
            <span className="font-bold text-white ">Unlocking Nigeria's Energy Future</span>
          </p>
         
        </div>
      </div>
    </div>
   
  );
};

export default HeroOne;