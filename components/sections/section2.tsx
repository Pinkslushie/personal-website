import { useSpring, animated, config } from 'react-spring';
import { useEffect, useState } from 'react';
import Webstart1 from '@/public/webstart1.png'
import Webstart2 from '@/public/webstart2.png'
import MatrixGIF from '@/public/matrix-1.gif'

export default function Section2() {
    const [isVisible, setIsVisible] = useState(false);

    const fadeIn_Card = useSpring({
        opacity: isVisible ? 1 : 0,
        from: { opacity: 0 },
        config: config.default,
        delay: 500,
    });

    const fadeIn_Images = useSpring({
        opacity: isVisible ? 1 : 0,
        from: { opacity: 0 },
        config: config.default,
        delay: 1000,
    });

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="min-h-screen">
            <div className="z-[999]">
                <p className="text-black text-3xl font-bold text-center pt-4">First Web Application</p>
                <div className="flex items-center justify-center">
                    <animated.div
                        style={fadeIn_Card}
                        className="bg-white p-8 rounded-md shadow-md flex flex-col items-center w-full m-10"
                    >
                        <animated.img
                            src={Webstart1.src}
                            alt="Webstart 1"
                            className="w-64 h-64 object-cover rounded-lg mb-4"
                            style={fadeIn_Images}
                        />
                        <animated.img
                            src={Webstart2.src}
                            alt="Webstart 2"
                            className="w-64 h-64 object-cover rounded-lg"
                            style={fadeIn_Images}
                        />
                    </animated.div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full">
                <img src={MatrixGIF.src} alt="Matrix" className="w-full" />
            </div>
        </div>
    )
}
