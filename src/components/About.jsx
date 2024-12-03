import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import AnimatedTitle from './AnimatedTitle';
import Button from "./Button.jsx";
import { TiLocationArrow} from "react-icons/ti";


gsap.registerPlugin(ScrollTrigger);

const About = () => {
    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: '#clip',
                start: 'center center',
                end: '+=800 center',
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            }
        })
        clipAnimation.to('.mask-clip-path', {
            width: '100vw',
            height: '100vh',
            borderRadius: 0,
        })
    })

    return (
        <div id='about' className='min-h-screen w-screen bg-white'>
            <div className='relative mb-8 mt-36 flex flex-col items-center gap-5'>
                <h2 className='font-general text-sm md:text-[10px] uppercase'>Welcome to RBFF</h2>
                <AnimatedTitle title="INSPIRED BY NONE OTHER THAN THE LEGENDARY <br /> RAJA BHOJ PARMAR" containerClass="mt-5 !text-black text-center"/>
                <p className="text-center">Raja Bhoj Film Festival is a celebration of diverse cultures and traditions through the art of filmmaking.<br/> Join us in capturing the essence of ancient Hindu traditions and bringing them to the big screen.
                </p>
                <div className='about-subtext'>
                    <p>JOIN THE BIGGEST ART REVIVAL OF CENTRAL INDIA WITH THE MAGIC OF CINEMA.</p>
                    <Button
                        id="learn-more"
                        title="Learn More"
                        rightIcon={<TiLocationArrow size={16}/>}
                        containerClass="!bg-black text-white"
                    />
                </div>
            </div>
            <div className='h-dvh w-screen' id='clip'>
                <div className='mask-clip-path about-image'>
                    <img
                        src="/img/about.webp"
                        alt="Background"
                        className='absolute left-0 top-0 size-full object-cover'
                    />
                </div>
            </div>
        </div>
    )
}

export default About
