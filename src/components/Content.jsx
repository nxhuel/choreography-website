import { ReactTyped } from "react-typed";
// import imgInicio from '../assets/img-inicio.jpg';
import imgInicio from '../assets/uno.avif';

import { useState } from "react";

export default function Content() {
    const [redirecting, setRedirecting] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setRedirecting(true);
        setTimeout(() => {
            window.open("mailto:antonellatisera97@gmail.com", "_blank");
            setRedirecting(false);
        }, 1000);
    };


    const imgInicioStyle = {
        backgroundImage: `url(${imgInicio})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh',
    };

    return (
        <>
            <div id="sobremi" style={imgInicioStyle} className="text-white">
                <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
                    <p className=" font-bold p-2"></p>
                    <h1 className="  font-playfair-display font-bold md:text-7xl sm:text-6xl text-4xl  md:py-6 ">ANTONELLA TISERA</h1>
                    <div className="flex flex-col bg-[#bebebe15] border-t-4 border-red-500 rounded-br-lg rounded-bl-lg">
                        <div className=" flex justify-center items-center">
                            <p className="  md:text-5xl sm:text-4xl text-xl font-bold py-4 font-arimo">Profesional siendo</p>
                            <ReactTyped
                                className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 font-arimo"
                                strings={[
                                    'BAILARINA',
                                    'MAESTRA',
                                    'COREOGRAFA'
                                ]}
                                typeSpeed={120}
                                backSpeed={140}
                                loop
                            />
                        </div>
                        <p className=" md:text-2xl text-xl font-alice pt-6 pb-20 ">
                            Inspirando movimiento y expresión artística.
                        </p>
                        <a
                            href="mailto:antonellatisera97@gmail.com"
                            onClick={handleClick}
                            className="bg-[#C6375F] w-[200px] font-medium my-6 mx-auto py-3 transition hover:translate-x-1 hover:scale-110 duration-300 ">
                            {redirecting ? "Redirigiendo a Gmail..." : "CONTACTAR"}
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
