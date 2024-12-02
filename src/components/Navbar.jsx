import { useEffect, useRef, useState } from 'react'
import { useWindowScroll } from 'react-use';
import gsap from 'gsap';
import {TiThMenuOutline} from "react-icons/ti";

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
    //
    // const toggleAudioIndicator = () => {
    //     isAudioPlaying((prev) => !prev);
    //
    //     setIsIndicatorActive((prev) => !prev);
    // // }
    // useEffect(() => {
    //     if(isAudioPlaying){
    //         audioElementRef.current.play();
    //     }else {
    //         audioElementRef.current.pause();
    //     }
    // }, [isAudioPlaying])

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
        setIsOpen(!isOpen);
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
                            <TiThMenuOutline/>
                        </button>
                    </div>
                </nav>
                {isOpen && (
                    <div className="justify-center items-center px-2 py-2 md:py-4 max-w-7xl mx-auto bg-black rounded-l shadow-xl">
                        {navItems.map((item, index) => (
                            <a key={index}
                            href={`#${item.toLocaleLowerCase()}`}
                            onClick={() => setIsOpen(false)}
                                className="text-white flex flex-col relative items-center nav-hover-btn hover:text-yellow-300 !text-2xl p-0.5"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                )}
            </header>
        </div>
    )
}

export default Navbar

