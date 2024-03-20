import { ReactTyped } from "react-typed";
// import ChatScreen from "./ChatScreen";
import imgInicio from '../assets/img-inicio.jpg';

export default function Content() {

    const imgInicioStyle = {
        backgroundImage: `url(${imgInicio})`,
        backgroundSize: 'cover', // Opcional, ajusta el tamaño de la imagen al contenedor
        backgroundPosition: 'center', // Opcional, centra la imagen en el contenedor
        width: '100%', // Opcional, ajusta el ancho del div al 100% del contenedor
        height: '100vh', // Opcional, ajusta la altura del div a 100% de la altura de la ventana
    };

    return (
        <>

            <div id="sobremi" style={imgInicioStyle} className="text-white">
                <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                    <p className=" font-bold p-2"></p>
                    <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">ANTONELLA TISERA</h1>
                    <div className=" flex justify-center items-center">
                        <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">Profesional siendo</p>
                        <ReactTyped
                            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
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

                    <p className=" md:text-2xl text-xl font-bold text-gray-500">Descripcion o frase que desees poner aca.</p>

                    <button className=" bg-[#C6375F] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black transition hover:translate-x-1 hover:scale-110 duration-300">
                        Contactame
                    </button>
                </div>
            </div>
        </>
    )
}
