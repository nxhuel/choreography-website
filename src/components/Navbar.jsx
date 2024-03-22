import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
    const [nav, setNav] = useState(false);
    const [textActive, setTextActive] = useState(null);

    const handleNav = () => {
        setNav(!nav);
    }

    const handleClick = (index) => {
        setTextActive(index)
    };

    const links = [
        { id: 1, href: "#sobremi", text: "Sobre mi" },
        { id: 2, href: "#choreographer", text: "Coreografa" },
        { id: 3, href: "#bailarina", text: "Bailarina" },
        { id: 4, href: "#maestra", text: "Maestra" },
    ]

    return (
        <>
            <div className=' bg-black flex justify-end items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
                <ul className="hidden md:flex">
                    {links.map((link, index) =>
                        <a
                            key={link.id}
                            href={link.href} >
                            <li
                                className={`p-4 cursor-pointer hover:text-gray-300 font-bold ${textActive === index
                                    ? 'text-black text-2xl'
                                    : ''
                                    }`}
                                onClick={() => handleClick(index)}>
                                {link.text}
                            </li>
                        </a>
                    )}


                    <li className="p-4 cursor-pointer hover:text-gray-300">
                        <FaInstagram size={25} />
                    </li>
                </ul>
                <div onClick={handleNav} className="block md:hidden">
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
                <ul className={nav
                    ? 'fixed left-0 top-0 w-[40%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-50'
                    : 'ease-in-out duration-500 fixed left-[-100%]'
                }>
                    <h1 className="w-full text-3xl m-7 pt-8 font-bold"></h1>
                    {links.map((link, index) =>
                        <a
                            key={link.id}
                            href={link.href} >
                            <li
                                className={`p-4 border-b cursor-pointer hover:bg-gray-800 font-bold`}
                                onClick={() => handleClick(index)}>
                                {link.text}
                            </li>
                        </a>
                    )}
                    <li className="p-4 cursor-pointer hover:bg-gray-800">
                        <FaInstagram size={25} />
                    </li>
                </ul>
            </div >
        </>
    )
}
