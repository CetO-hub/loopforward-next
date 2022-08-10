import Image from "next/image";
import React, { useState } from "react";
import logo from "../assets/img/LoopForward..svg";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const handleNavShadow = () => {
    const isScrolled = window.scrollY();
    if (isScrolled > 100) {
      setScroll = true;
    } else {
      setScroll = false;
    }
  };

  return (
    <div
      onScroll={handleNavShadow}
      className={
        scroll
          ? "flex w-full h-full justify-between items-center px-4 py=4 border-b-2 shadow-lg"
          : "flex w-full h-full justify-between items-center px-4 py=4"
      }
    >
      <Image src={logo} />
      <ul className="flex gap-3">
        <li className="relative">
          <h1 className="text-2xl px-1 py-1">Home</h1>
          <div className="w-full h-full top-0 left-0 absolute hover:border-b-pink-500 hover:border-b-2"></div>
        </li>
        <li className="relative">
          <h1 className="text-2xl px-1 py-1">About</h1>
          <div className="w-full h-full top-0 left-0 absolute hover:border-b-pink-500 hover:border-b-2"></div>
        </li>
        <li className="relative">
          <h1 className="text-2xl px-1 py-1">Services</h1>
          <div className="w-full h-full top-0 left-0 absolute hover:border-b-pink-500 hover:border-b-2"></div>
        </li>
        <li className="relative">
          <h1 className="text-2xl px-1 py-1">Testimonials</h1>
          <div className="w-full h-full top-0 left-0 absolute hover:border-b-pink-500 hover:border-b-2"></div>
        </li>
        <li className="relative">
          <h1 className="text-2xl px-1 py-1">Contact</h1>
          <div className="w-full h-full top-0 left-0 absolute hover:border-b-pink-500 hover:border-b-2"></div>
        </li>
        <p></p>
      </ul>
    </div>
  );
};

export default Navbar;
