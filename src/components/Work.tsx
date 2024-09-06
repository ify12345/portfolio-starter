import React from "react";
import Img1 from "@/assets/foodapp.png";
import Img3 from "@/assets/Honeyapp.png";
import Img4 from "@/assets/net1.png";
import Img5 from "@/assets/Img5.png";
import {
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoCss3,
} from "react-icons/bi";
import Link from "next/link";

const Work = () => {
  return (
    <section className="section " id="work">
      <div className="container mx-auto min-h-[100vh] justify-center py-20">
        <div className="flex justify-center text-4xl font-bold mb-6">
          Projects.
        </div>
        <div className="grid grid-cols-2 gap-6">
          <Link
            href="/pro1"
            className="group relative overflow-hidden border-2
                  border-white/50 rounded-xl"
          >
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
            <img
              className="group-hover:scale-125 transition-all duration-500"
              src={Img1}
              alt="projects"
            ></img>
            <div className="absolute -bottom-full left-12 group-hover:bottom-16 transition-all duration-500 z-50 flex flex-col">
              <h1 className="text-white lg:text-3xl">Burger Domain</h1>
              {/* <h1 className='text-gradient '>Number 1 Junk food store</h1> */}

              <div className="flex  items-center  ">
                <BiLogoJavascript size={30} />
                <BiLogoTailwindCss size={50} />
              </div>
            </div>
          </Link>

          <Link
            href="pro2"
            className="group relative overflow-hidden border-2
                  border-white/50 rounded-xl"
          >
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
            <img
              className="group-hover:scale-125 transition-all duration-500"
              src={Img3}
              alt="projects"
            ></img>
            <div className="absolute -bottom-full left-12 group-hover:bottom-16 transition-all duration-500 z-50 flex flex-col">
              <h1 className="text-orange-400 lg:text-3xl">
                Product Landing Page
              </h1>
              <h1 className="text-gradient ">Hornets</h1>

              <div className="flex  items-center ">
                <BiLogoJavascript size={30} />
                <BiLogoCss3 size={30} />
              </div>
            </div>
          </Link>

          <Link
            href="pro3"
            className="group relative overflow-hidden border-2
                  border-white/50 rounded-xl"
          >
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
            <img
              className="group-hover:scale-125 transition-all duration-500"
              src={Img4}
              alt="projects"
            ></img>
            <div className="absolute -bottom-full left-12 group-hover:bottom-16 transition-all duration-500 z-50 flex flex-col">
              <h1 className="text-red-500 lg:text-3xl">Netflix UI</h1>
              {/* <h1 className='text-gradient '>Landing Page</h1> */}

              <div className="flex  items-center">
                <BiLogoJavascript size={30} />
                <BiLogoTailwindCss size={50} />
                <BiLogoReact size={50} />
              </div>
            </div>
          </Link>

          <Link
            href="pro4"
            className="group relative overflow-hidden border-2
                  border-white/50 rounded-xl"
          >
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
            <img
              className="group-hover:scale-125 transition-all duration-500"
              src={Img5}
              alt="projects"
            ></img>
            <div className="absolute -bottom-full left-12 group-hover:bottom-16 transition-all duration-500 z-50 flex flex-col">
              <h1 className="text-blue-200 lg:text-3xl">Ehizua Learn</h1>
              <div className="flex  items-center">
                <BiLogoJavascript size={30} />
                <BiLogoTailwindCss size={50} />
                <BiLogoReact size={50} />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Work;
