"use client";

import Image from "next/image"
import { Navigation } from "./Navigation"
import { ItemsInCartCounter } from "./ItemsInCartCounter"
import { CartModal } from "./CartModal"
import { useState } from "react"

export const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }
    return (
        <header className="relative px-44">
            <div className="py-5 flex justify-between border-b-gray-200 border-b-2">
                <div className="flex items-center gap-10">
                    <Image src="/logo.svg" width={138} height={20} alt="logo" />
                    <Navigation />
                </div>
                <div className="flex items-center gap-10">
                    <div className="flex">
                        <button onClick={toggleModal} className="cursor-pointer">
                            <Image src="/icon-cart.svg" width={22} height={20} alt="icon-cart" />
                        </button>
                        <ItemsInCartCounter />
                    </div>
                    <Image
                        className="cursor-pointer"
                        src="/image-avatar.png"
                        width={50} height={50} alt="avatar"
                    />
                </div>
            </div>
            <CartModal isModalOpen={isModalOpen} />
        </header>
    )
}
