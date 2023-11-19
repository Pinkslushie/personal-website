import TopBanner from '@/public/main-banner.jpg'
import Link from 'next/link';

const NavigationBarDesktop = () => {

    return (
        <nav className="fixed top-0 left-0 right-0 z-[999] text-xl hidden">
            <div className="flex justify-end">
                <Link href="/" legacyBehavior={true}>
                    <a className="relative text-white py-4 px-6 uppercase transition duration-300 ease-in-out overflow-hidden group hover:text-gray-400">
                        Home
                        <span className="absolute inset-x-0 bottom-0 bg-red-300 h-1 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                    </a>
                </Link>
                <Link href="/tutorial" legacyBehavior={true}>
                    <a className="relative text-white py-4 px-6 uppercase transition duration-300 ease-in-out overflow-hidden group hover:text-gray-400">
                        Tutorial
                        <span className="absolute inset-x-0 bottom-0 bg-red-300 h-1 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                    </a>
                </Link>
            </div>
        </nav>
    )
}

export default NavigationBarDesktop;