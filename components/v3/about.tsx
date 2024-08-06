import Banner from "@/public/images/v3/banner.png";
import Image from 'next/image';
import PersonalImage from "@/public/images/v3/personal.png";
import LogoBlack from "@/public/images/v3/logoblack.png";

const details = [
    {
        "title": "Full Stack Development",
        "description": `
            I specialize in bringing your dream designs to life as functional and aesthetically pleasing websites. I have the expertise to develop back-end systems as well.
            <br/><br/>
            Experience: NextJS, TailwindCSS, VueJS, AngularJS, Bootstrap, PHP, ASP .NET Core.
        `
    },
    {
        "title": "Mobile Development",
        "description": `
            I have experience in designing a mobile application. I have designed somewhat an e-Commerce mobile application for one of my units which you can access it here.
            <br/><br/>
            Experience: Kotlin
        `
    },
    {
        "title": "Cloud Architect",
        "description": `
            I have experience in deploying web applications in Amazon Web Services (AWS). From utilizing Elastic Load Balancers (ELB) to CloudFront Distribution, I can provide you just enough to maintain your own cloud! 
            <br/><br/>
            I have slight experience in Digital Ocean, with deployment through a Droplet.
        `
    },
    {
        "title": "Data Analyst",
        "description": `
            I have experience in Business Intelligence, utilizing tools such as Tableau and PowerBI to create powerful visualizations.
            <br/><br/>
            Additionally, I excel in designing robust RDBMS systems, guaranteeing data integrity.
            <br/><br/>
            Experience: PostgreSQL, SQL, Business Intelligence using Tableau, PowerBI
        `
    },
    {
        "title": "IoT Development",
        "description": `
            I've developed IoT systems using Raspberry Pi (RPi) as the microcomputer and Arduino as the microcontroller. I utilize MQTT for efficient message queuing between devices and Flask for user-friendly front-end interfaces in IoT systems.
            <br/><br/>
            Experience: Amazon Web Services (AWS), Flask, Nginx, Arduino Sketch
        `
    },
    {
        "title": "AI/ Machine Learning",
        "description": `
            Utilizing <a href="https://github.com/tensorflow/models/blob/master/research/object_detection/g3doc/tf2_detection_zoo.md" target="_blank" rel="noopener noreferrer" style="color: #3b82f6; transition: color 0.3s ease-in-out; text-decoration: none;" onMouseOver="this.style.color='#1d4ed8'" onMouseOut="this.style.color='#3b82f6'">TensorFlow 2 Zoo Models</a> (transfer learning) such as EfficientDet to train a model for a specific use case. From data pre-processing up to testing set validation with various metrics, mainly Mean Average Precision (mAP).
        `
    }
]

export default function AboutComponentV3() {
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
                        <p className="text-lg font-bold">About</p>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center">
                <div className="w-full lg:w-8/12">
                    <div className="m-10 lg:m-20 space-y-10 text-black">
                        <div className="font-bold text-[20px]">
                            Who are we... or more like... who am I?
                        </div>

                        <div className="flex lg:flex-row flex-col">
                            <div className="w-full lg:w-4/12">
                                <Image
                                    src={PersonalImage}
                                    alt="Personal Image"
                                    objectFit="cover"
                                    className="w-72 h-72 shadow-lg rounded-md"
                                />
                            </div>
                            <div className="w-full lg:w-8/12 mt-5 lg:mt-0 space-y-4">
                                <div className="font-bold text-[18px]">
                                    Meet Jaden!
                                </div>
                                <div className="italic text-justify">
                                    Boneeto Studios&apos; Supreme Overlord and Grand Master of Everything,
                                    Founder, CEO, Chief Coffee Maker, Head of Operations, Marketing, and Office Decor,
                                    Senior Vice President of All Things Necessary, Chief of All Departments (and Pet Care),
                                    Lead Designer, Developer, and Desk Organizer, President of Meetings with Yourself,
                                    Principal Account Manager for the Office Plant, and Chief Executive of Solo Projects.
                                </div>
                                <div className="text-justify">
                                    He has an unwavering interest in programming, particularly in game development,
                                    stemming from his early fascination with games. Additionally, he is a fast learner,
                                    quickly mastering new skills that spark his interest. He holds a Bachelor&apos;s in Computer Science,
                                    majoring in Software Development and minoring in Big Data Analytics.
                                </div>
                            </div>
                        </div>


                        <div className="flex lg:flex-row flex-col">
                            <div className="w-full lg:w-4/12">
                                <Image
                                    src={LogoBlack}
                                    alt="Personal Image"
                                    objectFit="cover"
                                    className="w-72 h-72 shadow-lg rounded-md"
                                />
                            </div>
                            <div className="w-full lg:w-8/12 mt-5 lg:mt-0 space-y-4">
                                <div className="font-bold text-[18px]">
                                    Why Boneeto?
                                </div>
                                <div className="text-justify space-y-4">
                                    <div>
                                        Well, it all started when we were brainstorming names and someone accidentally
                                        misspelled &apos;bonito&apos;, which means &apos;beautiful&apos; in Spanish. Instead of correcting it,
                                        we thought, &apos;Hey, Boneeto sounds way cooler!&apos; It&apos;s like saying &apos;beautiful&apos; with a little extra
                                        flair, like a superhero name for a studio that&apos;s here to make awesome stuff. So, Boneeto Studios was born,
                                        because who wouldn&apos;t want their work to have a touch of superhero charm?
                                    </div>
                                    <div className="text-[8px] italic">
                                        - ChatGPT probably...
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="font-bold text-[20px]">
                            What can I do?
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                            {details.map((card, index) => (
                                <div key={index} className="bg-white p-5 rounded-md shadow-lg">
                                    <h3 className="text-[20px] font-semibold mb-2 text-center">{card.title}</h3>
                                    <p className="text-justify" dangerouslySetInnerHTML={{ __html: card.description }} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}