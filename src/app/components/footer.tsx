import Image from "next/image";
import patmos from "../images/patmoslogo.png";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-green-600 lg:px-[100px] px-[15px] py-10 mt-7">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-20">
        <div>
          <Image className="w-[50px] h-[50px]" src={patmos} alt="Logo" />
          <div className="text-white mt-4">
            Whether you're seeking a peaceful getaway, an adventure-filled vacation, or a romantic escape, this Patmos sanctuary is the perfect destination.
          </div>
        </div>
        <div className="text-white">
          <span className="font-semibold text-[24px]">Company</span>
          <div className="mt-4">About Us</div>
          <div>Property</div>
          <div>Login</div>
        </div>
        <div>
          <span className="text-white font-semibold text-[24px]">Contact Details</span>
          <div className="mt-4">
            <div className="flex items-center text-white">
              <IoLocation className="text-white mr-2" /> Patmos 855 00, Greece
            </div>
            <div>View on Google map</div>
          </div>
          <div className="flex items-center text-white mt-4">
            <MdEmail className="text-white mr-2" /> mark@acquiscapital.com
          </div>
        </div>
      </div>
    </footer>
  );
}
