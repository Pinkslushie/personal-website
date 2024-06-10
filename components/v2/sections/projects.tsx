import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { SetStateAction, useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";

import ProjectHome from '@/components/v2/projects/home';
import FirstWebsiteProject from '@/components/v2/projects/firstwebsite';
import OOPProject from '@/components/v2/projects/oop';
import MobileAppProject from '@/components/v2/projects/mobileapp';
import DSAProject from '@/components/v2/projects/dsa';
import { Element } from 'react-scroll';

export default function Projects() {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <Element name="section2">
            <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
                <div className="min-h-screen mt-20 mb-10 lg:mb-0 lg:mt-0">
                    <div className="flex items-center justify-center min-h-screen p-10 lg:h-screen">
                        <div className="bg-white lg:flex lg:items-center lg:justify-center lg:h-5/6 w-full flow-light-card">
                            <div className="w-full lg:w-2/12 p-5 h-full text-black">
                                <div className="flex items-center justify-center mb-3">
                                    <div className="font-bold text-[24px] lg:text-[30px] font-brittany">Navigation Pane</div>
                                </div>
                                <TabList className="flex flex-col space-y-2 items-start text-left">
                                    {["Home", "First Website", "Object-Oriented Programming Custom Program", "Mobile Application (Kotlin)", "Data Structures and Algorithms", "Final Year Project (EMAT)", "Supermarket Shelves Detection (AI)"].map((tab, index) => (
                                        <Tab
                                            key={index}
                                            className={({ selected }) =>
                                                `w-full py-2 px-3 rounded-lg text-left focus:outline-none ${selected ? 'bg-[#98FF98]' : 'bg-white text-black'
                                                }`
                                            }
                                        >
                                            {tab}
                                        </Tab>
                                    ))}
                                </TabList>
                            </div>
                            <div className="w-full h-[1px] bg-black block lg:hidden"></div>
                            <div className="w-full lg:w-10/12 p-5 text-black lg:border-l lg:border-black h-full">
                                <TabPanels>
                                    <TabPanel className={`p-5 transition-all duration-500 transform ${selectedIndex === 0 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}>
                                        <ProjectHome />
                                    </TabPanel>

                                    <TabPanel className="p-5">
                                        <FirstWebsiteProject />
                                    </TabPanel>

                                    <TabPanel className="p-5">
                                        <OOPProject />
                                    </TabPanel>

                                    <TabPanel className="p-5">
                                        <MobileAppProject />
                                    </TabPanel>

                                    <TabPanel className="p-5">
                                        <DSAProject />
                                    </TabPanel>

                                    <TabPanel className="p-5">
                                        <div>
                                            <div className="flex items-center space-x-4 mb-4">
                                                <IoIosArrowForward size={32} />
                                                <div className="text-[24px] lg:text-[30px] font-brittany font-semibold">Final Year Project (EMAT)</div>
                                            </div>
                                            <div className="relative">
                                                <div className="">
                                                    TBA...
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>

                                    <TabPanel className="p-5">
                                        <div>
                                            <div className="flex items-center space-x-4 mb-4">
                                                <IoIosArrowForward size={32} />
                                                <div className="text-[24px] lg:text-[30px] font-brittany font-semibold">Supermarket Shelves Detection (AI)</div>
                                            </div>
                                            <div className="relative">
                                                <div className="">
                                                    TBA...
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>
                                </TabPanels>
                            </div>
                        </div>
                    </div>
                </div>
            </TabGroup>
        </Element>
    )
}
