"use client";

import { useSpring, animated, config } from 'react-spring';
import { useEffect, useState } from 'react';
import Overwatch from '@/public/images/personal/overwatch-2.jpg'
import TreasureBox from '@/public/images/consolelinegame/treasurebox.gif'
import Console1 from '@/public/images/consolelinegame/console1.gif'
import Console2 from '@/public/images/consolelinegame/console2.gif'
import { Link, Element } from 'react-scroll';

export default function ConsoleLineGame() {
    const [isVisible, setIsVisible] = useState(false);
    const fadeIn_Card1 = useSpring({
        opacity: isVisible ? 1 : 0,
        from: { opacity: 0 },
        config: config.default,
        delay: 750,
    });
    const fadeIn_Card2 = useSpring({
        opacity: isVisible ? 1 : 0,
        from: { opacity: 0 },
        config: config.default,
        delay: 1250,
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
        setIsVisible(true);
    }, []);

    return (
        <Element name="section3">
            <animated.div
                className="min-h-screen flex items-center justify-center overflow-hidden"
                style={{
                    backgroundImage: `url(${Overwatch.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="w-full">
                    <div className="">
                        <animated.div
                            style={{ ...fadeIn_Card1, textAlign: 'center' }}
                            className="p-8 rounded-md shadow-md items-center m-10 bg-white-opacity-75"
                        >
                            <div className="w-full pr-4">
                                <div className="text-black text-3xl font-bold pb-4 pt-4">
                                    <p className="text-3xl text-center">Overwatch 2</p>
                                    <hr className="border-t-2 border-gray-300 mt-2" />
                                    <p className="text-lg mt-2 text-center">
                                        I was too poor to afford Overwatch 1, so I only could start playing Overwatch 2 :&apos;
                                        <br /><br />
                                        I can play all roles, but more preferably on tank and support (those without needing to aim).
                                        <br />
                                        You guessed it right, yes, I am a Mercy main! I can be your pocket Mercy 🥺👉👈
                                    </p>
                                </div>
                            </div>
                            <div className="w-full flex flex-wrap">
                                <animated.img
                                    src={Console1.src}
                                    alt="Console 1"
                                    className="rounded-lg w-1/2 scale-90"
                                    style={fadeIn_Game1}
                                />
                                <animated.img
                                    src={Console1.src}
                                    alt="Console 1"
                                    className="rounded-lg w-1/2 scale-90"
                                    style={fadeIn_Game1}
                                />
                                <animated.img
                                    src={Console1.src}
                                    alt="Console 1"
                                    className="rounded-lg w-1/2 scale-90"
                                    style={fadeIn_Game1}
                                />
                                <animated.img
                                    src={Console1.src}
                                    alt="Console 1"
                                    className="rounded-lg w-1/2 scale-90"
                                    style={fadeIn_Game1}
                                />
                            </div>
                        </animated.div>
                    </div>
                </div>
            </animated.div>
        </Element>
    )
}
