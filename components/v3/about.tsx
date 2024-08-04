"use client";

import Banner from "@/public/images/v3/banner.png";
import Image from 'next/image';
import PersonalImage from "@/public/images/v3/personal.png";
import LogoBlack from "@/public/images/v3/logoblack.png";
import { SetStateAction, useState } from "react";

const details = [
    {
        "title": "Full Stack Development", "description": `
        I specialize in bringing your dream designs to life as functional and aesthetically pleasing websites. I have the expertise to develop back-end systems as well.
        <br/><br/>
        Experience: NextJS, TailwindCSS, VueJS, AngularJS, Bootstrap, PHP, ASP .NET Core.
        ` },
    {
        "title": "Mobile Development", "description": `
        I have experience in designing a mobile application. I have designed somewhat an e-Commerce mobile application for one of my units which you can access it here.
        <br/><br/>
        Experience: Kotlin
        ` },
    { "title": "Cloud Architect", "description": "To be added..." },
    {
        "title": "Data Analyst", "description": `
        I have experience in Business Intelligence, utilizing tools such as Tableau and PowerBI to create powerful visualizations.
        <br/><br/>
        Additionally, I excel in designing robust RDBMS systems, guaranteeing data integrity.
        <br/><br/>
        Experience: PostgreSQL, SQL
        `},
    {
        "title": "IoT Development", "description": `
        I've developed IoT systems using Raspberry Pi (RPi) as the microcomputer and Arduino as the microcontroller. I utilize MQTT for efficient message queuing between devices and Flask for user-friendly front-end interfaces in IoT systems.
        <br/><br/>
        Experience: Amazon Web Services (AWS), Flask, Nginx, Arduino Sketch
        ` },
    { "title": "AI/ Machine Learning", "description": "To be added..." }
]

export default function AboutComponentV3() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleCardClick = (index: SetStateAction<null>) => {
        setActiveIndex(index === activeIndex ? null : index); // Toggle active card
    };

    return (
        <div>
            <div className="relative">
                <div className="hidden lg:block">
                    <div className="relative">
                        <Image
                            src={Banner}
                            alt="Leaderboard Banner"
                            layout="responsive"
                            width={1200} // Replace with your banner's width
                            height={800} // Replace with your banner's height
                        />
                        {/* <div className="absolute bottom-4 right-4 text-white bg-black bg-opacity-50 p-4 rounded-lg">
                            <p className="text-lg font-bold">About</p>
                        </div> */}
                    </div>
                </div>

                <div className="block lg:hidden w-full h-80 md:h-96 lg:h-[400px]">
                    <Image
                        src={Banner}
                        alt="Leaderboard Banner"
                        layout="fill" // This makes the image cover the container
                        objectFit="cover" // This ensures the image covers the container without distortion
                        className="w-full h-full"
                    />
                    <div className="absolute bottom-4 right-4 text-white bg-black bg-opacity-50 p-4 rounded-lg">
                        <p className="text-lg font-bold">About</p>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center">
                <div className="w-full lg:w-8/12">
                    <div className="m-10 lg:m-20 space-y-10 text-black">
                        <div className="font-bold text-[20px]">
                            Who are we... or more like... who am I?
                        </div>

                        <div className="flex lg:flex-row flex-col">
                            <div className="w-full lg:w-4/12">
                                <Image
                                    src={PersonalImage}
                                    alt="Personal Image"
                                    objectFit="cover"
                                    className="w-72 h-72 shadow-lg rounded-md"
                                />
                            </div>
                            <div className="w-full lg:w-8/12 mt-5 lg:mt-0">
                                <div className="font-bold text-[18px]">
                                    Meet Jaden!
                                </div>
                                <div>
                                    I am who I am!
                                </div>
                            </div>
                        </div>


                        <div className="flex lg:flex-row flex-col">
                            <div className="w-full lg:w-4/12">
                                <Image
                                    src={LogoBlack}
                                    alt="Personal Image"
                                    objectFit="cover"
                                    className="w-72 h-72 shadow-lg rounded-md"
                                />
                            </div>
                            <div className="w-full lg:w-8/12 mt-5 lg:mt-0">
                                <div className="font-bold text-[18px]">
                                    Why Boneeto?
                                </div>
                                <div>
                                    Because why not?
                                </div>
                            </div>
                        </div>

                        <div className="font-bold text-[20px]">
                            What can I do?
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                            {details.map((card, index) => (
                                <div key={index} className="bg-white p-5 rounded-md shadow-lg">
                                    <h3 className="text-[20px] font-semibold mb-2 text-center">{card.title}</h3>
                                    <p className="text-justify" dangerouslySetInnerHTML={{ __html: card.description }} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}