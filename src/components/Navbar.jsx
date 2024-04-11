import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, animateScroll as scroll } from 'react-scroll';
import { HiArrowUp } from "react-icons/hi";

export default function Navbar() {
    const [nav, setNav] = useState(false);
    const [textActive, setTextActive] = useState(null);

    const handleNav = () => {
        setNav(!nav);
    }

    const handleClick = (index) => {
        setTextActive(index);
    };

    const handleScrollToTop = () => {
        scroll.scrollToTop();
    };

    const links = [
        { id: 1, href: "sobremi", text: "SOBRE MI" },
        { id: 2, href: "choreographer", text: "COREOGRAFA" },
        { id: 3, href: "bailarina", text: "BAILARINA" },
        { id: 4, href: "maestra", text: "MAESTRA" },
    ]

    return (
        <>
            <div className='bg-black flex justify-end items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
                <ul className="hidden md:flex">
                    {links.map((link, index) => (
                        <li key={link.id} className={`p-4 cursor-pointer hover:text-gray-300 font-bold font-arimo ${textActive === index ? 'font-arimo text-2xl border-b border-red-500' : ''}`}>
                            <Link
                                to={link.href}
                                spy={true}
                                smooth={true}
                                duration={500}
                                onClick={() => handleClick(index)}
                            >
                                {link.text}
                            </Link>
                        </li>
                    ))}
                    <li className="p-4 cursor-pointer hover:text-gray-300">
                        <a href="https://www.instagram.com/antonellatiseradanza/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={25} />
                        </a>
                    </li>
                </ul>
                <div onClick={handleNav} className="block md:hidden fixed text-[#EF4444] z-10">
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
                <div className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50" onClick={handleNav} style={{ display: nav ? 'block' : 'none' }}></div>
                <div onClick={handleNav} className={`block md:hidden fixed text-[#EF4444] z-10 ${nav ? 'hidden' : ''}`}>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
                <ul className={`fixed md:hidden left-0 top-0 w-[60%] h-full bg-[#EF4444] ease-in-out duration-500 z-50 font-arimo ${nav ? 'translate-x-0' : '-translate-x-full'}`}>
                    <h1 className="w-full text-3xl m-7 pt-8 font-bold"></h1>
                    {links.map((link, index) => (
                        <li key={link.id} className="p-4 border-b cursor-pointer font-bold" onClick={() => handleClick(index)}>
                            <Link
                                to={link.href}
                                smooth={true}
                                duration={500}
                                onClick={handleNav}
                                className="text-white"
                            >
                                {link.text}
                            </Link>
                        </li>
                    ))}
                    <li className="p-4 cursor-pointer hover:text-gray-300 border-b">
                        <a href="https://www.instagram.com/antonellatiseradanza/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={25} />
                        </a>
                    </li>
                    <li className="p-4 cursor-pointer hover:text-gray-300" onClick={handleScrollToTop}>
                        <HiArrowUp size={25}/>
                    </li>
                </ul>
            </div>
        </>
    )
}
