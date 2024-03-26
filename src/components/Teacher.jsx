import dancer from '../assets/dancer.jpg'


export default function Teacher() {
    return (
        <>
            <div id='bailarina' className=" text-white bg-black w-full p-7 mx-auto flex justify-center font-bold text-3xl md:text-5xl">Maestra</div>
            <div className="h-screen sm:p-10 md:p-16 lg:p-32 xl:p-40">
                <div className=" pt-5 pb-5 text-center">
                    <p>Mis clases:</p>
                </div>
                <div className="flex flex-col p-5 justify-around">
                    <div className=" bg-red-800  h-96 ">
                        <img className='w-full h-full ' src={dancer} alt="/" />
                    </div>
                    <div className=" text-center pt-5 pb-5 bg-[#EFEFEF]">
                        <h1 className="text-black font-bold">CLASES DE DANZA CLASICA</h1>
                        <p className="text-[#7E8181]">
                            Una clase pensada para el entrenamiento físico, técnico y coreográfico donde se transita el lenguaje por medio de secuencias, diagonales, piso, plies y barra.
                            En este camino, un cuerpo físico y emocional, despierto y presente aprende, reconociendo, atravesando y creyendo en el proceso con la confianza y el amor, abrazando lo desconocido.
                        </p>
                    </div>
                    <div className="flex justify-center text-black font-bold bg-[#EFEFEF] pb-5">
                        <button className=" border-2 border-black border-solid p-1 rounded-lg active:bg-black active:text-white">Consultar</button>
                    </div>
                </div>
            </div>
        </>

    )
}
