'use client'

import Image from "next/image";

import patmos from "../images/blue-white-holiday-water-beach.jpg";
import Typewriter from "./typewriter";
import { CiSearch } from "react-icons/ci";
import { AiFillHome } from "react-icons/ai";

export default function Hero () {
    return (
        <div>
            <div className="relative w-full items-center flex flex-col ">
                <Image className="w-full h-[600px]" src={patmos} alt=""/>
                {/* mobile view */}
                <div className="absolute top-28 lg:hidden">
                   <p className="text-black font-bold  text-2xl  sm:w-[300px] xs:w-[280px]">Charming Patmos vacation Rental: <Typewriter text="Your wine" delay={100} /></p>
                    <form className="flex flex-col mt-10 sm:min-w-[380px] xs:min-w-[340px]  bg-blue-300 h-[320px] pl-5 pr-5">
                        <div className="flex flex-col mt-4">
                            <label>Search: *</label>
                            <div className="flex items-center bg-gray-50 h-[40px]">
                                <CiSearch className="ps-2 text-black text-[24px]" />
                                <input type="text" placeholder="Search your keywords" className="ps-2 bg-gray-50 sm:min-w-[310px] xs:min-w-[270px]"/>
                            </div>
                        </div>
                        <div className="flex flex-col mt-2">
                            <label>Select categories: *</label>
                            <div className="flex items-center bg-gray-50 h-[40px]">
                                <CiSearch className="ps-2 text-black text-[24px]" />
                                <select className="ps-2 bg-gray-50 sm:min-w-[310px] xs:min-w-[270px]">
                                    <option>Bungalow</option>
                                    <option>Office</option>
                                    <option>Apartment</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col mt-2">
                            <label>Price: *</label>
                            <div className="flex items-center bg-gray-50 h-[40px]">
                                <CiSearch className="ps-2 text-black text-[24px]" />
                                <select className="ps-2 bg-gray-50 sm:min-w-[310px] xs:min-w-[270px]">
                                    <option>100</option>
                                    <option>200</option>
                                    <option>300</option>
                                    <option>400</option>
                                </select>
                            </div>
                        </div>
                        <button className="px-6 py-2 bg-green-600 text-white mt-5">Search</button>
                        
                    </form>
                </div>
                {/* desktop view */}
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
        </div>
              
    )
}