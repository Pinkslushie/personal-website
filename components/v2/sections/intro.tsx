import PersonalImage from '@/public/images/introduction/personal-image-1.jpeg'
import DataIcon from '@/public/images/v2/data.png'
import MobileIcon from '@/public/images/v2/mobile.png'
import WebIcon from '@/public/images/v2/web.png'
import IoTIcon from '@/public/images/v2/iot.png'
import { FaLinkedin, FaDiscord, FaSpotify, FaSteam } from "react-icons/fa";
import { FaSquareInstagram, FaMessage } from "react-icons/fa6";
import { Element } from 'react-scroll';
import { useEffect, useState } from 'react'
import Modal from 'react-modal';
import { useSpring, animated, config } from 'react-spring';

export default function Introduction() {
    const [isDiscordModalOpen, setDiscordModalOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [firstLoad, setFirstLoad] = useState(true);
    const [isVisible, setIsVisible] = useState(false);

    const handleDiscordIconClick = () => {
        setDiscordModalOpen(true);
    };

    const closeDiscordModal = () => {
        setDiscordModalOpen(false);
    };

    const modalStyles = {
        content: {
            width: '50%',
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

    useEffect(() => {
        if (firstLoad) {
            setIsVisible(true);
            setFirstLoad(false);
        }

        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const isScrolled = currentScrollPos > 0 || currentScrollPos < prevScrollPos;

            if (isScrolled !== isVisible) {
                setIsVisible(isScrolled);
            }

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isVisible, prevScrollPos]);

    const fadeInMainCard = useSpring({
        opacity: isVisible ? 1 : 0,
        from: { opacity: 0 },
        config: config.default,
        delay: 500,
    });

    const fadeInCard1 = useSpring({
        opacity: isVisible ? 1 : 0,
        from: { opacity: 0 },
        config: config.default,
        delay: 1000,
    });

    const fadeInCard2 = useSpring({
        opacity: isVisible ? 1 : 0,
        from: { opacity: 0 },
        config: config.default,
        delay: 1250,
    });

    const fadeInCard3 = useSpring({
        opacity: isVisible ? 1 : 0,
        from: { opacity: 0 },
        config: config.default,
        delay: 1500,
    });

    const fadeInCard4 = useSpring({
        opacity: isVisible ? 1 : 0,
        from: { opacity: 0 },
        config: config.default,
        delay: 1750,
    });

    const fadeInCard5 = useSpring({
        opacity: isVisible ? 1 : 0,
        from: { opacity: 0 },
        config: config.default,
        delay: 2000,
    });

    return (
        <Element name="section1">
            <div className="min-h-screen">
                <div className="bg-custom-gradient lg:h-[75vh] p-4">
                    <animated.div style={fadeInMainCard} className="bg-white text-black w-11/12 mb-6 h-fit lg:h-[32vh] mt-24 mx-auto flow-light-card">
                        <div className="lg:flex lg:items-center lg:justify-center h-full">
                            <div className="w-full lg:w-2/12 flex flex-col items-center justify-center  h-full">
                                <img
                                    src={PersonalImage.src}
                                    alt="Personal"
                                    className="rounded-full w-52 mt-5 lg:mt-0"
                                />
                                {/* <div className="font-bold mt-4">
                                Jaden CHOO
                            </div> */}
                            </div>
                            <div className="w-full h-full">
                                <div className="lg:flex lg:items-stretch p-4 h-full">
                                    <div className="flex-1 p-4">
                                        <div className="text-[26px] lg:text-[36px]">
                                            Hello!
                                        </div>
                                        <div className="text-md text-left lg:text-justify text-[14px] lg:text-[16px]">
                                            My name&apos;s Jaden.

                                            I am presently a dedicated student pursuing Computer Science at Swinburne University with a primary focus on Software Development and a minor specialization in Big Data Analytics.
                                        </div>
                                    </div>
                                    <div className="flex-1 p-4 lg:border-l lg:border-black">
                                        <div className="text-[26px] lg:text-[36px]">
                                            Something about me?
                                        </div>
                                        <div className="text-md text-left lg:text-justify text-[14px] lg:text-[16px]">
                                            I have an unwavering interest in programming, specifically in the field of game development as I revolve around games since a very young age. Furthermore, I am a fast-learner that is able to learn new things (that interests me) at a fast rate.
                                            <br /><br />
                                            I...
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="hidden lg:block w-[4%] border-l border-black h-full p-4 bg-[#98FF98]">
                                <div className="flex flex-col items-center justify-between h-full cursor-pointer">
                                    <animated.div style={fadeInCard1} className="hover:scale-125 transition-all duration-200" onClick={() => (window.location.href = 'https://www.linkedin.com/in/jaden-choo-842962250/')}>
                                        <FaLinkedin size={32} />
                                    </animated.div>
                                    <div className="w-full h-[2px] bg-black"></div>
                                    <animated.div style={fadeInCard2} className="hover:scale-125 transition-all duration-200" onClick={handleDiscordIconClick}>
                                        <FaDiscord size={32} />
                                    </animated.div>
                                    <div className="w-full h-[2px] bg-black"></div>
                                    <animated.div style={fadeInCard3} className="hover:scale-125 transition-all duration-200" onClick={() => (window.location.href = 'https://open.spotify.com/user/yp6h5esaufs3p5jhzcmujrwus')}>
                                        <FaSpotify size={32} />
                                    </animated.div>
                                    <div className="w-full h-[2px] bg-black"></div>
                                    <animated.div style={fadeInCard4} className="hover:scale-125 transition-all duration-200" onClick={() => (window.location.href = 'https://instagram.com/boneetoflakes')}>
                                        <FaSquareInstagram size={32} />
                                    </animated.div>
                                    <div className="w-full h-[2px] bg-black"></div>
                                    <animated.div style={fadeInCard5} className="hover:scale-125 transition-all duration-200" onClick={() => (window.location.href = 'https://steamcommunity.com/id/jadpichoo')}>
                                        <FaSteam size={32} />
                                    </animated.div>
                                </div>
                            </div>


                            <div className="block lg:hidden w-full h-full p-4 bg-[#98FF98]">
                                <div className="flex flex-row items-center justify-between h-full cursor-pointer">
                                    <animated.div style={fadeInCard1} className="hover:scale-125 transition-all duration-200" onClick={() => (window.location.href = 'https://www.linkedin.com/in/jaden-choo-842962250/')}>
                                        <FaLinkedin size={32} />
                                    </animated.div>
                                    <div className="w-full h-[2px] bg-black rotate-90"></div>
                                    <animated.div style={fadeInCard2} className="hover:scale-125 transition-all duration-200" onClick={handleDiscordIconClick}>
                                        <FaDiscord size={32} />
                                    </animated.div>
                                    <div className="w-full h-[2px] bg-black rotate-90"></div>
                                    <animated.div style={fadeInCard3} className="hover:scale-125 transition-all duration-200" onClick={() => (window.location.href = 'https://open.spotify.com/user/yp6h5esaufs3p5jhzcmujrwus')}>
                                        <FaSpotify size={32} />
                                    </animated.div>
                                    <div className="w-full h-[2px] bg-black rotate-90"></div>
                                    <animated.div style={fadeInCard4} className="hover:scale-125 transition-all duration-200" onClick={() => (window.location.href = 'https://instagram.com/boneetoflakes')}>
                                        <FaSquareInstagram size={32} />
                                    </animated.div>
                                    <div className="w-full h-[2px] bg-black rotate-90"></div>
                                    <animated.div style={fadeInCard5} className="hover:scale-125 transition-all duration-200" onClick={() => (window.location.href = 'https://steamcommunity.com/id/jadpichoo')}>
                                        <FaSteam size={32} />
                                    </animated.div>
                                </div>
                            </div>
                        </div>
                    </animated.div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:h-[50vh] w-11/12 mx-auto text-black">
                        <animated.div style={fadeInCard1} className="bg-white p-4 flow-light-card">
                            <div className="flex flex-col items-center justify-center pt-6">
                                <img
                                    src={DataIcon.src}
                                    alt="Personal"
                                    className="w-20 object-cover pb-4"
                                />
                                <div className="font-bold text-[24px]">Data Analyst</div>
                                <div className="p-2 text-left lg:text-justify">
                                    I have experience in Business Intelligence, utilizing tools such as Tableau and PowerBI to create powerful visualizations.
                                    <br /><br />
                                    Additionally, I excel in designing robust RDBMS systems, guaranteeing data integrity.
                                    <br /><br />
                                    Experience: PostgreSQL, SQL
                                </div>
                            </div>
                        </animated.div>
                        <animated.div style={fadeInCard2} className="bg-white p-4 flow-light-card">
                            <div className="flex flex-col items-center justify-center pt-6">
                                <img
                                    src={WebIcon.src}
                                    alt="Personal"
                                    className="w-20 object-cover pb-4"
                                />
                                <div className="font-bold text-[24px]">Full-stack Developer</div>
                                <div className="p-2 text-left lg:text-justify">
                                    I specialize in bringing your dream designs to life as functional and aesthetically pleasing websites. I have the expertise to develop back-end systems as well.
                                    <br /><br />
                                    Experience: NextJS, TailwindCSS, VueJS, AngularJS, Bootstrap, PHP, ASP .NET Core.
                                </div>
                            </div>
                        </animated.div>
                        <animated.div style={fadeInCard3} className="bg-white p-4 flow-light-card">
                            <div className="flex flex-col items-center justify-center pt-6">
                                <img
                                    src={MobileIcon.src}
                                    alt="Personal"
                                    className="w-20 object-cover pb-4"
                                />
                                <div className="font-bold text-[24px]">Mobile Developer</div>
                                <div className="p-2 text-left lg:text-justify">
                                    I have experience in designing a mobile application. I have designed somewhat an e-Commerce mobile application for one of my units which you can access it here.
                                    <br /><br />
                                    Experience: Kotlin
                                </div>
                            </div>
                        </animated.div>
                        <animated.div style={fadeInCard4} className="bg-white p-4 flow-light-card mb-4 lg:mb-0">
                            <div className="flex flex-col items-center justify-center pt-6">
                                <img
                                    src={IoTIcon.src}
                                    alt="Personal"
                                    className="w-20 object-cover pb-4"
                                />
                                <div className="font-bold text-[24px]">IoT Developer</div>
                                <div className="p-2 text-left lg:text-justify">
                                    I&apos;ve developed IoT systems using Raspberry Pi (RPi) as the microcomputer and Arduino as the microcontroller. I utilize MQTT for efficient message queuing between devices and Flask for user-friendly front-end interfaces in IoT systems.
                                    <br /><br />
                                    Experience: Amazon Web Services (AWS), Flask, Nginx, Arduino Sketch
                                </div>
                            </div>
                        </animated.div>
                    </div>
                </div>
                <div className="bg-slate-100 hidden lg:block">

                </div>
            </div>
            <Modal
                isOpen={isDiscordModalOpen}
                onRequestClose={closeDiscordModal}
                contentLabel="Discord"
                style={modalStyles}
            >
                <div className="flex flex-col h-full justify-between overflow-hidden">
                    <div className="text-black">
                        <p className="text-center font-bold text-[20px]">Discord Tag</p>
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
