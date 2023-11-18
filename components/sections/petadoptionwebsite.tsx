"use client";

import { useSpring, animated, config } from 'react-spring';
import { useEffect, useState } from 'react';
import Webstart1 from '@/public/images/petadoptionwebsite/webstart1.png'
import Webstart2 from '@/public/images/petadoptionwebsite/webstart2.png'
import { Link, Element } from 'react-scroll';

export default function PetAdoptionWebsite() {
    const [isVisible, setIsVisible] = useState(false);

    const fadeIn_Card = useSpring({
        opacity: isVisible ? 1 : 0,
        from: { opacity: 0 },
        config: config.default,
        delay: 500,
    });

    const fadeIn_Images1 = useSpring({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'rotate(0deg)' : 'rotate(45deg)',
        config: config.default,
        delay: 750,
    });

    const fadeIn_Images2 = useSpring({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'rotate(0deg)' : 'rotate(45deg)',
        config: config.default,
        delay: 750,
    });

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 700;

            if (isScrolled !== isVisible) {
                setIsVisible(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isVisible]);

    return (
        <Element name="section2">
            <div className="min-h-screen flex items-center justify-center overflow-hidden">
                <div className="w-full">
                    <div className="flex items-center justify-center">
                        <animated.div
                            style={{ ...fadeIn_Card, textAlign: 'center' }}
                            className="bg-white p-8 rounded-md shadow-md items-center w-full m-10"
                        >
                            <div className="text-black text-3xl font-bold text-center pb-4 pt-4">
                                <p className="text-3xl">
                                    First Web Application
                                </p>
                                <hr className="w-full border-t-2 border-gray-300 mt-2" />
                                <p className="text-lg mt-2">This web application was created with vanilla frameworks, HTML5, CSS, JavaScript and PHP using XAMPP (MySQL)</p>
                            </div>
                            <div className="flex flex-row w-6/12">
                                <animated.img
                                    src={Webstart1.src}
                                    alt="Webstart 1"
                                    className="rounded-lg mr-2 -ml-2"
                                    style={fadeIn_Images1}
                                />
                                <animated.img
                                    src={Webstart2.src}
                                    alt="Webstart 2"
                                    className="rounded-lg ml-2 mr-2"
                                    style={fadeIn_Images2}
                                />
                            </div>
                        </animated.div>
                    </div>
                </div>
            </div>
        </Element>
    )
}
