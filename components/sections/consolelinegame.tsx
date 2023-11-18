"use client";

import { useSpring, animated, config } from 'react-spring';
import { useEffect, useState } from 'react';
import Background from '@/public/images/consolelinegame/background.gif'
import TreasureBox from '@/public/images/consolelinegame/treasurebox.gif'
import Console1 from '@/public/images/consolelinegame/console1.gif'
import Console2 from '@/public/images/consolelinegame/console2.gif'
import { Link, Element } from 'react-scroll';

export default function ConsoleLineGame() {
    const [isVisible, setIsVisible] = useState(false);
    const [isTreasureBoxClicked, setIsTreasureBoxClicked] = useState(false);

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

    const explodeAnimation = useSpring({
        scale: isTreasureBoxClicked ? 1 : 0,
        opacity: isTreasureBoxClicked ? 1 : 1,
        config: config.stiff,
    });

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 2800;

            if (isTreasureBoxClicked) {
                if (isScrolled !== isVisible) {
                    setIsVisible(isScrolled);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isVisible]);

    const handleTreasureBoxClick = () => {
        setIsTreasureBoxClicked(true);
        setIsVisible(true);
    };

    return (
        <Element name="section3">
            {isTreasureBoxClicked ? (
                <animated.div
                    className="min-h-screen flex items-center justify-center overflow-hidden"
                    style={{
                        ...explodeAnimation,
                        backgroundImage: `url(${Background.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="w-full">
                        <div className="">
                            <animated.div
                                style={{ ...fadeIn_Card1, textAlign: 'center' }}
                                className="p-8 rounded-md shadow-md items-center m-10 bg-white-opacity-75 flex"
                            >
                                <div className="w-4/12 flex items-start justify-start">
                                    <animated.img
                                        src={Console1.src}
                                        alt="Console 1"
                                        className="rounded-lg mx-2 my-2 scale-90"
                                        style={fadeIn_Game1}
                                    />
                                </div>
                                <div className="w-8/12 text-left pr-4">
                                    <div className="text-black text-3xl font-bold pb-4 pt-4">
                                        <p className="text-3xl">Paradis Valley (Command Line Interface)</p>
                                        <hr className="border-t-2 border-gray-300 mt-2" />
                                        <p className="text-lg mt-2">
                                            This game was made for one of my units, Data Structures and Patterns, built using C++.
                                            <br /><br />
                                            It is called Paradis Valley, a re-creation of my Farming Simulator but CLI version.
                                            The game itself was fun to make, exploring all the various Data Structures.
                                        </p>
                                    </div>
                                </div>
                            </animated.div>

                            <animated.div
                                style={{ ...fadeIn_Card2, textAlign: 'center' }}
                                className="p-8 rounded-md shadow-md items-center m-10 bg-white-opacity-75 flex"
                            >
                                <div className="w-1/2 text-left pr-4">
                                    <div className="text-black text-3xl font-bold pb-4 pt-4">
                                        <p className="text-3xl">Data Structures</p>
                                        <hr className="border-t-2 border-gray-300 mt-2" />
                                        <p className="text-lg mt-2">
                                            The game consisted the following data structures:
                                            <br />
                                            <ul>
                                                <li>&#x2022; Doubly Linked List</li>
                                                <li>&#x2022; Singly Linked List</li>
                                                <li>&#x2022; Queue</li>
                                                <li>&#x2022; Stack</li>
                                                <li>&#x2022; Iterators for 2D Array</li>
                                                <li>&#x2022; and probably some other ones I forgot...</li>
                                            </ul>
                                        </p>
                                    </div>
                                </div>
                                <div className="w-1/2 flex items-end justify-end">
                                    <animated.img
                                        src={Console2.src}
                                        alt="Console 2"
                                        className="rounded-lg mx-2 my-2"
                                        style={fadeIn_Game2}
                                    />
                                </div>
                            </animated.div>
                        </div>
                    </div>
                </animated.div>
            ) : (
                <div className="min-h-screen flex justify-center items-center">
                    <div className="flex flex-col items-center">
                        <p className="text-black text-[20px] mb-2">Click me! :D</p>
                        <animated.img
                            src={TreasureBox.src}
                            alt="Treasure Box"
                            className="w-28 cursor-pointer z-[999]"
                            onClick={handleTreasureBoxClick}
                        />
                    </div>
                </div>
            )}
        </Element>
    )
}
