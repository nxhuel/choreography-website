import dancerbg from '../assets/dancer-bg.jpg'
import dancer from '../assets/dancer.jpg'

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
            <div id='bailarina' className=" text-white bg-black w-full p-7 mx-auto flex justify-center font-bold text-3xl md:text-5xl">BAILARINA</div>
            <div style={imgFondoStyle} className="h-screen relative">
                <div className='bg-white bg-opacity-75 absolute inset-0'>
                    <div className="max-w-[800px] h-full mx-auto flex flex-col gap-5 sm:gap-10 md:gap-8 p-12 ">
                        <div className='text-center text-xs sm:text-sm md:text-base text-black'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, earum quaerat. Consequuntur deleniti reprehenderit adipisci? Repellendus nam repudiandae, in cumque animi qui at laudantium earum ad. Animi eveniet fuga veritatis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim placeat veniam ipsa! Sunt, id. Earum aliquid, eum fuga repellat iure enim suscipit dolore modi officia quae aliquam saepe temporibus nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil excepturi nemo assumenda vero tempora similique placeat! Ipsum est natus tempora nam, excepturi laboriosam veritatis porro id labore quis repellendus quia. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi et cum esse corporis obcaecati, aspernatur id earum, voluptatem itaque magnam quo iste ea facere. Sint id perferendis ullam temporibus voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati veniam consectetur eius eveniet, nobis error voluptates expedita corrupti blanditiis sit fugit quaerat quisquam ipsam aspernatur amet explicabo quam minima ex?
                            </p>
                        </div>
                        <div className='w-auto'>
                            <img className='rounded-lg hover:shadow-2xl w-full h-[14rem] sm:h-[20rem] md:h-[22rem]' src={dancer} alt="" />
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}
