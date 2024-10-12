'use client'

import Image from "next/image";
import patmos from "../images/blue-white-holiday-water-beach.jpg";
import Typewriter from "./typewriter";
import { CiSearch } from "react-icons/ci";
import { AiFillHome } from "react-icons/ai";

export default function Hero() {
    return (
        <div className="w-full relative">
            <Image className="w-full lg:h-screen h-[600px]" src={patmos} alt=""/>
            {/* Form for mobile */}
            <div className="w-[340px] sm:w-[370px] lg:hidden  xl:hidden top-20 text-white absolute text-2xl items-center justify-center xs:mx-5 sm:mx-5">
                <p className="text-black">Charming Patmos vacation Rental: <Typewriter text="Your wine" delay={100} /></p>
                <form className="bg-white md:w-[360px] h-[350px] mt-6 pl-4 flex flex-col">
                    <div className="bg-white relative">
                        <label className="text-black text-[16px]">Search for *</label>
                        <div className="absolute bg-customAsh w-[310px]  h-[50px] flex items-center">
                            <CiSearch className="ps-2 text-black text-[24px]" />
                            <input className="border-none w-[280px] sm:w-[310px] text-[14px] pl-3 bg-customAsh" type="text" placeholder="Search your keywords" />
                        </div>
                    </div>
                    <div className="relative mt-12">
                        <label className="text-black text-[16px]">Select Categories:</label>
                        <div className="absolute bg-customAsh w-[340px] h-[50px] flex items-center">
                            <AiFillHome className="ps-2 text-black text-[24px]" />
                            <select id="house" name="house" className="bg-customAsh w-[300px] text-black pl-3 text-[14px]">
                                <option value="bungalow">Bungalow</option>
                                <option value="office">Office</option>
                                <option value="apartment">Apartment</option>
                            </select>
                        </div>
                    </div>
                    <div className="relative mt-12">
                        <label className="text-black text-[16px]">Maximum price:</label>
                        <div className="absolute bg-customAsh w-[340px] h-[50px] flex items-center">
                            <AiFillHome className="ps-2 text-black text-[24px]" />
                            <select id="price" name="price" className="bg-customAsh w-[300px] text-black pl-3 text-[14px]">
                                <option value="1000">1000</option>
                                <option value="2000">2000</option>
                                <option value="3000">3000</option>
                                <option value="4000">4000</option>
                                <option value="5000">5000</option>
                                <option value="6000">6000</option>
                                <option value="7000">7000</option>
                                <option value="8000">8000</option>
                                <option value="9000">9000</option>
                                <option value="10000">10000</option>
                            </select>
                        </div>
                    </div>
                    <div className="mt-16">
                        <button className="bg-green-600 px-6 py-2 w-[340px]">Search</button>
                    </div>
                </form>
            </div>
            <p className="text-black text-6xl absolute top-48 ml-[265px] hidden lg:block">Charming Patmos vacation Rental: <Typewriter text="Your wine" delay={100} /></p>

            {/* Form for desktop */}
            <div className="bg-white hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:block w-[1157px] h-[200px] rounded-3xl">
                
                <form >
                    <div className="flex flex-row items-center mx-5 mt-5 ">                
                        <div className="flex flex-col mr-5 ">
                            <label className="font-bold" >Search: * </label>
                            <div className="flex bg-gray-50 items-center mt-2">
                                <CiSearch className="text-black text-[24px] ml-2" />
                                <input type="text" placeholder="Search your keywords" className=" bg-gray-50 border-none focus:outline-none focus:ring-0 ps-2 h-[60px] w-[340px]"/>
                            </div>
                            
                        </div>
                        <div className="flex flex-col mr-5">
                            <label className="font-bold">Select your category: * </label>
                            <div className="flex w-[350px] items-center mt-2 bg-gray-50">
                                <AiFillHome className=" text-green-600 text-[24px] ml-2" />
                                <select id="location" name="location" className="w-[340px] h-[60px] bg-gray-50 mr-2">
                                    <option value="bungalow">Bungalow</option>
                                    <option value="office">Office</option>
                                    <option value="apartment">Apartment</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label className="font-bold">Price: * </label>
                            <div className="flex w-[350px] bg-gray-50 items-center mt-2">
                                <AiFillHome className=" text-green-600 text-[24px] ml-2" />
                                <select id="price" name="price" className="w-[340px] bg-gray-50  h-[60px] mr-2">
                                    <option>100</option>
                                    <option>200</option>
                                    <option>300</option>
                                    <option>400</option>
                                    <option>500</option>
                                    <option>600</option>
                                    <option>700</option>
                                    <option>800</option>
                                    <option>900</option>
                                </select>
                            </div>
                            

                        </div>
                    </div>
                    <button className="bg-green-600 px-6 py-2 w-[300px] rounded-[4px] mt-4 ml-5 text-white">Search</button>
                </form>
            </div>
        </div>
    );
}
