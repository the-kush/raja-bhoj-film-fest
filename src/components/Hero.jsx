import { useEffect, useRef, useState } from 'react'
//import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
    const [currentIndex, setCurrentIndex] =  useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState(0);

    const totalVideo = 6;
    const nextVideoRef = useRef(null);

    const handleVideoLoad = () => {
        setLoadedVideos((prev) => prev + 1);
    }

    const upcomingVideoIndex = (currentIndex % totalVideo) + 1;
    const handleMiniVdClick = () => {
        setHasClicked(true);

        setCurrentIndex(upcomingVideoIndex);
    }

    useEffect(() => {
        if(loadedVideos === totalVideo - 1){
            setIsLoading(false)
        }
    }, [loadedVideos])

    useGSAP(() => {
        if(hasClicked){
            gsap.set('#next-video', {
                transformOrigin: 'center center',
                scale: 1,
                width: '100%',
                height: '100%',
                duration: 1,
                ease: 'power1.inOut',
                onStart: () => nextVideoRef.current.play(),
            })
            gsap.from('#current-video', {
                transformOrigin: 'center center',
                scale: 0,
                duration: 1.5,
                ease: 'power1.inOut'
            })
        }
    }, {dependencies: [currentIndex], revertOnUpdate: true})

    useGSAP(() => {
        gsap.set('#video-frame', {
            clipPath: 'polygon(7% 0%, 72% 0%, 91% 100%, 0% 100%)',
            borderRadius: '0 0 30% 11%'
        })

        gsap.from('#video-frame', {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            borderRadius: '0 0 0 0',
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '#video-frame',
                start: 'center center',
                end: 'bottom center',
                scrub: true,
            }
        })
    })
    const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

    return (
        <div id="home" className='relative h-dvh w-screen overflow-x-hidden'>
            <div id='video-frame' className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75'>
                <div>
                    <div className='mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg'>
                        <div onClick={handleMiniVdClick} className='origin-center scale-150 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100'>
                            <video loop ref={nextVideoRef} src={getVideoSrc(upcomingVideoIndex)} muted id='current-video' className='size-64 origin-center scale-150 object-cover object-center' onLoadedData={handleVideoLoad}/>
                        </div>
                    </div>
                    <video ref={nextVideoRef} src={getVideoSrc(currentIndex)} className='absolute-center invisible absolute z-20 size-64 object-cover object-center'/>
                    <video src={getVideoSrc(currentIndex === totalVideo - 1 ? 1 : currentIndex)} autoPlay
                           loop muted className='absolute left-0 top-0 size-full object-cover object-center' onLoadedData={handleVideoLoad}/>
                </div>
                <h1 className='special-font hero-heading absolute bottom-0 right-0 text-blue-75'>Raja bhoj films</h1>
                <div className='absolute left-0 top-7 z-40 size-full pl-5 sm:pl-0'>
                    <div className='mt-24 px-5 sm:px-10'>
                        <h4 className='special-font hero-heading absolute !text-5xl top-12 left-10 text-blue-75'>Film Festival</h4>
                        <button
                            id='watch-trailer'
                            title='Register Now'
                            className='group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 text-black bg-yellow-300 flex-center gap-1'>
                            <TiLocationArrow />

                            <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
        Register Now
        </div>
        <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
        </div>
      </span>
                        </button>
                    </div>
                </div>
            </div>
            <h1 className='special-font hero-heading absolute bottom-0 right-0 text-white'>raja bhoj films</h1>
        </div>
    )
}

export default Hero
