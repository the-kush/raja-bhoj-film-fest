import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import {useEffect, useRef} from "react";
import image1 from "../../public/img/movie-1.webp";
import image2 from "../../public/img/movie-2.jpg";
import image3 from "../../public/img/movie-3.jpeg";
import image4 from "../../public/img/movie-4.webp";
import image5 from "../../public/img/movie-5.jpg";
import image6 from "../../public/img/movie-7.jpg";

const MovieSlider = () => {
    const images = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
    ]

    const galleryRef = useRef(null);

    useEffect(() => {
        const gallery = galleryRef.current;

        // Clone the images for seamless scrolling
        const scrollImages = [...images];

        let scrollSpeed = 0.5; // Adjust the speed here
        let scrollPosition = 0;

        const scrollGallery = () => {
            scrollPosition -= scrollSpeed;

            // Reset position when reaching the end
            if (Math.abs(scrollPosition) >= gallery.scrollWidth / 2) {
                scrollPosition = 0;
            }

            gallery.style.transform = `translateX(${scrollPosition}px)`;
            requestAnimationFrame(scrollGallery);
        };

        scrollGallery(); // Start the animation

        return () => cancelAnimationFrame(scrollGallery); // Cleanup on component unmount
    }, [images]);

    return (
        <div className="relative w-full">
            <div
                ref={galleryRef}
                className="flex w-max"
                style={{ whiteSpace: "nowrap" }}
            >
                {images.concat(images).map((image, index) => (
                    <div key={index} className="flex-shrink-0 w-1/2 md:w-1/4 px-2">
                        <img
                            src={image.src}
                            alt={image.alt || `Image ${index + 1}`}
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                ))}
            </div>
        </div>
    );

}
export default MovieSlider
