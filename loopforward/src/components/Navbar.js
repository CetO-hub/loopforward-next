import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../assets/img/LoopForward..svg";
import { RiMenu3Line, RiLinkedinLine } from "react-icons/ri";
import { AiOutlineClose, AiOutlineInstagram } from "react-icons/ai";
import { IconContext } from "react-icons";
import { animated, useSpring } from "react-spring";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [toggleNav, setToggleNav] = useState(false);

  const mobileBar = useSpring({
    transform: toggleNav ? `translate3d(0,0%,0)` : `translate3d(0,-100%,0)`,
  });

  useEffect(() => {
    const handleNavShadow = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleNavShadow);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-white z-[102]">
        <div
          className={
            scroll
              ? "flex w-full h-full justify-between items-center px-4 py-2 border-b-2 shadow-lg"
              : "flex w-full h-full justify-between items-center px-4 py-2"
          }
        >
          <div className="w-[40%] flex item-center">
            <Image src={logo} alt="logo" />
          </div>
          <IconContext.Provider value={{ size: "30px" }}>
            <RiMenu3Line
              onClick={() => setToggleNav(!toggleNav)}
              className={toggleNav ? "hidden" : "block md:hidden"}
            />
          </IconContext.Provider>
          <ul className=" gap-3 hidden md:flex md:text-xl lg:text-2xl lg:gap-8">
            <li className="relative">
              <h1 className=" px-1 py-1">Home</h1>
              <div className="w-full h-full top-0 left-0 absolute hover:border-b-pink-500 hover:border-b-2"></div>
            </li>
            <li className="relative">
              <h1 className=" px-1 py-1">About</h1>
              <div className="w-full h-full top-0 left-0 absolute hover:border-b-pink-500 hover:border-b-2"></div>
            </li>
            <li className="relative">
              <h1 className=" px-1 py-1">Services</h1>
              <div className="w-full h-full top-0 left-0 absolute hover:border-b-pink-500 hover:border-b-2"></div>
            </li>
            <li className="relative">
              <h1 className=" px-1 py-1">Testimonials</h1>
              <div className="w-full h-full top-0 left-0 absolute hover:border-b-pink-500 hover:border-b-2"></div>
            </li>
            <li className="relative">
              <h1 className=" px-1 py-1">Contact</h1>
              <div className="w-full h-full top-0 left-0 absolute hover:border-b-pink-500 hover:border-b-2"></div>
            </li>
          </ul>
        </div>
      </div>

      <animated.div
        className="fixed top-0 left-0 w-[45%] h-screen px-4 py-2 bg-white z-[104]"
        style={mobileBar}
      >
        <div className=" flex item-center">
          <Image src={logo} alt="logo" />
        </div>
        <ul className=" flex flex-col gap-y-4 md:hidden md:text-xl lg:text-3xl lg:gap-8 mt-8">
          <li className="relative max-w-min">
            <h1 className=" px-1 py-1">Home</h1>
            <div className="w-full h-full top-0 left-0 absolute hover:border-b-pink-500 hover:border-b-2"></div>
          </li>
          <li className="relative max-w-min">
            <h1 className=" px-1 py-1">About</h1>
            <div className="w-full h-full top-0 left-0 absolute hover:border-b-pink-500 hover:border-b-2"></div>
          </li>
          <li className="relative max-w-min">
            <h1 className=" px-1 py-1">Services</h1>
            <div className="w-full h-full top-0 left-0 absolute hover:border-b-pink-500 hover:border-b-2"></div>
          </li>
          <li className="relative max-w-min">
            <h1 className=" px-1 py-1">Testimonials</h1>
            <div className="w-full h-full top-0 left-0 absolute hover:border-b-pink-500 hover:border-b-2"></div>
          </li>
          <li className="relative max-w-min">
            <h1 className=" px-1 py-1">Contact</h1>
            <div className="w-full h-full top-0 left-0 absolute hover:border-b-pink-500 hover:border-b-2"></div>
          </li>
        </ul>
        <div className="mt-7">
          <ul className="flex gap-4">
            <li>
              <button className="py-3 px-3 bg-gradient-to-tr radient from-fuchsia-300 shadow-xl rounded-full">
                <RiLinkedinLine />
              </button>
            </li>
            <li>
              <button className="py-3 px-3 bg-gradient-to-tr radient from-fuchsia-300 shadow-xl rounded-full">
                <AiOutlineInstagram />
              </button>
            </li>
          </ul>
        </div>
      </animated.div>
      <animated.div
        style={mobileBar}
        className="bg-black/80 w-full h-screen z-[103] fixed top-0 left-0"
      >
        <AiOutlineClose
          size="40px"
          onClick={() => setToggleNav(!toggleNav)}
          className="color-red-500 z-[104] fixed top-5 right-5 py-2 px-2 bg-white rounded-full hover:scale-110"
        />
      </animated.div>
    </>
  );
};

export default Navbar;
