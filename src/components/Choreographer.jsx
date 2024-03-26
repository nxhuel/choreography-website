import coreografiaUno from '../assets/coreografiaUno.jpg';
import coreografiaDos from '../assets/coreografiaDos.jpg';
import coreografiaTres from '../assets/coreografiaTres.jpg';
import coreografiaCuatro from '../assets/coreografiaCuatro.jpg';
import { useState } from 'react';

const imagenes = {
    coreografiaUno: coreografiaUno,
    coreografiaDos: coreografiaDos,
    coreografiaTres: coreografiaTres,
    coreografiaCuatro: coreografiaCuatro
};

export default function Choreographer() {
    const [imagenAmpliada, setImagenAmpliada] = useState(null);

    const handleClick = (imagenKey) => {
        setImagenAmpliada(imagenKey);
        document.body.classList.add('overflow-hidden');
    };

    const handleClose = () => {
        setImagenAmpliada(null);
        document.body.classList.remove('overflow-hidden');
    };

    return (
        <>
            <div id='choreographer' className=" text-white bg-black w-full p-7 mx-auto flex justify-center font-bold text-3xl md:text-5xl">COREOGRAFA</div>
            <div className=" max-w-[800px] h-screen mx-auto flex flex-col justify-between p-12 ">
                <div className="p-1 text-sm md:text-lg  text-center ">
                    <p>Soy creador de contenidos audiovisuales que pueden expresarse en teatros,
                        plataformas virtuales, espacio no convencionales.
                        Siempre de la mano de un proceso de investigación previo, en donde se considera el deseo y
                        la narración de un mensaje a través de un cuento coreográfico en movimiento.
                        Tootsie la comedia 2023 teatro Lola Menbrive
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-4 place-items-center md:grid-cols-2">
                    {Object.keys(imagenes).map((imagenKey) => (
                        <img
                            className="w-60 h-32 sm:w-72 sm:h-40 md:w-80 md:h-60 cursor-pointer hover:shadow-2xl"
                            key={imagenKey}
                            src={imagenes[imagenKey]}
                            alt={imagenKey}
                            onClick={() => handleClick(imagenKey)}
                        />
                    ))}
                    {imagenAmpliada && (
                        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50 animate-slideInDown">
                            <img
                                className="w-4/5 h-2/5 sm:w-5/6 sm:h-3/6 md:w-3/6 md:h-3/6 cursor-pointer"
                                src={imagenes[imagenAmpliada]}
                                alt={imagenAmpliada}
                                onClick={handleClose}
                            />
                        </div>
                    )}
                </div>

                <div className="text-center text-sm md:text-lg ">
                    <p>
                        Para consultas sobre propuestas coreográficas y/o contenidos
                        escribir a: <span className=' text-black font-bold'>consultas@nicochavez.com.ar</span>
                    </p>
                </div>

            </div>
        </>
    )
}
