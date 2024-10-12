/* eslint-disable react/no-unescaped-entities */
'use client';

import { useState } from "react";
import Image from "next/image";
import patmos from "../images/patmoslogo.png";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
    const [ isOpen, setisOpen ] = useState(false)

    const handleMenu = () => {
        setisOpen(!isOpen)
    }

    return (
        <>
            <nav className="z-50 flex justify-between px-[50px] lg:px-[100px] items-center h-[60px] w-full bg-green-600">
                <div>
                    <Image className="w-[50px] h-[50px]" src={patmos} alt="Logo" />
                </div>
                <ul className="hidden lg:flex lg:text-[18px] text-white lg:gap-3">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Help</li>
                </ul>
                <div onClick={handleMenu}>
                    <button className="bg-blue-800 hover:bg-yellow-400 hidden lg:block lg:px-4 lg:py-2 text-white lg:rounded-full">Sign In</button>
                    {isOpen ? <IoMdClose className="lg:hidden text-3xl text-white font-bold" /> : <RiMenu3Fill  className="lg:hidden text-white text-3xl font-bold"/>}
                </div>
            </nav>
            <div className={`fixed z-50 h-screen top-14 left-0 w-[300px] bg-green-600 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <ul className="pt-5 pl-5 text-white">
                    <li className="py-2">Home</li>
                    <li className="py-2">About</li>
                    <li className="py-2">Contact</li>
                    <li className="py-2">Help</li>
                </ul>
                <div className="mt-5 pl-5">
                    <button className="bg-white hover:bg-green-300 px-6 py-2 text-black rounded-full">Sign In</button>
                </div>
            </div> 
        </>
    );
}
