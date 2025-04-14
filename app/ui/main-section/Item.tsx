"use client"

import { useState } from "react"
import Image from "next/image"
import { useItemStore } from "@/app/store";
import { ItemState } from "@/app/types";

export const Item = () => {
    const addToCart = useItemStore((state: ItemState) => state.addToCart)
    const [count, setCount] = useState(0);

    const handleAddItem = () => {
        setCount((prevCount) => prevCount + 1)
    }

    const handleDeleteItem = () => {
        setCount((prevCount) => prevCount - 1)
    }

    const handleAddToCart = () => {
        addToCart(count);
        setCount(0);
    }
    return (
        <article className="md:ml-16 px-5 md:px-0 py-5 md:py-0">
            <h3 className="mb-4 text-gray-400 font-semibold uppercase">Sneaker Company</h3>
            <h2 className="mb-4 md:mb-6 text-3xl md:text-5xl font-bold">
                Fall Limited Edition Sneakers
            </h2>
            <p className="mb-4 text-gray-400">These low-profile sneakers are your perfect casual wear companion. Featuring a
                durable rubber outer sole, they’ll withstand everything the weather can offer.
            </p>
            <div className="flex md:block justify-between items-center mb-6 md:mb-0">
                <p className="md:mb-3 flex items-center">
                    <span className="mr-4 text-2xl font-bold">$125.00</span> <span className="p-1 bg-black text-white rounded-md">50%</span>
                </p>
                <p className="md:mb-8 text-gray-400 line-through">$250.00</p>
            </div>
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-fit mb-4 md:mb-0 flex justify-between bg-gray-100 rounded-md ">
                    <button
                        onClick={handleDeleteItem}
                        disabled={count === 0}
                        className={`p-4 text-2xl font-bold text-amber-600 
                    ${count === 0 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}>
                        -</button>
                    <span className="p-4 text-xl font-bold">{count}</span>
                    <button onClick={handleAddItem} className="p-4 text-2xl font-bold text-amber-600 cursor-pointer">+</button>
                </div>
                <button
                    onClick={handleAddToCart}
                    className="w-full md:w-fit flex items-center justify-center gap-4 md:ml-4 py-4 px-12 rounded-md font-bold bg-amber-600  cursor-pointer hover:opacity-70">
                    <Image src="/icon-cart.svg" width={22} height={20} alt="icon-cart" />
                    <span> Add to cart</span>
                </button>
            </div>
        </article>
    )
}
