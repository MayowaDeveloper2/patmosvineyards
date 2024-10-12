import Image from "next/image";
import patmos from "../images/patmoslogo.png";


export default function Footer () {
    return (
        <div className="grid grid-cols-4">
            <div>
                <Image className="w-[50px] h-[50px]" src={patmos} alt="Logo" />
                <div>
                    Whether you're seeking a peaceful getaway, an adventure-filled vacation, or a romantic escape, 
                    this Patmos sanctuary is the perfect destination.
                </div>
            </div>

        </div>
    )
}