import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import * as React from 'react';
import Banner from "@/public/images/v3/banner.png";
import Image from 'next/image';

const timelineData = [
    { time: '2001', content: 'The year I came into this world, lol.' },
    { time: '2021', content: 'Started Bachelor of Computer Science' },
    { time: '2021', content: 'First web application using HTML, CSS, JS and PHP' },
    { time: '2022', content: 'Object-Oriented Programming (OOP) Custom Program in C#' },
    { time: '2022', content: 'Data Structures and Patterns Custom Program in C++' },
    { time: '2023', content: 'Mobile Development using Kotlin' },
    { time: '2023', content: 'Started Final Year Project (FYP) A' },
    { time: '2023', content: 'Object-Oriented Programming (OOP) Custom Program in C#' },
    { time: 'Jan 2024', content: 'Joined Quest Marketing' },
    { time: '2024', content: 'Learnt about Machine Learning (ML) and Transfer Learning (TensorFlow 2 Zoo Model)' },
    { time: '2024', content: 'To be continued...' },
];

export default function ProjectsComponentV3() {
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
                        <p className="text-lg font-bold">Projects</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="w-full lg:w-8/12">
                    <div className="m-10 lg:m-20 space-y-10 text-black">
                        <div className="font-bold text-[20px] text-center">
                            My past web designs:
                        </div>
                        <div className="flex flex-col items-center justify-center text-[20px] text-blue-500">
                            <a href="/v1" target="_blank" rel="noopener noreferrer">V1</a>
                            <a href="/v2" target="_blank" rel="noopener noreferrer">V2</a>
                            <a href="#">V3 (Current)</a>
                        </div>
                        <div className="font-bold text-[20px] text-center">
                            My past projects... soon to be click-able...
                        </div>
                        <Timeline position="alternate" sx={{ "& .MuiTimelineItem-root::before": { display: 'none' } }}>
                            {timelineData.map((t, index) => (
                                <TimelineItem key={index}>
                                    <TimelineOppositeContent color="text.secondary">
                                        {t.time}
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot />
                                        {index < timelineData.length - 1 && <TimelineConnector />}
                                    </TimelineSeparator>
                                    <TimelineContent>{t.content}</TimelineContent>
                                </TimelineItem>
                            ))}
                        </Timeline>
                    </div>
                </div>
            </div>
        </div>
    )
}