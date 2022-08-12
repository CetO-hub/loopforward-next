import Image from "next/image";
import React from "react";
import easy from "../assets/img/easy.svg";

const HeroSection = () => {
  return (
    <>
      <div className="">
        <div className="w-full flex flex-col justify-center     md:justify-center relative px-4 py-10 my-16 md:mt-36 font-bold">
          <p className="  text-3xl md:text-5xl leading-loose md:leading-loose flex flex-col items-center justify-center tracking-widest">
            <p className="typewriter1 lg:typewriter2 max-w-max text-4xl md:text-7xl ">
              KREIERE...
            </p>
            <div className="leading-normal flex flex-col items-center mt-14 mb-5">
              <p className="font-mono">dir deine Welt, </p>
              <p className="font-mono">wie sie dir </p>
            </div>
            <p>
              leicht<span className="text-fuchsia-500">[ge]</span>fällt
            </p>
          </p>
        </div>
        <div className="relative mx-auto flex flex=col items-center justify-center w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px]">
          <Image layout="fill" src={easy} alt="hero-image" />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
