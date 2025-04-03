import Link from "next/link"

export const Navigation = () => {
    return (
        <nav>
            <ul className="flex gap-8 font-kumbh text-gray-400">
                <li className="hover:scale-110 transition duration-200 ease-in"><Link href="#">Collections</Link></li>
                <li className="hover:scale-110 transition duration-200 ease-in"><Link href="#">Men</Link></li>
                <li className="hover:scale-110 transition duration-200 ease-in"><Link href="#">Women</Link></li>
                <li className="hover:scale-110 transition duration-200 ease-in"><Link href="#">About</Link></li>
                <li className="hover:scale-110 transition duration-200 ease-in"><Link href="#">Contact</Link></li>
            </ul>
        </nav>
    )
}
