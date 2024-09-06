import React from "react";
import { GiCrown } from "react-icons/gi";
import { Link } from "react-scroll";



export default function Header(){
  return (
    <header className="py-8 h-[80px] mb-10 w-full">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-2xl">
            <Link to="/" className="cursor-pointer text-pink-300">
              <GiCrown size={60} />
            </Link>
          </div>

          <div className="flex gap-x-8">
            <Link to="about" className=" cursor-pointer">
              About
            </Link>
            <Link to="work" className=" cursor-pointer">
              Projects
            </Link>
            <Link to="contact" className="contact cursor-pointer">
              Contacts
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};


