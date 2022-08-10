import Image from "next/image";
import React from "react";
import easy from "../assets/img/easy.svg";
import paper from "../assets/img/paper.png";
import TextAnimation from "./TextAnimation";

const HeroSection = () => {
  return (
    <>
      <div className="relative">
        <div className="w-full h-[calc(100vh-100px)]  md:h-[calc(100vh-150px)] flex justify-between md:justify-center gap-8 md:gap-40 items-center relative px-4 py-2 my-auto">
          <p className="max-w-prose w-[65%] md:w-[35%] text-3xl md:text-5xl md:leading-loose">
            <TextAnimation />{" "}
            <span className="">dir deine Welt, wie sie dir leicht</span>
            <span className="text-fuchsia-500">[</span>ge
            <span className="text-fuchsia-500">]</span>
            fällt.
          </p>
          <div className="w-[40%] md:w-[20%]">
            <Image src={easy} alt="hero-image" height={800} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
