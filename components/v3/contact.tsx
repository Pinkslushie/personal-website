"use client";

import Banner from "@/public/images/v3/banner.png";
import Image from 'next/image';
import toast from "react-hot-toast";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useState } from 'react';
import RabbitSleeping from '@/public/images/v2/rabbit_sleeping.gif';

export default function ContactComponentV3() {
    const [userName, setUserName] = useState('');
    const [userMessage, setUserMessage] = useState('');
    const [userContact, setUserContact] = useState('');
    const [userConsented, setUserConsented] = useState(false);
    const supabase = createClientComponentClient();
    const [submittedSuccess, setSubmittedSuccess] = useState<boolean>(false);

    const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserMessage(e.target.value);
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    };

    const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserContact(e.target.value);
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserConsented(e.target.checked);
    };

    const handleSubmit = async () => {
        if (!userName) {
            toast.error("I need to know your name please :( What if you're trying to kill me?")
            return;
        }

        if (!userContact) {
            toast.error("I want to know who's sending me this message please :(")
            return;
        }

        if (!userMessage) {
            toast.error("I need to know what you are trying to tell me...")
            return;
        }

        const { data, error } = await supabase.from('messages').insert([
            {
                messageName: userName,
                messageContact: userContact,
                messageText: userMessage,
                isConsented: userConsented
            },
        ]);

        if (error) {
            toast.error("Sorry, I am unable to receive your message now. Please let me know.")
        } else {
            toast.success("Submitted successfully!");
            setUserMessage('');
            setUserContact('');
            setUserName('');
            setSubmittedSuccess(!submittedSuccess);
        }
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
                        <p className="text-lg font-bold">Contact</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="w-full lg:w-8/12">
                    <div className="m-10 lg:m-20 text-black lg:flex">
                        <div className="w-full lg:w-1/2 text-black">
                            <div>
                                <div className="text-black text-[26px]">
                                    Reach out to me!
                                </div>
                                <div>
                                    Interested in me *wink*? Reach out to me!
                                    <br />
                                    *ppssstt, my socials are in the footer ;D
                                </div>
                            </div>
                        </div>
                        {!submittedSuccess ? (
                            <div className="w-full lg:w-1/2 text-black">
                                <div>
                                    <form className="mt-5 mb-5 space-y-10">
                                        <div className="relative">
                                            <input
                                                required
                                                type="text"
                                                name="text"
                                                autoComplete="off"
                                                className="w-full peer border border-gray-400 shadow-xl bg-transparent p-4 text-lg text-black transition duration-150 ease-in-out focus:outline-none focus:border-green-800"
                                                value={userName}
                                                onChange={handleNameChange}
                                            />
                                            <label className="absolute left-4 top-2 text-gray-300 transition duration-150 ease-in-out transform peer-focus:-translate-y-1/2 peer-focus:scale-75 peer-valid:-translate-y-1/2 peer-valid:scale-75 peer-valid:top-0 peer-valid:bg-black peer-valid:p-1 peer-valid:rounded-sm peer-focus:bg-black peer-focus:top-0 px-1 peer-focus:p-1 peer-focus:rounded-sm peer-focus:text-white">Name</label>
                                        </div>
                                        <div className="relative">
                                            <input
                                                required
                                                type="text"
                                                name="text"
                                                autoComplete="off"
                                                className="w-full peer border border-gray-400 shadow-xl bg-transparent p-4 text-lg text-black transition duration-150 ease-in-out focus:outline-none focus:border-green-800"
                                                value={userContact}
                                                onChange={handleContactChange}
                                            />
                                            <label className="absolute left-4 top-2 text-gray-300 transition duration-150 ease-in-out transform peer-focus:-translate-y-1/2 peer-focus:scale-75 peer-valid:-translate-y-1/2 peer-valid:scale-75 peer-valid:top-0 peer-valid:bg-black peer-valid:p-1 peer-valid:rounded-sm peer-focus:bg-black peer-focus:top-0 px-1 peer-focus:p-1 peer-focus:rounded-sm peer-focus:text-white">Email/ Phone Number</label>
                                        </div>
                                        <div className="relative">
                                            <input
                                                required
                                                type="text"
                                                name="text"
                                                autoComplete="off"
                                                className="w-full peer border border-gray-400 shadow-xl bg-transparent p-4 text-lg text-black transition duration-150 ease-in-out focus:outline-none focus:border-green-800"
                                                value={userMessage}
                                                onChange={handleMessageChange}
                                            />
                                            <label className="absolute left-4 top-2 text-gray-300 transition duration-150 ease-in-out transform peer-focus:-translate-y-1/2 peer-focus:scale-75 peer-valid:-translate-y-1/2 peer-valid:scale-75 peer-valid:top-0 peer-valid:bg-black peer-valid:p-1 peer-valid:rounded-sm peer-focus:bg-black peer-focus:top-0 px-1 peer-focus:p-1 peer-focus:rounded-sm peer-focus:text-white">Message</label>
                                        </div>
                                        <label
                                            className="relative flex cursor-pointer items-center gap-[1em]"
                                            id="star"
                                        >
                                            <input className="peer appearance-none" id="star" name="star" type="checkbox" onChange={handleCheckboxChange} />
                                            <span
                                                className="absolute left-4 top-1/2 h-[1em] w-[1em] -translate-x-full -translate-y-1/2 rounded-[0.25em] border-[1px] border-black"
                                            >
                                            </span>
                                            <svg
                                                className="absolute left-4 top-1/2 h-[1em] w-[1em] -translate-x-full -translate-y-1/2 duration-500 ease-out [stroke-dasharray:100] [stroke-dashoffset:100] peer-checked:[stroke-dashoffset:0]"
                                                viewBox="0 0 38 37"
                                                fill="none"
                                                height="37"
                                                width="38"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M6.617 36.785c-.676-5.093 4.49-10.776 6.318-14.952 1.887-4.31 4.315-10.701 6.055-15.506C20.343 2.59 20.456.693 20.57.789c3.262 2.744 1.697 10.518 2.106 14.675 1.926 19.575 4.62 12.875-7.635 4.43C12.194 17.933 2.911 12.1 1.351 8.82c-1.177-2.477 5.266 0 7.898 0 2.575 0 27.078-1.544 27.907-1.108.222.117-.312.422-.526.554-1.922 1.178-3.489 1.57-5.266 3.046-3.855 3.201-8.602 6.002-12.11 9.691-4.018 4.225-5.388 10.245-11.321 10.245"
                                                    strokeWidth="1.5px"
                                                    pathLength="100"
                                                    stroke="#000"
                                                ></path>
                                            </svg>
                                            <p className="text-[1em] [user-select:none] ml-2 lg:ml-4">I am not randomly submitting for fun.</p>
                                        </label>
                                    </form>
                                </div>
                                <div className="flex items-end justify-end">
                                    <button
                                        onClick={handleSubmit}
                                        className="px-8 py-3 text-xs uppercase tracking-wider font-medium text-black bg-white border-none rounded-full shadow-md transition-all duration-300 ease cursor-pointer focus:outline-none hover:bg-green-500 hover:shadow-lg hover:text-white hover:translate-y-[-7px] active:translate-y-[-1px]"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="w-full lg:w-1/2">
                                <div className="flex items-center justify-center flex-col">
                                    <img src={RabbitSleeping.src} alt="Rabbit Sleeping" className="mx-auto lg:mt-4 lg:w-48 lg:h-48 w-40 h-40" />
                                    <div className="text-[30px] lg:text-[36px] text-black">Thank you!</div>
                                    <div className="text-[10px] lg:text-[16px] text-black">I have received your message!</div>
                                    <button
                                        onClick={() => setSubmittedSuccess(!submittedSuccess)}
                                        className="px-8 py-3 mt-5 text-xs uppercase tracking-wider font-medium text-black bg-white border-none rounded-full shadow-md transition-all duration-300 ease cursor-pointer focus:outline-none hover:bg-green-500 hover:shadow-lg hover:text-white hover:translate-y-[-7px] active:translate-y-[-1px]"
                                    >
                                        Return
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}