"use client";

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function NavBarV3() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative font-cascadia-code">
            {/* Desktop Menu */}
            <div className="hidden lg:block">
                <nav className={`fixed top-0 left-0 w-full text-black p-4 z-[999] transition-all duration-300 ease-in-out ${scrolling ? 'bg-white bg-opacity-50' : 'bg-transparent'}`}>
                    <div className="container mx-auto flex items-center">
                        {/* Left section containing { } and Boneeto Studios */}
                        <div className="absolute left-0 flex items-center space-x-4 pl-4 font-bold">
                            <div className="text-[24px]">
                                &#123; &#125;
                            </div>
                            <div className="text-[20px]">
                                Boneeto Studios
                            </div>
                        </div>

                        {/* Center section containing navigation links */}
                        <div className="flex-1 flex justify-center">
                            <ul className="flex space-x-10 text-[20px]">
                                <li><a href="/" className={`hover:text-slate-500 hover:scale-105 duration-300 transition-all ease-in-out ${pathname === '/' ? 'underline' : ''}`}>Home</a></li>
                                <li><a href="/about" className={`hover:text-slate-500 hover:scale-105 duration-300 transition-all ease-in-out ${pathname === '/about' ? 'underline' : ''}`}>About</a></li>
                                <li><a href="/projects" className={`hover:text-slate-500 hover:scale-105 duration-300 transition-all ease-in-out ${pathname === '/projects' ? 'underline' : ''}`}>Projects</a></li>
                                <li><a href="/contact" className={`hover:text-slate-500 hover:scale-105 duration-300 transition-all ease-in-out ${pathname === '/contact' ? 'underline' : ''}`}>Contact</a></li>
                            </ul>
                        </div>

                        {/* Right section (can be empty or used for additional content) */}
                        <div></div>
                    </div>
                </nav>
            </div>

            {/* Mobile Menu */}
            <div className="lg:hidden font-cascadia-code">
                <div className="fixed top-0 left-0 right-0 flex items-center p-4 z-[10000] space-x-6 text-black">
                    <button
                        onClick={toggleMenu}
                        className="mt-1"
                    >
                        <FaBars size={24} />
                    </button>
                </div>
                <div className={`fixed top-0 left-0 w-40 h-full bg-gray-800 text-white p-4 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-[10000]`}>
                    <button
                        onClick={toggleMenu}
                        className="absolute top-4 right-4 text-white text-2xl"
                    >
                        <FaTimes />
                    </button>
                    <ul className="flex flex-col space-y-2 text-center mt-12">
                        <li><a href="/" className={`block py-2 text-lg ${pathname === '/' ? 'underline' : ''}`}>Home</a></li>
                        <li><a href="/about" className={`block py-2 text-lg ${pathname === '/about' ? 'underline' : ''}`}>About</a></li>
                        <li><a href="/projects" className={`block py-2 text-lg ${pathname === '/projects' ? 'underline' : ''}`}>Projects</a></li>
                        <li><a href="/contact" className={`block py-2 text-lg ${pathname === '/contact' ? 'underline' : ''}`}>Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
