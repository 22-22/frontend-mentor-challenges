import Logo from "./common/Logo";
import Navigation from "./common/Navigation";
import { josefin_sans } from "../fonts";

export default function Header() {
    return (
        <header className="px-10 md:px-44 pt-16 pb-40 bg-[url('/desktop/image-hero.jpg')] bg-no-repeat bg-cover bg-center">
            <div className="mb-32 flex justify-between items-center">
                <Logo />
                <Navigation section="header" />
                <svg className="block md:hidden" width="24" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fillRule="evenodd"><path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z" /></g></svg>
            </div>
            <h1 className={`md:w-3/5 p-8 border-2 border-white ${josefin_sans.className} text-4xl md:text-7xl uppercase text-white`}>
                immersive experiences that deliver
            </h1>
        </header>
    )
}
