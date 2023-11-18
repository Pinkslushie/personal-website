"use client";

import { useSpring, animated, config } from 'react-spring';
import { useEffect, useState } from 'react';
import Game1 from '@/public/images/farmingsimulator/introduction.gif'
import Game2 from '@/public/images/farmingsimulator/planting.gif'
import Game3 from '@/public/images/farmingsimulator/shop.gif'
import Game4 from '@/public/images/farmingsimulator/planting_rest.gif'
import FarmingBackground from '@/public/images/farmingsimulator/farming_background.gif'
import { Link, Element } from 'react-scroll';

export default function FarmingSimulator() {
    const [isVisible, setIsVisible] = useState(false);

    const fadeIn_Card = useSpring({
        opacity: isVisible ? 1 : 0,
        from: { opacity: 0 },
        config: config.default,
        delay: 500,
    });

    const fadeIn_Game1 = useSpring({
        opacity: isVisible ? 1 : 0,
        from: { opacity: 0 },
        config: config.default,
        delay: 750,
    });

    const fadeIn_Game2 = useSpring({
        opacity: isVisible ? 1 : 0,
        from: { opacity: 0 },
        config: config.default,
        delay: 1000,
    });

    const fadeIn_Game3 = useSpring({
        opacity: isVisible ? 1 : 0,
        from: { opacity: 0 },
        config: config.default,
        delay: 1250,
    });

    const fadeIn_Game4 = useSpring({
        opacity: isVisible ? 1 : 0,
        from: { opacity: 0 },
        config: config.default,
        delay: 1500,
    });

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 1400;

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
        <Element name="section3">
            <div
                className="min-h-screen flex items-center justify-center overflow-hidden"
                style={{
                    backgroundImage: `url(${FarmingBackground.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="w-full">
                    <div className="flex items-center justify-center">
                        <animated.div
                            style={{ ...fadeIn_Card, textAlign: 'center' }}
                            className="p-8 rounded-md shadow-md items-center w-full m-10 bg-white-opacity-50"
                        >
                            <div className="text-black text-3xl font-bold text-center pb-4 pt-4">
                                <p className="text-3xl">First Game (Farming Simulator)</p>
                                <hr className="w-full border-t-2 border-gray-300 mt-2" />
                                <p className="text-lg mt-2">
                                    This game was created as part of my Object-Oriented Programming task, built using C# and SplashKit library.
                                    The game mechanics were inspired by Stardew Valley and Harvest Moon.
                                </p>
                            </div>
                            <div className="flex flex-wrap justify-center">
                                <animated.img
                                    src={Game1.src}
                                    alt="Game 1"
                                    className="rounded-lg mx-2 my-2"
                                    style={fadeIn_Game1}
                                />
                                <animated.img
                                    src={Game2.src}
                                    alt="Game 2"
                                    className="rounded-lg mx-2 my-2"
                                    style={fadeIn_Game2}
                                />
                                <animated.img
                                    src={Game3.src}
                                    alt="Game 3"
                                    className="rounded-lg mx-2 my-2"
                                    style={fadeIn_Game3}
                                />
                                <animated.img
                                    src={Game4.src}
                                    alt="Game 4"
                                    className="rounded-lg mx-2 my-2"
                                    style={fadeIn_Game4}
                                />
                            </div>
                        </animated.div>
                    </div>
                </div>
            </div>
        </Element>
    )
}
