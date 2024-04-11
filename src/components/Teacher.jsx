import { useState } from "react"
import { HiChevronRight } from "react-icons/hi";
import { HiChevronLeft } from "react-icons/hi";

import claseUno from '../assets/claseUno.jpg'
import claseDos from '../assets/claseDos.jpg'
import claseTres from '../assets/claseTres.jpg'

const images = {
    claseUno: claseUno,
    claseDos: claseDos,
    claseTres: claseTres
};

export default function Teacher() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [animationDirection, setAnimationDirection] = useState(null);


    const nextImage = () => {
        setAnimationDirection('next');
        setCurrentImageIndex((prevIndex) =>
            prevIndex === Object.keys(images).length - 1 ? 0 : prevIndex + 1
        );
    };

    const previousImage = () => {
        setAnimationDirection('prev');
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? Object.keys(images).length - 1 : prevIndex - 1
        );
    };

    const handleAnimationEnd = () => {
        setAnimationDirection(null);
    };

    return (
        <>
            <div id='maestra' className=" text-white bg-[#C6375F] w-full p-7 mx-auto flex justify-center font-bold text-3xl md:text-5xl font-sanchez">Maestra</div>
            <div className="h-screen">
                <div className=" pt-5 pb-5 text-center">
                    <p>Mis clases:</p>
                </div>
                <div className="p-12 flex justify-center gap-5 items-center">
                    <button onClick={previousImage} className="rounded-full bg-gray-200 p-2 w-10 h-10 flex items-center justify-center">
                        <HiChevronLeft size={20} />
                    </button>
                    <div className={`w-[500px] h-[500px] sm:h-[700px] md:h-[700px] lg:h-[700px] ${animationDirection === 'next' ? 'slideInRight' : animationDirection === 'prev' ? 'slideInLeft' : ''}`} onAnimationEnd={handleAnimationEnd}>

                        <img className="w-full h-full object-cover" src={images[Object.keys(images)[currentImageIndex]]} alt={`Image ${currentImageIndex + 1}`} />
                    </div>
                    <button onClick={nextImage} className="rounded-full bg-gray-200 p-2 w-10 h-10 flex items-center justify-center">
                        <HiChevronRight size={20} />
                    </button>
                </div>
            </div>
        </>

    )
}
