/* eslint-disable react/no-unescaped-entities */
'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { BsPersonFillCheck } from "react-icons/bs";
import { GiPersonInBed } from "react-icons/gi";
import { FaWifi } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { MdOutlineBathtub } from "react-icons/md";
import { IoIosStar, IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from "react-icons/io";
import realestate1 from "../images/apartment.jpeg";
import { FaCircle } from "react-icons/fa";
import realestate2 from "../images/HOME1.webp";
import realestate3 from "../images/HOME2.webp";
import realestate4 from "../images/HOME3.webp";
import realestate5 from "../images/HOME4.webp";
import whiteperson1 from "../images/white woman1.jpg";
import whiteperson2 from "../images/white woman2.jpg";
import whiteperson3 from "../images/white woman3.jpg";
import whiteperson4 from "../images/white woman4.jpg";
import { FaPhone } from "react-icons/fa6";

export default function BodyContent() {
    const RealEstate = [
        { location: "Entire rental unit in Skala, Greece", src: realestate1 },
        { location: "Cycladi home in Skala", src: realestate2 },
        { location: "Home in Patmos", src: realestate3 },
        { location: "Cycladi home in Patmos", src: realestate4 },
        { location: "Home in Skala", src: realestate5 }
    ];

    const PersonReview = [
        {src: whiteperson1, name: "Olivia Harris", job: "Manager"},
        {src: whiteperson2, name: "Emma Johnson", job: "CEO"},
        {src: whiteperson3, name: "Sophia Clark", job: "Publisher"},
        {src: whiteperson4, name: "Isabella Lewis", job: "Manager"}
    ]

    const [realEstateIndex, setRealEstateIndex] = useState(0);
    const [personReviewIndex, setPersonReviewIndex] = useState(0);

    useEffect(() => {
        const realEstateInterval = setInterval(() => {
            setRealEstateIndex((prevIndex) => (prevIndex + 1) % RealEstate.length);
        }, 10000); 

        return () => clearInterval(realEstateInterval);
    }, [RealEstate.length]);

    useEffect(() => {
        const personReviewInterval = setInterval(() => {
            setPersonReviewIndex((prevIndex) => (prevIndex + 1) % PersonReview.length);
        }, 10000);

        return () => clearInterval(personReviewInterval);
    }, [PersonReview.length]);

    const goToPrevious = () => {
        setRealEstateIndex((prevIndex) =>
            prevIndex === 0 ? RealEstate.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setRealEstateIndex((prevIndex) => (prevIndex + 1) % RealEstate.length);
    };

    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCount = 4;

    // Function to move to the previous set of items
    const goBack = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? RealEstate.length - visibleCount : prevIndex - 1
        );
    };

    // Function to move to the next set of items
    const goForward = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex + visibleCount >= RealEstate.length ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="lg:w-full ">
            <div className="flex items-center flex-col mt-10 xs:mx-5">
                <div className="items-center flex flex-col">
                    <div className="text-4xl text-black">Featured Properties</div>
                    <div className="text-black text-[18px] mt-6 w-[360px] lg:w-[450px]">A great platform to buy, and rent properties at ease</div>
                </div>
                
                
                <div className="overflow-hidden lg:hidden w-[360px] mt-5 xs:mx-5">
                    <div
                        className="flex transition-transform ease-in-out duration-500"
                        style={{ transform: `translateX(-${realEstateIndex * 100}%)` }}
                    >
                        {RealEstate.map((realestate, index) => (
                            <div key={index} className="flex-shrink-0 sm:w-[360px] xs:min-w-[310px] h-[470px] bg-customAsh rounded-3xl relative">
                                <IoIosArrowDropleftCircle
                                   className="absolute left-0 top-1/2 transform -translate-y-1/2 text-3xl cursor-pointer text-white"
                                   onClick={goToPrevious}
                                />
                                <IoIosArrowDroprightCircle
                                    className="absolute right-0 top-1/2 transform -translate-y-1/2 text-3xl cursor-pointer text-white"
                                    onClick={goToNext}
                                />
                                <Image className="rounded-t-3xl w-[360px] h-[300px]" src={realestate.src} alt="realestate" />
                                <div className="pl-5 mt-2">{realestate.location}</div>
                                <hr className="w-[320px] mx-auto mt-2" />
                                <div className="flex flex-row pl-5 mt-2 gap-6">
                                    <div>
                                        <BsPersonFillCheck /> <span>5 guests</span>
                                    </div>
                                    <div>
                                        <GiPersonInBed /> <span>3 bedrooms</span>
                                    </div>
                                    <div>
                                        <FaWifi /> <span>wifi</span>
                                    </div>
                                    <div>
                                        <MdOutlineBathtub /> <span>1.5 baths</span>
                                    </div>
                                </div>
                                <hr className="w-[320px] mx-auto mt-2" />
                                <div className="flex pl-5 mt-2 justify-between">
                                    <div className="flex flex-col">
                                        <div>Rent</div>
                                        <div className="flex items-center gap-1">
                                            <FaMoneyCheckDollar />
                                            <span>5000 per night</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col mr-3">
                                        <div>Rating</div>
                                        <div className="flex items-center">
                                            <IoIosStar className="text-yellow-500" />
                                            <IoIosStar className="text-yellow-500" />
                                            <IoIosStar className="text-yellow-500" />
                                            <IoIosStar className="text-yellow-500" />
                                            <IoIosStar className="text-yellow-500"/>
                                            <span className="ml-1">5.0 (50)</span>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="hidden lg:block w-[1500px] mx-10 mt-10 ">
                    <div className="relative flex gap-5 overflow-hidden">
                        {/* Left Arrow */}
                        <IoIosArrowDropleftCircle
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-3xl cursor-pointer text-white"
                        onClick={goBack}
                        />

                        {/* Visible real estate items */}
                        <div className="flex gap-5 ">
                            {RealEstate.slice(currentIndex, currentIndex + visibleCount).map((realestate, index) => (
                                <div key={index} className="flex-shrink-0 bg-gray-50  w-[360px] md:w-[300px] rounded-3xl h-[480px]">
                                    <Image
                                        className="rounded-t-3xl w-[360px] h-[300px]"
                                        src={realestate.src}
                                        alt="realestate"
                                    />
                                    <div className="pl-5 mt-2">{realestate.location}</div>
                                    <hr className="w-[320px] mx-auto mt-2" />
                                    <div className="flex flex-row pl-5 mt-2 gap-6">
                                        <div>
                                        <BsPersonFillCheck /> <span>5 guests</span>
                                        </div>
                                        <div>
                                        <GiPersonInBed /> <span>3 bedrooms</span>
                                        </div>
                                        <div>
                                        <FaWifi /> <span>wifi</span>
                                        </div>
                                        <div>
                                        <MdOutlineBathtub /> <span>1.5 baths</span>
                                        </div>
                                    </div>
                                    <hr className="w-[320px] mx-auto mt-2" />
                                    <div className="flex pl-5 mt-2 justify-between">
                                        <div className="flex flex-col">
                                        <div>Rent</div>
                                        <div className="flex items-center gap-1">
                                            <FaMoneyCheckDollar />
                                            <span>5000 per night</span>
                                        </div>
                                        </div>
                                        <div className="flex flex-col mr-3">
                                        <div>Rating</div>
                                        <div className="flex items-center">
                                            <IoIosStar className="text-yellow-500" />
                                            <IoIosStar className="text-yellow-500" />
                                            <IoIosStar className="text-yellow-500" />
                                            <IoIosStar className="text-yellow-500" />
                                            <IoIosStar className="text-yellow-500" />
                                            <span className="ml-1">5.0 (50)</span>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            ))}
                        </div>

                        {/* Right Arrow */}
                        <IoIosArrowDroprightCircle
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-3xl cursor-pointer text-white"
                        onClick={goForward}
                        />
                    </div>
                </div>
                <div className="lg:w-full flex justify-center w-[360px] mt-10 xs:mx-5">
                    <div className="flex-col items-center flex">
                        <div className="text-3xl ">What Our Clients Say?</div>
                        <div className="mt-5 text-black ">A great platform to rent houses without any agent or commissions</div>
                    </div>
                    

                </div>
                <div className="items-center w-[360px] lg:w-[800px] overflow-hidden mx-5 mt-4">
                    <div className="flex flex-row transition-transform ease-in-out duration-500"
                        style={{ transform: `translateX(-${personReviewIndex * 100}%)` }}
                    >
                        {PersonReview.map((person, index) => (
                            <div key={index} className="flex items-center flex-col">
                                <div className="text-black mt-8 w-[360px] lg:w-[800px]">
                                    "We adored our stay here. One of the most beautiful places on Patmos! Clean, fast wifi, quiet, private. Close to beautiful beaches. Appreciated the daily housekeeping."
                                </div>
                                <div className="flex items-center mt-3 text-yellow-500">
                                    <IoIosStar />
                                    <IoIosStar />
                                    <IoIosStar />
                                    <IoIosStar />
                                    <IoIosStar />
                                </div>
                                <div className="flex flex-col items-center mt-4">
                                    <Image className="w-[100px] h-[100px] rounded-full" src={person.src} alt="" />
                                    <div>{person.name}</div>
                                    <div>{person.job}</div>
                                </div>
                                <div className="flex items-center mt-2">
                                    {PersonReview.map((_, index) => (
                                        <FaCircle
                                            key={index}
                                            className={`text-[5px] mx-1 cursor-pointer ${index === personReviewIndex ? 'text-green-500' : 'text-gray-300'}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>    
                </div>
                <div className="items-center mt-4 flex flex-col xs:mx-5 mx-5">
                    <div className="text-2xl text-black font-bold">Have Question ? Get in touch!</div>
                    <div className="text-black mt-2">A great platform to find an apartment for your holidays
                        without any agent or commissions.
                    </div>
                    <button className="mt-2 bg-green-600 px-6 py-2 gap-1 text-white flex items-center"> <FaPhone className="" /> Contact us</button>
                </div>
            </div>
        </div>
    );
}
