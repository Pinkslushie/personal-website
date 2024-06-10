import { IoIosArrowForward } from "react-icons/io";
import Console1 from '@/public/images/consolelinegame/console1.gif'
import Console2 from '@/public/images/consolelinegame/console2.gif'

export default function DSAProject() {
    return (
        <div>
            <div className="flex items-center space-x-4 mb-4">
                <IoIosArrowForward size={32} />
                <div className="text-[24px] lg:text-[30px] font-brittany font-semibold">Data Structures and Algorithms</div>
            </div>
            <div className="relative">
                <div className="">
                    Paradis Valley, a CLI game was made for one of my units, Data Structures and Patterns, using C++. The game itself was fun to make, exploring all the various Data Structures.
                    <br /><br />
                    The game consisted of the following data structures: Doubly Linked List, Singly Linked List, Queue, Stack, and Iterators for 2D Array.
                </div>
                <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 p-7">
                    <div className="w-full h-48">
                        <img
                            src={Console1.src}
                            alt="Game 1"
                            className="rounded-sm shadow-lg object-cover scale-[1.3] lg:scale-[1.1]"
                        />
                    </div>
                    <div className="w-full h-48">
                        <img
                            src={Console2.src}
                            alt="Game 2"
                            className="rounded-sm shadow-lg object-cover scale-[1.3] lg:scale-[1.1]"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}