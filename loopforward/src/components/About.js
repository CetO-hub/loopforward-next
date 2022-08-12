import React from "react";
import Image from "next/image";
import { GiGrowth } from "react-icons/gi";
import { TbFocusCentered } from "react-icons/tb";
import { IconContext } from "react-icons";

const About = () => {
  return (
    <>
      <div className=" text-center px-4 py-4 my-32 w-full min-h-max bg-gradient-to-b from-fuchsia-500/50 md:mt-48">
        <div className="-mt-20 md:-mt-40 mx-auto overflow-hidden rounded-full w-[200px] h-[200px] md:w-[400px] md:h-[400px] relative shadow-lg">
          <Image
            className="rounded-full"
            layout="fill"
            objectFit="cover"
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
            alt="about image"
          />
        </div>
        <div className=" max-w-[800px] text-lg md:text-4xl flex flex-col items-center justify-center my-6">
          <h1 className="uppercase font-bold">Hello creator</h1>
          <p className="mt-5 px-5 tracking-wide leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra
            suspendisse potenti nullam ac tortor vitae purus. Sit amet volutpat
            consequat mauris nunc congue nisi vitae. Orci phasellus egestas
            tellus rutrum. Nisi est sit amet facilisis. Lobortis elementum nibh
            tellus molestie nunc non blandit massa. Gravida arcu ac tortor
            dignissim convallis aenean et tortor.
          </p>
        </div>
      </div>
      <div className="text-center mx-5 grid grid-cols grid-rows-2 -mt-28 gap-x-2 gap-y-5 ">
        <IconContext.Provider value={{ size: "30px" }}>
          <div className="flex flex-col items-center justify-center border-2 border-fuchsia-500 shadow-lg py-4 pb-10 px-10 bg-stone-100 rounded-full">
            <GiGrowth />
            <h1 className="font-bold">Growth</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Accumsan in nisl nisi scelerisque.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center border-2 border-fuchsia-500 shadow-lg py-4 pb-10 px-10 bg-stone-100 rounded-full">
            <TbFocusCentered />
            <h1 className="font-bold">Focus</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Accumsan in nisl nisi scelerisque.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center border-2 border-fuchsia-500 shadow-lg py-4 pb-10 px-10 bg-stone-100 rounded-full">
            <TbFocusCentered />
            <h1 className="font-bold">Focus</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Accumsan in nisl nisi scelerisque.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center border-2 border-fuchsia-500 shadow-lg py-4 pb-10 px-10 bg-stone-100 rounded-full">
            <TbFocusCentered />
            <h1 className="font-bold">Focus</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Accumsan in nisl nisi scelerisque.
            </p>
          </div>
        </IconContext.Provider>
      </div>
    </>
  );
};

export default About;
