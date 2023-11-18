"use client";

import Background from '@/public/images/juyeon/background.gif'

export default function Home() {
    return (
        <div className="relative min-h-screen">
            {/* Background Image */}
            <div
                className="min-h-screen flex items-center justify-center overflow-hidden"
                style={{
                    backgroundImage: `url(${Background.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >

                <div className="w-full">
                    <div className="flex items-center justify-center flex-row">
                        <div className="bg-white-opacity-75 p-8 rounded-md shadow-md items-center m-5">
                            <div className="text-black text-3xl font-bold text-center pb-4 pt-4">
                                <p className="text-[40px] font-greatvibes">
                                    LF/ NFT
                                </p>
                                <hr className="w-full border-t-2 border-gray-300 mt-2" />
                                <ul className="text-left text-[20px] font-normal">
                                    <li> &#x2022; ENHYPEN - PRIO DARK BLOOD [DB] ERA, DIMENSION DILLEMA [DD] AND MANIFESTO: DAY 1 [MD]. </li>
                                    <li> &#x2022; NO LONGER LOOKING FOR &TEAM UNDER THE SKIN [UND] ERA. </li>
                                    <li> &#x2022; &TEAM V2 </li>
                                </ul>
                            </div>
                        </div>
                        <div className="bg-white-opacity-75 p-8 rounded-md shadow-md items-center m-5">
                            <div className="text-black text-3xl font-bold text-center pb-4 pt-4">
                                <p className="text-[40px] font-greatvibes">
                                    Juyeon Trades
                                </p>
                                <hr className="w-full border-t-2 border-gray-300 mt-2" />
                                <p className="text-left text-[20px]">All others are UFT for above. Strictly NOT selling at all (due to inaccurate estimation of actual worth of your offered card and my card that you want).</p>
                                <br />
                                <p className="text-left text-[20px] uppercase underline">1 Star:</p>
                                <ul className="text-left text-[20px] font-normal">
                                    <li> &#x2022; Issue 1 - 100: Prefers ±10 issue difference. </li>
                                    <li> &#x2022; Issue 101 - 500: Prefers ±100 issue difference. </li>
                                    <li> &#x2022; Issue 501 - 1000: Prefers ±250 issue difference. </li>
                                    <li> &#x2022; Issue 1001 and above: Any issues even 1001 for 5000.</li>
                                </ul>
                                <p className="text-left text-[20px] uppercase underline">2 Stars:</p>
                                <ul className="text-left text-[20px] font-normal">
                                    <li> &#x2022; 10 of the 1 stars are issue 1001 and above (for your 2 star). </li>
                                    <li> &#x2022; 1 of my 2 star is issue 101 and above (for your 1 stars). </li>
                                </ul>
                                <p className="text-left text-[20px] uppercase underline">3 Stars:</p>
                                <ul className="text-left text-[20px] font-normal">
                                    <li> &#x2022; Issue 1 - 10: Prefers ±1 issue difference. </li>
                                    <li> &#x2022; Issue 11 - 50: Prefers ±5 issue difference. </li>
                                </ul>
                                <p className="text-left text-[20px] uppercase underline">Event Cards:</p>
                                <ul className="text-left text-[20px] font-normal">
                                    <li> &#x2022; Prefers to swap event cards within the same event and following the conditions depending on the stars above. </li>
                                </ul>
                                <br />
                                <p className="text-left text-[20px]">Thanks for taking your time to read this!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
