import { josefin_sans } from "../../fonts";
import { SeeAllButtonProps } from "@/types";

export default function SeeAllButton({
    mobileDisplay, desktopDisplay
}: SeeAllButtonProps) {
    return (
        <button
            className={`${mobileDisplay} md:${desktopDisplay} px-10 py-2 border-black border-2 ${josefin_sans.className} font-bold uppercase tracking-widest hover:scale-110 transition duration-300 ease-in`}
        >
            see all
        </button>
    )
}
