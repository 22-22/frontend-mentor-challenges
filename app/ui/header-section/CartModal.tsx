import { FC } from 'react'
import Image from "next/image"
import { useItemStore } from "@/app/store"
import { ItemState } from "@/app/types"

interface CartModalProps {
    isModalOpen: boolean
}
export const CartModal: FC<CartModalProps> = ({ isModalOpen }) => {
    const itemsInCart = useItemStore((state: ItemState) => state.items)
    const removeAllItems = useItemStore((state: ItemState) => state.removeAllItems)

    return isModalOpen && (
        <div className="absolute z-10 md:top-15 right-7 md:right-44 max-w-xs min-w-xs md:max-w-sm md:min-w-sm max-h-56 min-h-56 p-6 flex justify-center items-center rounded-md bg-white shadow-2xl">
            {itemsInCart > 0 ?
                <div>
                    <h3 className="mb-4 font-bold">Cart</h3>
                    <p className="border-b-gray-200 border-b-2"></p>
                    <div className="my-2 md:my-4 flex justify-between items-center gap-4">
                        <Image
                            className="rounded-md"
                            src="/image-product-1-thumbnail.jpg"
                            width={50} height={50} alt="thumbnail"
                        />
                        <div className="font-bold">
                            <h4 className="text-gray-400">Fall Limited Edition Sneakers</h4>
                            <span className="text-gray-400">$125.00</span>
                            <span className="px-1 text-gray-400">x</span>
                            <span className="text-gray-400">{itemsInCart}</span>
                            <span className="ml-2">$375.00</span>
                        </div>
                        <button onClick={removeAllItems} className="cursor-pointer">
                            <Image src="icon-delete.svg" width={14} height={16} alt="icon-delete" />
                        </button>
                    </div>
                    <button className="w-full py-3 px-12 bg-amber-600 rounded-md font-bold cursor-pointer">Checkout</button>
                </div>
                : <p className=" text-gray-400 font-bold">Your cart is empty.</p>
            }
        </div>
    )
}
