import React from "react";
import Image from "next/image";
import services from "../assets/img/services.svg";

const Services = () => {
  return (
    <>
      <div className="relative w-[300px] h-[300px]">
        <Image src={services} layout="fill" objectFit="cover" />
      </div>
    </>
  );
};

export default Services;
