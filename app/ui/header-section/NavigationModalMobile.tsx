import { FC } from "react";
import Link from "next/link"
import { CloseIcon } from "../colour-changing-icons/CloseIcon";

interface NavigationModalMobileProps {
    isOpen: boolean;
    onClose: () => void;
}

const NavigationModalMobile: FC<NavigationModalMobileProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-10 w-screen h-screen bg-black/50" onClick={onClose}>
            <div className="w-2/3 h-screen p-6 bg-white" onClick={(evt) => evt.stopPropagation()}>
                <button className="cursor-pointer" onClick={onClose}>
                    <CloseIcon />
                </button>
                <nav>
                    <ul className="flex flex-col gap-4 mt-8 font-bold cursor-pointer">
                        <li><Link href="#">Collections</Link></li>
                        <li><Link href="#">Men</Link></li>
                        <li><Link href="#">Women</Link></li>
                        <li><Link href="#">About</Link></li>
                        <li><Link href="#">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default NavigationModalMobile;