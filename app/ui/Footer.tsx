import Logo from "./common/Logo";
import Navigation from "./common/Navigation";
import SocialsIcons from "./SocialsIcons";
import { alata } from "../fonts";

export default function Footer() {
    return (
        <footer className="px-10 md:px-44 py-10 flex flex-col md:flex-row md:justify-between md:items-center gap-8 bg-black">
            <div className="flex flex-col items-center md:items-start gap-4">
                <Logo />
                <Navigation section="footer" />
            </div>
            <div className="flex flex-col items-center md:items-end gap-6">
                <SocialsIcons />
                <p className={`${alata.className} text-gray-400`}>&#169; 2021 Loopstudios. All rights reserved.</p>
            </div>
        </footer>
    )
}
