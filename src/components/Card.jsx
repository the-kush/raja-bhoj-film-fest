import React, {useState} from 'react'


const Card = (images) => {
    const [overlay, setOverlay] = useState(true)
    return (
        <div className="relative overflow-hidden h-[200px] min-w-[200px] bg-slate-400 rounded-xl flex justify-center items-center">
            { overlay && (
                <div className="absolute inset-0 z-10 flex justify-center items-center">
                    <div className="absolute bg-black pointer-events-auto opacity-50 h-full w-full">
                        <h1 className="bg-white font-semibold text-sm z-10 px-3 py-2 rounded-full flex items-center ga-[0.5ch] hover:opacity-75">
                            <span className="text-black">
                                Explore Now
                            </span>
                        </h1>
                    </div>
                </div>
            )}
            <img src={images} alt="Card" className="object-fill" />
        </div>
    )
}
export default Card
