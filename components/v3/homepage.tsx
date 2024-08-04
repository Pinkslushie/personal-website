import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import Spinning from "@/public/images/v3/test.gif"

export default function HomepageV3() {
    return (
        <div
            className="relative top-0 left-0 w-full h-full"
            style={{
                backgroundColor: '#A9C9FF',
                backgroundImage: 'linear-gradient(225deg, #A9C9FF 0%, #FFBBEC 100%)',
                minHeight: '100vh' // Optional: Ensures the div covers the full height of the viewport
            }}
        >
            <div className="flex items-center justify-center w-full h-full">
                <img
                    src={Spinning.src}
                    alt="Spinning"
                    className="drop-shadow-2xl object-cover lg:scale-[1] mt-20 lg:mt-36"
                />
            </div>
            <div className="absolute bottom-10 lg:bottom-0 left-0 p-10 lg:p-20">
                <div className="text-[24px] lg:text-[50px] text-black">
                    <span>A studio named Boneeto...</span>
                    <span>Flakes...</span>
                    <br />
                    <span>maybe...</span>
                </div>
                <div>
                    <a href="/about">
                        <div className="bg-black text-white px-4 py-2 w-3/4 lg:w-2/12 hover:bg-slate-800 hover:scale-105 duration-300 transition-all ease-in-out shadow-lg flex items-center justify-center space-x-2">
                            <span>Read More</span>
                            <LiaLongArrowAltRightSolid size={24} />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}