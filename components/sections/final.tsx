"use client";

import { useSpring, animated, config } from 'react-spring';
import { useEffect, useState } from 'react';
import Final from '@/public/images/final/final.gif'
import { Link, Element } from 'react-scroll';
import InstagramIcon from '@/public/icons/InstagramIcon';
import DiscordIcon from '@/public/icons/DiscordIcon';
import SpotifyIcon from '@/public/icons/SpotifyIcon';
import SteamIcon from '@/public/icons/SteamIcon';
import Modal from 'react-modal';

export default function FarmingSimulator() {
    const [isVisible, setIsVisible] = useState(false);
    const [isDiscordModalOpen, setDiscordModalOpen] = useState(false);

    const handleDiscordIconClick = () => {
        setDiscordModalOpen(true);
    };

    const closeDiscordModal = () => {
        setDiscordModalOpen(false);
    };

    const modalStyles = {
        content: {
            width: '15%',
            height: '27%',
            margin: 'auto',
        },
    };

    const fadeIn_Card = useSpring({
        opacity: isVisible ? 1 : 0,
        from: { opacity: 0 },
        config: config.default,
        delay: 500,
    });

    const finalText1 = useSpring({
        opacity: isVisible ? 1 : 0,
        from: { opacity: 0 },
        config: config.default,
        delay: 750,
    });

    const finalText2 = useSpring({
        opacity: isVisible ? 1 : 0,
        from: { opacity: 0 },
        config: config.default,
        delay: 1500,
    });

    const finalText3 = useSpring({
        opacity: isVisible ? 1 : 0,
        from: { opacity: 0 },
        config: config.default,
        delay: 3000,
    });

    const finalIcon1 = useSpring({
        opacity: isVisible ? 1 : 0,
        from: { opacity: 0 },
        config: config.default,
        delay: 2000,
    });

    const finalIcon2 = useSpring({
        opacity: isVisible ? 1 : 0,
        from: { opacity: 0 },
        config: config.default,
        delay: 2250,
    });

    const finalIcon3 = useSpring({
        opacity: isVisible ? 1 : 0,
        from: { opacity: 0 },
        config: config.default,
        delay: 2500,
    });

    const finalIcon4 = useSpring({
        opacity: isVisible ? 1 : 0,
        from: { opacity: 0 },
        config: config.default,
        delay: 2750,
    });

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 3500;

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
            <div className="min-h-screen relative">
                <div
                    className="absolute inset-0 flex items-center justify-center overflow-hidden bg-black"
                    style={{
                        backgroundImage: `url(${Final.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="w-full">
                        <div className="flex items-center justify-center">
                            <animated.div
                                style={{ ...fadeIn_Card, textAlign: 'center' }}
                                className="p-8 rounded-md shadow-md items-center m-10"
                            >
                                <div className="text-white text-3xl font-bold text-center pb-4 pt-4">
                                    <animated.p style={finalText1} className="text-[40px]">This is the end! :D</animated.p>
                                    <animated.p style={finalText2} className="text-[30px] mt-4 mb-4">
                                        Since you have made it this far, why don&apos;t you connect with me?
                                    </animated.p>
                                </div>
                                <div className="flex justify-center mt-4">
                                    <animated.div style={finalIcon1} className="text-white mx-4 cursor-pointer" onClick={() => (window.location.href = 'https://instagram.com/boneetoflakes')}>
                                        <InstagramIcon />
                                    </animated.div>
                                    <animated.div style={finalIcon2} className="text-white mx-4 cursor-pointer" onClick={handleDiscordIconClick}>
                                        <DiscordIcon />
                                    </animated.div>
                                    <animated.div style={finalIcon3} className="text-white mx-4 cursor-pointer" onClick={() => (window.location.href = 'https://steamcommunity.com/id/jadpichoo')}>
                                        <SteamIcon />
                                    </animated.div>
                                    <animated.div style={finalIcon4} className="text-white mx-4 cursor-pointer" onClick={() => (window.location.href = 'https://open.spotify.com/user/yp6h5esaufs3p5jhzcmujrwus')}>
                                        <SpotifyIcon />
                                    </animated.div>
                                </div>
                                <animated.div className="mt-10" style={finalText3}>
                                    <p className="text-[20px]">*coughs* Website powered by NextJS 14 and TailwindCSS.</p>
                                </animated.div>
                            </animated.div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 w-full text-center text-white">
                    <p className="text-[15px]">© 2023 - All rights reserved by Jaden - powered by NextJS 14 and TailwindCSS.</p>
                </div>
            </div>

            <Modal
                isOpen={isDiscordModalOpen}
                onRequestClose={closeDiscordModal}
                contentLabel="Discord"
                style={modalStyles}
            >
                <div className="flex flex-col h-full justify-between">
                    <div className="text-black">
                        <p className="text-center font-bold text-[20px]">Discord</p>
                        <p className="text-justify">I am unable to redirect you to my Discord, so here&apos;s my tag:</p>
                        <br />
                        <p className="text-center">j4dz.</p>
                    </div>
                    <button className="bg-red-600 hover:bg-red-700 p-3 rounded-md" onClick={closeDiscordModal}>Close</button>
                </div>
            </Modal>
        </Element>
    )
}
