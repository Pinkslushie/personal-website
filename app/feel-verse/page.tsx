"use client";

export default function Home() {
    return (
        <div>
            <div className="min-h-screen flex flex-col justify-between">
                <div className="bg-gradient-to-b from-blue-500 to-blue-400 text-white h-[250px] flex items-center justify-center">
                    <h1 className="text-3xl">Feel Verse</h1>
                </div>
                <div className="bg-slate-100 flex-grow flex items-center justify-center text-black">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <p className="text-lg">
                            Hello! I&apos;m currently working on a mobile application that can give you verses based on what you&apos;re feeling. <br />
                            I don&apos;t plan to monetize this so please use it as you wish when it is released!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
