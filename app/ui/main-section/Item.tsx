"use client"

import { useState } from "react"

export const Item = () => {
    const [count, setCount] = useState(0);

    const handleAddItem = () => {
        setCount((prevCount) => prevCount + 1)
    }

    const handleDeleteItem = () => {
        setCount((prevCount) => prevCount - 1)
    }
    return (
        <div className="pl-16">
            <h3 className="mb-4 text-gray-400 font-semibold uppercase">Sneaker Company</h3>
            <h2 className="mb-8 text-5xl font-bold">
                Fall Limited Edition Sneakers
            </h2>
            <p className="mb-4 text-gray-400">These low-profile sneakers are your perfect casual wear companion. Featuring a
                durable rubber outer sole, they’ll withstand everything the weather can offer.
            </p>
            <p className="mb-3 flex items-center">
                <span className="mr-4 text-2xl font-bold">$125.00</span> <span className="p-1 bg-black text-white rounded-md">50%</span>
            </p>
            <p className="mb-8 text-gray-400 line-through">$250.00</p>
            <div>
                <span className="bg-gray-100 p-4 rounded-md">
                    <button
                        onClick={handleDeleteItem}
                        disabled={count === 0}
                        className={`p-4 text-2xl font-bold text-amber-600 
                    ${count === 0 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}>
                        -</button>
                    <span className="p-4 text-xl font-bold">{count}</span>
                    <button onClick={handleAddItem} className="p-4 text-2xl font-bold text-amber-600 cursor-pointer">+</button>
                </span>
                <button className="ml-4 bg-amber-600 py-4 px-12 rounded-md font-bold cursor-pointer">Add to cart</button>
            </div>
        </div>
    )
}
