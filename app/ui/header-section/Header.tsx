"use client";

import { useState } from "react"
import Image from "next/image"
import { Navigation } from "./Navigation"
import { ItemsInCartCounter } from "./ItemsInCartCounter"
import { CartModal } from "./CartModal"
import { useItemStore } from "@/app/store";
import { ItemState } from "@/app/types";

export const Header = () => {
    const itemsInCart = useItemStore((state: ItemState) => state.items)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }
    return (
        <header className="p-5 md:px-44 md:py-0">
            <div className="flex justify-between md:border-b-gray-200 md:border-b-2">
                <div className="flex items-center gap-4 md:gap-10">
                    <Image className="block md:hidden cursor-pointer" src="/icon-menu.svg" width={20} height={20} alt="menu" />
                    <h1>
                        <Image src="/logo.svg" width={138} height={20} alt="logo" />
                    </h1>
                    <Navigation />
                </div>
                <div className="flex items-center gap-4 md:gap-10">
                    <div className="flex">
                        <button onClick={toggleModal} className="cursor-pointer">
                            <Image src="/icon-cart.svg" width={22} height={20} alt="icon-cart" />
                        </button>
                        {itemsInCart > 0 && <ItemsInCartCounter />}
                    </div>
                    <Image
                        className="rounded-full cursor-pointer hover:border-amber-600 hover:border-2"
                        src="/image-avatar.png"
                        width={50} height={50} alt="avatar"
                    />
                </div>
            </div>
            <CartModal isModalOpen={isModalOpen} />
        </header>
    )
}
