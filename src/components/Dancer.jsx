import dancerbg from '../assets/dancer-bg.jpg'
// import dancer from '../assets/dancer.jpg'
import videoClip from '../videos/videoClip.mp4'

export default function Dancer() {

    const imgFondoStyle = {
        backgroundImage: `url(${dancerbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh',
    };

    return (
        <>
            <div id='bailarina' className=" text-white bg-[#C6375F] w-full p-7 mx-auto flex justify-center font-bold text-3xl md:text-5xl font-sanchez">BAILARINA</div>
            <div style={imgFondoStyle} className="h-screen relative">
                <div className='bg-white bg-opacity-75 absolute inset-0'>
                    <div className="max-w-[800px] h-full mx-auto flex flex-col gap-32 sm:gap-10 md:gap-8 p-12 ">
                        <div className='text-center text-sm sm:text-base md:text-lg text-black'>
                            <p>
                                Poseo formación en danza clásica, contemporánea y tango que me ha proporcionado una base sólida y versátil que me permite adaptarme a una variedad de estilos y géneros. Desde el delicado equilibrio del ballet hasta la libertad expresiva de la danza contemporánea entre otras, me siento cómoda y segura en cualquier escenario que se me presente.
                                Mi experiencia en el escenario abarca desde actuaciones en teatros de renombre hasta colaboraciones en proyectos de danza experimental. Cada actuación es una oportunidad para compartir mi amor por la danza y conectar con el público de una manera única y poderosa.
                            </p>
                        </div>
                        <div className="relative rounded overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                            <iframe
                                className="absolute w-full h-full rounded"
                                src={videoClip}
                                title="Video de YouTube"
                                allowFullScreen
                            ></iframe>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}
