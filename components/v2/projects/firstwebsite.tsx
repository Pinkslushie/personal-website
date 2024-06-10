import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Webstart1 from '@/public/images/petadoptionwebsite/webstart1.png'
import Webstart2 from '@/public/images/petadoptionwebsite/webstart2.png'

export default function FirstWebsiteProject() {

    const [activeImageFirstWebsite, setActiveImageFirstWebsite] = useState<string | null>('image1');

    const handleClickFirstWebsite = (image: string) => {
        setActiveImageFirstWebsite(prevImage => prevImage === image ? null : image);
    };

    return (
        <div>
            <div className="flex items-center space-x-4 mb-4">
                <IoIosArrowForward size={32} />
                <div className="text-[24px] lg:text-[30px] font-brittany font-semibold">First Website</div>
            </div>
            <div className="relative">
                <div className="">
                    This web application was created with vanilla frameworks, HTML5, CSS, JavaScript and PHP using XAMPP (MySQL).
                </div>
                <div className="hidden lg:block">
                    <div className="mt-4 relative">
                        <img
                            src={Webstart1.src}
                            alt="Webstart 1"
                            className={`absolute rounded-lg lg:w-1/2 lg:h-auto lg:mr-5 h-full w-full z-${activeImageFirstWebsite === 'image1' ? '10 top-28 left-28' : '9 top-0 left-0'} hover:scale-105 duration-200 ease-in-out shadow-lg cursor-pointer`}
                            onClick={() => handleClickFirstWebsite('image1')}
                        />
                        <img
                            src={Webstart2.src}
                            alt="Webstart 2"
                            className={`absolute rounded-lg lg:w-1/2 lg:h-auto lg:mr-5 h-full w-full z-${activeImageFirstWebsite === 'image2' ? '10 top-28 left-28' : '9 top-0 left-0'} hover:scale-105 duration-200 ease-in-out shadow-lg cursor-pointer`}
                            onClick={() => handleClickFirstWebsite('image2')}
                        />
                    </div>
                </div>
                <div className="block lg:hidden">
                    <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 p-7">
                        <div className="w-full h-48">
                            <img
                                src={Webstart1.src}
                                alt="Game 1"
                                className="rounded-sm shadow-lg object-cover scale-[1.3] lg:scale-[1.1]"
                            />
                        </div>
                        <div className="w-full h-48">
                            <img
                                src={Webstart2.src}
                                alt="Game 2"
                                className="rounded-sm shadow-lg object-cover scale-[1.3] lg:scale-[1.1]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}