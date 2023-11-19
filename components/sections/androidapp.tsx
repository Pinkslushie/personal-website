"use client";

import { useSpring, animated, config } from 'react-spring';
import { useEffect, useState } from 'react';
import { Link, Element } from 'react-scroll';
import Phone1 from '@/public/images/androidapp/phone1.png'
import Phone2 from '@/public/images/androidapp/phone2.png';
import Phone3 from '@/public/images/androidapp/phone3.png';
import Phone4 from '@/public/images/androidapp/phone4.png';
import Phone5 from '@/public/images/androidapp/phone5.png';
import Phone6 from '@/public/images/androidapp/phone6.png';

export default function AndroidApp() {
    const [isVisible, setIsVisible] = useState(false);

    const fadeIn_Card = useSpring({
        opacity: isVisible ? 1 : 0,
        from: { opacity: 0 },
        config: config.default,
        delay: 500,
    });

    const fadeIn_Phone1 = useSpring({
        opacity: isVisible ? 1 : 0,
        from: { opacity: 0 },
        config: config.default,
        delay: 750,
    });

    const fadeIn_Phone2 = useSpring({
        opacity: isVisible ? 1 : 0,
        from: { opacity: 0 },
        config: config.default,
        delay: 1000,
    });

    const fadeIn_Phone3 = useSpring({
        opacity: isVisible ? 1 : 0,
        from: { opacity: 0 },
        config: config.default,
        delay: 1250,
    });

    const fadeIn_Phone4 = useSpring({
        opacity: isVisible ? 1 : 0,
        from: { opacity: 0 },
        config: config.default,
        delay: 1500,
    });

    const fadeIn_Phone5 = useSpring({
        opacity: isVisible ? 1 : 0,
        from: { opacity: 0 },
        config: config.default,
        delay: 1750,
    });

    const fadeIn_Phone6 = useSpring({
        opacity: isVisible ? 1 : 0,
        from: { opacity: 0 },
        config: config.default,
        delay: 2000,
    });

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 2100;

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
                            className="bg-white p-8 rounded-md shadow-md items-center m-10"
                        >
                            <div className="text-black text-3xl font-bold text-center pb-4 pt-4">
                                <p className="text-3xl">
                                    Android Application
                                </p>
                                <hr className="w-full border-t-2 border-gray-300 mt-2" />
                                <p className="text-lg mt-2 font-semibold text-justify lg:text-center">
                                    Cytron inspired (please don&apos;t sue me lol) platform that allows users to add items to cart, check-out with them and view their order status.
                                    <br /><br className="block lg:hidden" />
                                    This was created using Android Studio (Kotlin) with the use of Google Firebase as the database.
                                </p>
                            </div>
                            <div className="flex flex-wrap lg:flex-row justify-center items-center">
                                <animated.img
                                    src={Phone1.src}
                                    alt="Phone 1"
                                    className="lg:w-1/6 w-1/2 h-auto rounded-lg transition-shadow drop-shadow-2xl"
                                    style={fadeIn_Phone1}
                                />
                                <animated.img
                                    src={Phone2.src}
                                    alt="Phone 2"
                                    className="lg:w-1/6 w-1/2 h-auto rounded-lg transition-shadow drop-shadow-2xl"
                                    style={fadeIn_Phone2}
                                />
                                <animated.img
                                    src={Phone3.src}
                                    alt="Phone 3"
                                    className="lg:w-1/6 w-1/2 h-auto rounded-lg transition-shadow drop-shadow-2xl"
                                    style={fadeIn_Phone3}
                                />
                                <animated.img
                                    src={Phone4.src}
                                    alt="Phone 4"
                                    className="lg:w-1/6 w-1/2 h-auto rounded-lg transition-shadow drop-shadow-2xl"
                                    style={fadeIn_Phone4}
                                />
                                <animated.img
                                    src={Phone5.src}
                                    alt="Phone 5"
                                    className="lg:w-1/6 w-1/2 h-auto rounded-lg transition-shadow drop-shadow-2xl"
                                    style={fadeIn_Phone5}
                                />
                                <animated.img
                                    src={Phone6.src}
                                    alt="Phone 6"
                                    className="lg:w-1/6 w-1/2 h-auto rounded-lg transition-shadow drop-shadow-2xl"
                                    style={fadeIn_Phone6}
                                />
                            </div>
                        </animated.div>
                    </div>
                </div>
            </div>
        </Element>
    )
}
