import { MdChevronLeft, MdChevronRight} from "react-icons/md";


const MovieSlider = () => {
    const image = [
        {
            id: 1,
            src: "/img/movie-1.webp"
        },
        {
            id: 2,
            src: "/img/movie-2.jpg"
        },
        {
            id: 3,
            src: "/img/movie-3.jpeg"
        },
        {
            id: 4,
            src: "/img/movie-4.webp"
        },
        {
            id: 5,
            src: "/img/movie-5.jpg"
        },
        {
            id: 6,
            src: "/img/movie-7.jpg"
        }
    ]

    const slideLeft = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    };

    const slideRight = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    };

        return (
            <div className='relative flex items-center'>
                <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40}/>
                    <div
                        id='slider'
                        className='w-full h-full overflow-x-scroll overflow-hidden scroll whitespace-nowrap scroll-smooth scrollbar-hide img-fluid'
                    >
                        {image.map((item) => (
                            <img
                                className='min-w-[200px] h-[200px] inline-block p-2 cursor-pointer hover:scale-150 ease-in-out duration-300 rounded-xl'
                                src={item.src}
                                alt='/'
                            />
                        ))}
                    </div>
                <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40}/>
            </div>

        );

}
export default MovieSlider
