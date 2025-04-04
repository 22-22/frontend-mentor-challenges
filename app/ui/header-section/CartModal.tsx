import { FC } from 'react'
import Image from "next/image"
import { useItemStore } from "@/app/store"
import { ItemState } from "@/app/types"

interface CartModalProps {
    isModalOpen: boolean
}
export const CartModal: FC<CartModalProps> = ({ isModalOpen }) => {
    const removeAllItems = useItemStore((state: ItemState) => state.removeAllItems)

    return isModalOpen && (
        <div className="absolute top-15 right-44 max-w-sm py-6 rounded-md bg-white shadow-2xl">
            <h3 className="px-4 mb-5 font-bold">Cart</h3>
            <p className="border-b-gray-200 border-b-2"></p>
            <div className="p-4 flex gap-4 items-center">
                <Image
                    className="rounded-md"
                    src="/image-product-1-thumbnail.jpg"
                    width={50} height={50} alt="thumbnail"
                />
                <div>
                    <h4>Fall Limited Edition Sneakers</h4>
                    <span>$125.00</span>
                    <span className="px-1">x</span>
                    <span>3</span>
                    <span className="ml-2 font-bold">$375.00</span>
                </div>
                <button onClick={removeAllItems} className="cursor-pointer">
                    <Image src="icon-delete.svg" width={14} height={16} alt="icon-delete" />
                </button>
            </div>
            <button className="ml-4 bg-amber-600 py-4 px-12 rounded-md font-bold cursor-pointer">Checkout</button>
        </div>
    )
}
