"use client";

import { useEffect, useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

export default function NavigationBar() {
    const [isSticky, setIsSticky] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 500) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className="fixed top-6 right-6 block lg:hidden text-black cursor-pointer z-[9999]">
                <GiHamburgerMenu size={32} onClick={toggleSidebar} />
            </div>
            <div className={`top-0 left-0 pl-4 pr-4 pb-8 z-[999] w-full transition-all ease-in-out duration-300 ${isSticky ? 'shadow-lg fixed h-[5vh] pt-3 bg-white opacity-90' : 'bg-transparent absolute h-[10vh] pt-8'} hidden lg:block`}>
                <div className="mx-0 lg:mx-4 flex justify-between items-center">
                    {!isSticky ? (
                        <div className="font-bold text-black font-brittany">
                            <span className="text-[36px]">B</span><span className="text-[26px]">oneeto</span><span className="text-[36px]">F</span><span className="text-[26px]">lakes</span>
                        </div>
                    ) : (
                        <div className="font-bold text-black font-brittany">
                            {/* <span className="text-[20px]">B</span><span className="text-[10px]">oneeto</span><span className="text-[20px]">F</span><span className="text-[10px]">lakes</span> */}
                        </div>
                    )}
                    <div className="lg:flex lg:items-end lg:justify-end space-x-10 text-black opacity-100 hidden">
                        <a href="#section1" className="hover:text-gray-700 duration-200 transition-all ease-in-out hover:drop-shadow-xl">Home</a>
                        <a href="#section2" className="hover:text-gray-700 duration-200 transition-all ease-in-out hover:drop-shadow-xl">My Projects</a>
                        <a href="#section3" className="hover:text-gray-700 duration-200 transition-all ease-in-out hover:drop-shadow-xl">Messages Board</a>
                    </div>
                </div>
            </div>
            <div className={`top-0 left-0 pl-4 pr-4 pb-8 z-[999] w-full block lg:hidden bg-transparent absolute h-[10vh] pt-8`}>
                <div className="font-bold text-black font-brittany">
                    <span className="text-[36px]">B</span><span className="text-[26px]">oneeto</span><span className="text-[36px]">F</span><span className="text-[26px]">lakes</span>
                </div>
            </div>

            {/* Sidebar */}
            <div className={`fixed top-0 left-0 w-64 h-full bg-white z-[1000] transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:hidden`}>
                <div className="flex justify-between items-center p-4 text-black">
                    <div className="font-bold text-black font-brittany">
                        <span className="text-[36px]">B</span><span className="text-[26px]">oneeto</span><span className="text-[36px]">F</span><span className="text-[26px]">lakes</span>
                    </div>
                    <AiOutlineClose size={32} onClick={toggleSidebar} className="cursor-pointer" />
                </div>
                <div className="flex flex-col p-4 space-y-4 text-black">
                    <a href="#section1" className="hover:text-gray-400">Home</a>
                    <a href="#section2" className="hover:text-gray-400">My Projects</a>
                    <a href="#section3" className="hover:text-gray-400">Messages Board</a>
                </div>
            </div>

            {/* Overlay */}
            {isSidebarOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-[999] lg:hidden" onClick={toggleSidebar}></div>
            )}
        </div>
    );
}
