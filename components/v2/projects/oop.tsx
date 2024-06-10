import { IoIosArrowForward } from "react-icons/io";
import Game1 from '@/public/images/farmingsimulator/introduction.gif'
import Game2 from '@/public/images/farmingsimulator/planting.gif'
import Game3 from '@/public/images/farmingsimulator/shop.gif'
import Game4 from '@/public/images/farmingsimulator/planting_rest.gif'

export default function OOPProject() {
    return (
        <div>
            <div className="flex items-center space-x-4 mb-4">
                <IoIosArrowForward size={32} />
                <div className="text-[24px] lg:text-[30px] font-brittany font-semibold">
                    Object-Oriented Programming Custom Program
                </div>
            </div>
            <div className="relative">
                <div className="">
                    This game was created as part of my Object-Oriented Programming task, built using C# and SplashKit library. The game mechanics were inspired by Stardew Valley and Harvest Moon.
                </div>
                <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 lg:gap-y-16">
                    <div className="w-full h-48">
                        <img
                            src={Game1.src}
                            alt="Game 1"
                            className="rounded-sm shadow-lg object-cover lg:scale-[0.8] lg:hover:scale-[0.85] transition-all ease-in-out duration-200"
                        />
                    </div>
                    <div className="w-full h-48">
                        <img
                            src={Game2.src}
                            alt="Game 2"
                            className="rounded-sm shadow-lg object-cover lg:scale-[0.8] lg:hover:scale-[0.85] transition-all ease-in-out duration-200"
                        />
                    </div>
                    <div className="w-full h-48">
                        <img
                            src={Game3.src}
                            alt="Game 3"
                            className="rounded-sm shadow-lg object-cover lg:scale-[0.8] lg:hover:scale-[0.85] transition-all ease-in-out duration-200"
                        />
                    </div>
                    <div className="w-full h-48">
                        <img
                            src={Game4.src}
                            alt="Game 4"
                            className="rounded-sm shadow-lg object-cover lg:scale-[0.8] lg:hover:scale-[0.85] transition-all ease-in-out duration-200"
                        />
                    </div>
                </div>
            </div>

            {/* <img
                    src={Game1.src}
                    alt="Webstart 1"
                    className={`absolute rounded-lg lg:w-1/2 lg:h-auto lg:mr-5 h-full w-full z-${activeGameOOP === 'game1' ? '10 top-24 left-24' : '6 top-0 left-0'} hover:scale-105 duration-200 ease-in-out shadow-lg cursor-pointer`}
                    onClick={() => setActiveGameOOP('game1')}
                />
                <img
                    src={Game2.src}
                    alt="Webstart 2"
                    className={`absolute rounded-lg lg:w-1/2 lg:h-auto lg:mr-5 h-full w-full z-${activeGameOOP === 'game2' ? '10 top-24 left-24' : '7 top-8 left-8'} hover:scale-105 duration-200 ease-in-out shadow-lg cursor-pointer`}
                    onClick={() => setActiveGameOOP('game2')}
                />
                <img
                    src={Game3.src}
                    alt="Webstart 3"
                    className={`absolute rounded-lg lg:w-1/2 lg:h-auto lg:mr-5 h-full w-full z-${activeGameOOP === 'game3' ? '10 top-24 left-24' : '8 top-16 left-16'} hover:scale-105 duration-200 ease-in-out shadow-lg cursor-pointer`}
                    onClick={() => setActiveGameOOP('game3')}
                />
                <img
                    src={Game4.src}
                    alt="Webstart 4"
                    className={`absolute rounded-lg lg:w-1/2 lg:h-auto lg:mr-5 h-full w-full z-${activeGameOOP === 'game4' ? '10 top-24 left-24' : '9 top-0 left-0'} hover:scale-105 duration-200 ease-in-out shadow-lg cursor-pointer`}
                    onClick={() => setActiveGameOOP('game4')}
                /> */}
        </div>
    )
}