import Link from "next/link"
import { josefin_sans } from "../../fonts";
import { SectionType } from "@/types"

export default function Navigation({ section }: { section: SectionType }) {
    return (
        <nav className={`${section === "header" && "hidden"} md:block ${josefin_sans.className}`}>
            <ul className={`${section === "footer" && "flex-col"} flex md:flex-row gap-6 font-bold text-white`}>
                <li className="hover:scale-110 transition duration-200 ease-in"><Link href="#">About</Link></li>
                <li className="hover:scale-110 transition duration-200 ease-in"><Link href="#">Careers</Link></li>
                <li className="hover:scale-110 transition duration-200 ease-in"><Link href="#">Events</Link></li>
                <li className="hover:scale-110 transition duration-200 ease-in"><Link href="#">Products</Link></li>
                <li className="hover:scale-110 transition duration-200 ease-in"><Link href="#">Support</Link></li>
            </ul>
        </nav>
    )
}
