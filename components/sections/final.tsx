"use client";

import { useSpring, animated, config } from 'react-spring';
import { useEffect, useState } from 'react';
import Final from '@/public/images/final/final.gif'
import { Link, Element } from 'react-scroll';
import InstagramIcon from '@/public/icons/InstagramIcon';
import DiscordIcon from '@/public/icons/DiscordIcon';
import SpotifyIcon from '@/public/icons/SpotifyIcon';
import SteamIcon from '@/public/icons/SteamIcon';
import RabbitSleeping from '@/public/images/final/rabbit_sleeping.gif';
import Modal from 'react-modal';
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import toast from 'react-hot-toast';

export default function FarmingSimulator() {
    const [isVisible, setIsVisible] = useState(false);
    const [isDiscordModalOpen, setDiscordModalOpen] = useState(false);
    const supabase = createClientComponentClient();
    const [userMessage, setUserMessage] = useState('');
    const [userName, setUserName] = useState('');
    const [submittedSuccess, setSubmittedSuccess] = useState<boolean>(false);

    // const [lastSubmitTime, setLastSubmitTime] = useState<number>(() => {
    //     // Retrieve the timestamp from localStorage on component mount
    //     const storedTime = localStorage.getItem('lastSubmitTime');
    //     return storedTime ? parseInt(storedTime, 10) : 0;
    // });

    // useEffect(() => {
    //     // Save the timestamp to localStorage whenever it changes
    //     localStorage.setItem('lastSubmitTime', lastSubmitTime.toString());
    // }, [lastSubmitTime]);

    const modalStyles = {
        content: {
            width: '75%',
            height: '30%',
            margin: 'auto',
            borderRadius: '8px',
            overflow: 'hidden',
            '@screen lg': {
                width: '15%',
                height: '27%',
            }
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

    const finalText4 = useSpring({
        opacity: isVisible ? 1 : 0,
        from: { opacity: 0 },
        config: config.default,
        delay: 3500,
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

    const modalSpring = useSpring({
        scale: isDiscordModalOpen ? 1 : 0,
        opacity: isDiscordModalOpen ? 1 : 1,
        config: config.stiff,
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

    const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserMessage(e.target.value);
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    };

    const handleDiscordIconClick = () => {
        setDiscordModalOpen(true);
    };

    const closeDiscordModal = () => {
        setDiscordModalOpen(false);
    };

    const handleSubmit = async () => {
        if (!userMessage) {
            toast.error("You need to input a message...")
            return;
        }

        // const currentTime = new Date().getTime();
        // const timeDifference = currentTime - lastSubmitTime;

        // // Set your desired time limit (e.g., 1 minute)
        // const timeLimit = 60000; // 1 minute in milliseconds

        // if (timeDifference < timeLimit) {
        //     toast.error(`Please wait for ${Math.ceil((timeLimit - timeDifference) / 1000)} seconds before submitting again.`);
        //     return;
        // }

        const { data, error } = await supabase.from('messages').insert([
            {
                messageName: userName || 'Anonymous',
                messageText: userMessage
            },
        ]);

        if (error) {
            console.error('Error submitting data to the database:', error);
        } else {
            console.log('Data submitted successfully:', data);
            toast.success("Submitted successfully!");
            setSubmittedSuccess(true);
            // setLastSubmitTime(currentTime);
        }
    };

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
                                className="p-8 rounded-md shadow-md items-center lg:m-10"
                            >
                                <div className="text-white text-3xl font-bold text-center lg:pb-4 pt-4">
                                    <animated.p style={finalText1} className="text-[25px] lg:text-[40px]">This is the end! :D</animated.p>
                                    <animated.p style={finalText2} className="text-[20px] lg:text-[30px] mt-4 lg:mb-4">
                                        Since you have made it this far, why don&apos;t you connect with me?
                                    </animated.p>
                                </div>
                                <div className="grid grid-cols-2 lg:flex lg:flex-row lg:justify-center">
                                    <animated.div style={finalIcon1} className="text-white mx-auto cursor-pointer w-1/2 scale-50 lg:scale-100" onClick={() => (window.location.href = 'https://instagram.com/boneetoflakes')}>
                                        <InstagramIcon />
                                    </animated.div>
                                    <animated.div style={finalIcon2} className="text-white mx-auto cursor-pointer w-1/2 scale-50 lg:scale-100" onClick={handleDiscordIconClick}>
                                        <DiscordIcon />
                                    </animated.div>
                                    <animated.div style={finalIcon3} className="text-white mx-auto cursor-pointer w-1/2 scale-50 lg:scale-100" onClick={() => (window.location.href = 'https://steamcommunity.com/id/jadpichoo')}>
                                        <SteamIcon />
                                    </animated.div>
                                    <animated.div style={finalIcon4} className="text-white mx-auto cursor-pointer w-1/2 scale-50 lg:scale-100" onClick={() => (window.location.href = 'https://open.spotify.com/user/yp6h5esaufs3p5jhzcmujrwus')}>
                                        <SpotifyIcon />
                                    </animated.div>
                                </div>

                                <animated.div className="mt-10 hidden lg:block" style={finalText3}>
                                    <p className="text-[20px]">*coughs* Website powered by NextJS 14 and TailwindCSS.</p>
                                </animated.div>

                                <animated.div style={finalText4} className="bg-white-opacity-10 p-4 lg:mt-4 w-full lg:w-1/2 mx-auto rounded-md">
                                    {!submittedSuccess ? (
                                        <div>
                                            <p className="text-center font-bold text-lg lg:mb-2">Talk to me; and yes, I will read them!</p>
                                            <div className="flex flex-col">
                                                <div className="mb-1 lg:mb-3">
                                                    <label className="block text-left lg:text-left ml-2 lg:ml-0">Name (Can be left blank): </label>
                                                    <input
                                                        type="text"
                                                        value={userName}
                                                        onChange={handleNameChange}
                                                        placeholder="Nick"
                                                        className="border p-2 rounded-md text-black w-11/12 lg:w-full"
                                                    />
                                                </div>
                                                <div className="mb-1 lg:mb-3">
                                                    <label className="block text-left lg:text-left ml-2 lg:ml-0">Message: </label>
                                                    <input
                                                        type="text"
                                                        value={userMessage}
                                                        onChange={handleMessageChange}
                                                        placeholder="Hi, I like you..."
                                                        required
                                                        className="border p-2 rounded-md text-black w-11/12 lg:w-full"
                                                    />
                                                </div>
                                                <div className="mx-auto items-center justify-center">
                                                    <button onClick={handleSubmit} className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-md">
                                                        Submit
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="mb-5">
                                            <img src={RabbitSleeping.src} alt="Rabbit Sleeping" className="mx-auto mt-4 w-48 h-48" />
                                            <p>I have received your message! <br />Thank you :D</p>
                                        </div>
                                    )}
                                </animated.div>
                            </animated.div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 w-full text-center text-white">
                    <p className="text-[10px] lg:text-[15px]">© 2023 - All rights reserved by Jaden - powered by NextJS 14 and TailwindCSS.</p>
                </div>
            </div>

            <Modal
                isOpen={isDiscordModalOpen}
                onRequestClose={closeDiscordModal}
                contentLabel="Discord"
                style={modalStyles}
            >
                <animated.div style={modalSpring} className="flex flex-col h-full justify-between overflow-hidden">
                    <div className="text-black">
                        <p className="text-center font-bold text-[20px]">Discord</p>
                        <p className="text-justify">I am unable to redirect you to my Discord, so here&apos;s my tag:</p>
                        <br />
                        <p className="text-center">j4dz.</p>
                    </div>
                    <button className="bg-red-600 hover:bg-red-700 p-3 rounded-md" onClick={closeDiscordModal}>Close</button>
                </animated.div>
            </Modal>
        </Element>
    )
}
