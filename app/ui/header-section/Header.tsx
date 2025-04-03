import Image from "next/image"
import { Navigation } from "./Navigation"
import { ItemsInCartCounter } from "./ItemsInCartCounter"

export const Header = () => {
    return (
        <header className="px-44">
            <div className="py-5 flex justify-between border-b-gray-400 border-b-2">
                <div className="flex items-center gap-10">
                    <Image src="/logo.svg" width={138} height={20} alt="logo" />
                    <Navigation />
                </div>
                <div className="flex items-center gap-10">
                    <div className="flex">
                        <Image src="/icon-cart.svg" width={22} height={20} alt="icon-cart" />
                        <ItemsInCartCounter />
                    </div>
                    <Image src="/image-avatar.png" width={50} height={50} alt="avatar" />
                </div>
            </div>
        </header>
    )
}
