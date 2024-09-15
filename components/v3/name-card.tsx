import Image from 'next/image';
import PersonalImage from "@/public/images/v3/personal.png";
import CoverImage from "@/public/images/v3/test-bg-2.gif";
import Logo from "@/public/images/v3/logowhite.png";
import { IoLocationSharp, IoMailSharp, IoPersonAddOutline } from "react-icons/io5";
import { FaPhoneAlt } from 'react-icons/fa';
import { TbWorldWww } from "react-icons/tb";

export default function NameCardComponent() {
    return (
        <>
            <div className="hidden lg:flex items-center justify-center h-screen text-black bg-gradient-to-br from-yellow-100 to-pink-100">
                {/* <div className="relative w-8/12 h-screen text-black">
                    <div className="h-[30%]">
                        <Image
                            src={CoverImage}
                            alt="Personal Image"
                            className="w-full h-full object-cover object-[50%_80%] rounded-b-lg"
                        />
                    </div>

                    <div className="h-[70%] left-[22.5%] absolute mt-5">
                        <div className="text-[30px]">
                            Jaden CHOO
                        </div>
                        <div className="text-[16px]">
                            Software Developer and Data Analyst
                        </div>
                    </div>

                    <div className="absolute top-[37.5%] left-[12.5%] transform -translate-x-1/2 -translate-y-1/2">
                        <Image
                            src={PersonalImage}
                            alt="Personal Image"
                            objectFit="cover"
                            className="w-48 h-48 rounded-full border-2 border-white"
                        />
                    </div>
                </div> */}
                <div>
                    Namecard is only visible on mobile.
                </div>
            </div>
            {/* Mobile View Text */}
            <div className="block lg:hidden">
                <div className="relative h-screen text-black">
                    <div className="h-[50%] bg-gradient-to-br from-pink-300 to-purple-300 relative">
                        <div className="absolute top-1/2 -right-[4.5rem] transform -translate-y-1/2 -rotate-90 bg-white px-4 py-2 rounded-lg shadow-lg">
                            Boneeto Studios
                        </div>
                        <Image
                            src={PersonalImage}
                            alt="Personal Image"
                            className="w-full h-full object-cover object-[50%_10%]"
                        />
                    </div>

                    <div className="h-[50%] bg-slate-100 flex justify-center pt-8">
                        <div className="flex flex-col items-center space-y-3 pr-10 pl-10">
                            <div className="flex flex-col border-l-4 border-l-slate-500 pl-5">
                                <span className="text-[20px] font-bold">Jaden CHOO</span>
                                <span>Software Developer/ Data Analyst</span>
                            </div>
                            <a href="tel:+601116181095" className="w-full">
                                <div className="flex items-center space-x-2">
                                    <div className="bg-pink-300 rounded-full p-2">
                                        <FaPhoneAlt />
                                    </div>
                                    <span>+6011-1618 1095</span>
                                </div>
                            </a>
                            <a href="mailto:jadpichoo@outlook.com" className="w-full">
                                <div className="flex w-full items-center space-x-2">
                                    <div className="bg-pink-300 rounded-full p-2">
                                        <IoMailSharp />
                                    </div>
                                    <span>jadpichoo@outlook.com</span>
                                </div>
                            </a>
                            <div className="flex w-full items-center space-x-2">
                                <div className="bg-pink-300 rounded-full p-2">
                                    <IoLocationSharp />
                                </div>
                                <span>Kuching, Sarawak, Malaysia</span>
                            </div>
                            <a href="https://boneetoflakes.com" target="_blank" className="w-full">
                                <div className="flex w-full items-center space-x-2">
                                    <div className="bg-pink-300 rounded-full p-2">
                                        <TbWorldWww />
                                    </div>
                                    <span>boneetoflakes.com</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* <div className="absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <Image
                            src={PersonalImage}
                            alt="Personal Image"
                            objectFit="cover"
                            className="w-36 h-36 rounded-full"
                        />
                    </div> */}

                    <a href="tel:+601116181095">
                        <div className="absolute bottom-4 right-4 bg-purple-300 p-3 flex items-center justify-center rounded-full">
                            <IoPersonAddOutline size={20} />
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}