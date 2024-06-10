import { IoIosArrowForward } from "react-icons/io";

export default function HomeProject() {
    return (
        <div>
            <div className="flex items-center space-x-4 mb-4">
                <IoIosArrowForward size={32} />
                <div className="text-[24px] lg:text-[30px] font-brittany font-semibold">Home</div>
            </div>
            <div className="">
                Welcome! This section is where I showcase my past projects. Use the navigation pane on the left to navigate. I am still figuring out what to fill in the empty space below... Perhaps you can suggest?
            </div>
        </div>
    )
}