import { GiZigzagTune } from "react-icons/gi";


export default function Footer() {
    return (
        <>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <aside>
                    <GiZigzagTune size={40} />
                    <p>Antonella Tisera<br />Page created 2024</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Servicios</h6>
                    <a className="link link-hover">Coreografias</a>
                    <a className="link link-hover">Bailarina</a>
                    <a className="link link-hover">Maestria</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Sedes</h6>
                    <a className="link link-hover">Sobre nosotrosg</a>
                    <a className="link link-hover">Contacto</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </>
    )
}
