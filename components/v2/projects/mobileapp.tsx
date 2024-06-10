import { IoIosArrowForward } from "react-icons/io";
import Phone1 from '@/public/images/androidapp/phone1.png'
import Phone2 from '@/public/images/androidapp/phone2.png';
import Phone3 from '@/public/images/androidapp/phone3.png';
import Phone4 from '@/public/images/androidapp/phone4.png';
import Phone5 from '@/public/images/androidapp/phone5.png';
import Phone6 from '@/public/images/androidapp/phone6.png';

export default function MobileAppProject() {
    return (
        <div>
            <div className="flex items-center space-x-4 mb-4">
                <IoIosArrowForward size={32} />
                <div className="text-[24px] lg:text-[30px] font-brittany font-semibold">Mobile Application (Kotlin)</div>
            </div>
            <div className="relative">
                <div className="">
                    Cytron inspired (please don&apos;t sue me lol) platform that allows users to add items to cart, check-out with them and view their order status. This was created using Android Studio (Kotlin) with the use of Google Firebase as the database.
                </div>
                <div className="mt-4 grid grid-cols-2 lg:grid-cols-6 mb-10 lg:mb-0">
                    <div className="w-full h-48">
                        <img
                            src={Phone1.src}
                            alt="Game 1"
                            className="drop-shadow-2xl object-cover lg:scale-[1] lg:hover:scale-[1.05] transition-all ease-in-out duration-150"
                        />
                    </div>
                    <div className="w-full h-48">
                        <img
                            src={Phone2.src}
                            alt="Game 2"
                            className="drop-shadow-2xl object-cover lg:scale-[1] lg:hover:scale-[1.05] transition-all ease-in-out duration-150"
                        />
                    </div>
                    <div className="w-full h-48">
                        <img
                            src={Phone3.src}
                            alt="Game 3"
                            className="drop-shadow-2xl object-cover lg:scale-[1] lg:-mt-[10px] lg:hover:scale-[1.05] transition-all ease-in-out duration-150"
                        />
                    </div>
                    <div className="w-full h-48">
                        <img
                            src={Phone4.src}
                            alt="Game 4"
                            className="drop-shadow-2xl object-cover lg:scale-[1] lg:-mt-[10px] lg:hover:scale-[1.05] transition-all ease-in-out duration-150"
                        />
                    </div>
                    <div className="w-full h-48">
                        <img
                            src={Phone5.src}
                            alt="Game 4"
                            className="drop-shadow-2xl object-cover lg:scale-[1] lg:hover:scale-[1.05] transition-all ease-in-out duration-150"
                        />
                    </div>
                    <div className="w-full h-48">
                        <img
                            src={Phone6.src}
                            alt="Game 4"
                            className="drop-shadow-2xl object-cover lg:scale-[1] -mt-[8px] lg:-mt-[14px] lg:hover:scale-[1.05] transition-all ease-in-out duration-150"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}