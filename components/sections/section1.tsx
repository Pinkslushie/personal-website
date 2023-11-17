import BackgroundPart1 from '@/public/background-blank.png'
import PersonalImage from '@/public/personal-image-1.jpg'
import { useSpring, animated, config } from 'react-spring';
import { useEffect, useState } from 'react';
import MatrixGIF from '@/public/matrix-1.gif'

export default function Section1() {
    const [isVisible, setIsVisible] = useState(false);

    const fadeIn_Image = useSpring({
        opacity: isVisible ? 1 : 0,
        from: { opacity: 0 },
        config: config.default,
        delay: 500,
    });

    const fadeIn_TextTop1 = useSpring({
        opacity: isVisible ? 1 : 0,
        from: { opacity: 0 },
        config: config.default,
        delay: 500,
    });

    const fadeIn_TextTop2 = useSpring({
        opacity: isVisible ? 1 : 0,
        from: { opacity: 0 },
        config: config.default,
        delay: 1000,
    });

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="min-h-screen flex relative overflow-hidden">
            <div
                style={{
                    backgroundImage: `url(${BackgroundPart1.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100vw',
                }}
                className="min-h-screen text-white z-10"
            >
                <div className="flex items-center m-28">
                    <animated.img
                        src={PersonalImage.src}
                        alt="Personal"
                        className="rounded-full w-64 h-64 object-cover"
                        style={fadeIn_Image}
                    />
                    <div className="ml-8 w-5/12 text-justify">
                        <animated.p className="text-[30px]" style={fadeIn_TextTop1}>
                            Hello!
                        </animated.p>
                        <br />
                        <animated.p className="text-[20px]" style={fadeIn_TextTop2}>
                            My name&apos;s Jaden.
                        </animated.p>
                        <animated.p className="text-[20px]" style={fadeIn_TextTop2}>
                            I am presently a dedicated student pursuing Computer Science at Swinburne University with a primary focus on Software Development and a minor specialization in Big Data Analytics
                        </animated.p>
                    </div>
                </div>
                <div className="ml-36 w-6/12 text-justify bg-red-600 p-5 rounded-lg shadow-lg">
                    <animated.p className="text-[30px]" style={fadeIn_TextTop1}>
                        About Me
                    </animated.p>
                    <br />
                    <animated.p className="text-[20px]" style={fadeIn_TextTop2}>
                        I have an unwavering interest in programming, specifically in the field of game development as I revolve around games since a very young age. Furthermore, I am a fast-learner that is able to learn new things (that interests me) at a fast rate.
                        <br /><br />
                        Have a look below to see what I have created so far (not that fascinating but eh)!
                    </animated.p>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full">
                <img src={MatrixGIF.src} alt="Matrix" className="w-full" />
            </div>
        </div>
    )
}
