"use client"

import React from 'react'
import { useItemStore } from "@/app/store"
import { ItemState } from "@/app/types"

export const ItemsInCartCounter = () => {
    const itemsInCart = useItemStore((state: ItemState) => state.items)

    return (
        <span className="-ml-2 px-1 rounded-lg bg-red-500 text-white text-sm font-semibold">{itemsInCart}</span>
    )
}
