import { FaLinkedin, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';
import LogoWhite from "@/public/images/v3/logowhite.png"

export default function FooterV3() {
    return (
        <footer className="bg-gray-800 text-white py-4 mt-auto z-[999] font-cascadia-code">
            <div className="container mx-auto flex flex-col items-center">
                {/* Logo */}
                <div className="mb-4">
                    <img src={LogoWhite.src} alt="Logo" className="w-48 h-auto" />
                </div>

                {/* Social Media Icons */}
                <div className="flex space-x-8 mb-4">
                    <a href="https://www.linkedin.com/in/jaden-choo-842962250/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 duration-300 transition-all ease-in-out">
                        <FaLinkedin size={28} />
                    </a>
                    <a href="https://www.facebook.com/jaden.choo.142/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 duration-300 transition-all ease-in-out">
                        <FaFacebook size={28} />
                    </a>
                    <a href="https://instagram.com/jaadenchoo" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 duration-300 transition-all ease-in-out">
                        <FaInstagram size={28} />
                    </a>
                    <a href="mailto:jadpichoo@outlook.com" className="hover:text-gray-400 duration-300 transition-all ease-in-out">
                        <FaEnvelope size={28} />
                    </a>
                </div>

                {/* Copyright */}
                <div className="text-sm">
                    &copy; {new Date().getFullYear()} Boneeto. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
