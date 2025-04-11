import Link from "next/link"

export const Navigation = () => {
    return (
        <nav>
            <ul className="flex gap-8 font-kumbh text-gray-400">
                <li className="relative py-8 hover:text-gray-800 transition duration-200 ease-in group"><Link href="#">Collections
                    <span className="absolute left-0 bottom-0 w-full group-hover:border-b-4 group-hover:border-amber-600 transition duration-200 ease-in"></span>
                </Link></li>
                <li className="relative py-8 hover:text-gray-800 transition duration-200 ease-in group"><Link href="#">Men
                    <span className="absolute left-0 bottom-0 w-full group-hover:border-b-4 group-hover:border-amber-600 transition duration-200 ease-in"></span>
                </Link></li>
                <li className="relative py-8 hover:text-gray-800 transition duration-200 ease-in group"><Link href="#">Women
                    <span className="absolute left-0 bottom-0 w-full group-hover:border-b-4 group-hover:border-amber-600 transition duration-200 ease-in"></span>
                </Link></li>
                <li className="relative py-8 hover:text-gray-800 transition duration-200 ease-in group"><Link href="#">About
                    <span className="absolute left-0 bottom-0 w-full group-hover:border-b-4 group-hover:border-amber-600 transition duration-200 ease-in"></span>
                </Link></li>
                <li className="relative py-8 hover:text-gray-800 transition duration-200 ease-in group"><Link href="#">Contact
                    <span className="absolute left-0 bottom-0 w-full group-hover:border-b-4 group-hover:border-amber-600 transition duration-200 ease-in"></span>
                </Link></li>
            </ul>
        </nav>
    )
}
