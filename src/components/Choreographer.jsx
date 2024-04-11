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
        
            <div id='choreographer' className=" text-white bg-[#C6375F] w-full p-7 mx-auto flex justify-center font-bold text-3xl md:text-5xl font-sanchez">COREOGRAFA</div>
            <div className=" max-w-[800px] h-screen mx-auto flex flex-col justify-between p-12 ">
                <div className=" text-black p-1 text-sm md:text-lg  text-center ">
                    <p>
                        Soy una apasionada coreógrafa con una sólida trayectoria en el mundo de la danza y la creación artística. A lo largo de los años, he tenido el privilegio de trabajar en una amplia variedad de proyectos que han enriquecido mi experiencia y me han permitido crecer como artista.
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
                        <div>
                            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50 animate-slideInDown">
                                <img
                                    className="w-4/5 h-2/5 sm:w-5/6 sm:h-3/6 md:w-3/6 md:h-3/6 cursor-pointer"
                                    src={imagenes[imagenAmpliada]}
                                    alt={imagenAmpliada}
                                    onClick={handleClose}
                                />
                            </div>
                        </div>

                    )}
                </div>

                <div className="text-center text-sm md:text-lg">
                    <p>
                        Para consultas sobre coreografías y/o clases, escribir a: {' '}
                        <span className="text-black font-bold">
                            <a href="mailto:antonellatisera97@gmail.com" target="_blank">
                                antonellatisera97@gmail.com
                            </a>
                        </span>
                    </p>
                </div>

            </div>
        </>
    )
}
