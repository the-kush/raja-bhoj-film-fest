import { useEffect, useRef, useState } from 'react'
import { useWindowScroll } from 'react-use';
import gsap from 'gsap';
import {TiThMenuOutline} from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";


const navItems = ["Home", "About", "Gallery", "Contact", "Register"];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    //const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    //const [isIndicatorActive, setIsIndicatorActive] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isNavVisible, setIsNavVisible] = useState(true);

    const navContainerRef = useRef(null);
    //const audioElementRef = useRef(null);

    const { y: currentScrollY } = useWindowScroll();

    useEffect(() => {
        if(currentScrollY === 0){
            setIsNavVisible(true);
            navContainerRef.current.classList.remove('floating-nav');
        }else if(currentScrollY > lastScrollY){
            setIsNavVisible(false);
            navContainerRef.current.classList.add('floating-nav');
        }else if(currentScrollY < lastScrollY){
            setIsNavVisible(true);
            navContainerRef.current.classList.add('floating-nav');
        }
        setLastScrollY(currentScrollY);
    }, [currentScrollY, lastScrollY]);

    useEffect(() => {
        gsap.to(navContainerRef.current, {
            y: isNavVisible ? 0 : -100,
            opacity: isNavVisible ? 1 : 0,
            duration: 0.2,
        })
    }, [isNavVisible])

    const handleToggle = () => {
        setIsOpen((prevState) => !prevState);
    }


    return (
        <div ref={navContainerRef} className='fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6'>
            <header className='absolute top-1/2 w-full -translate-y-1/2'>
                <nav className='flex size-full items-center justify-between p-4'>
                    <div className='flex items-center gap-7'>
                        <img src="/img/logo.png" alt="logo" className='w-10 size-16' />
                    </div>
                    <div className='flex h-full items-center'>
                        <div className='hidden md:block'>
                            {navItems.map((item, index) => (
                                <a key={index} href={`#${item.toLocaleLowerCase()}`} className='nav-hover-btn hover:text-yellow-300'>{item}</a>
                            ))}
                        </div>
                        <button
                            className="ml-10 flex items-center text-2xl text-white sm:hidden"
                            onClick={handleToggle}>
                            {isOpen ? <RxCross2 /> : <TiThMenuOutline />}
                        </button>
                    </div>
                </nav>
                {isOpen && (
                    <div className={`absolute left-0 right-0 bg-black-200 backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden z-20 mx-auto sm:hidden block ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                        <ul className="flex flex-col items-center gap-4 sm:flex-row md:gap-6 relative z-20">
                            {navItems.map((item, index) => (
                                <li className="text-neutral-400 hover:text-white font-general max-sm:hover:bg-black-500 max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5 hover:bg-gray-600 hover:text-2xl">
                                    <a href={`#${item.toLocaleLowerCase()}`} key={index} className="text-lg md:text-base transition-colors ">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </header>
        </div>
    )
}

export default Navbar

