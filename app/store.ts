import { create } from 'zustand'
import { ItemState } from "./types"

export const useItemStore = create<ItemState>()((set) => ({
    items: 0,
    addToCart: (newItems: number) => set((state: ItemState) => ({ items: state.items + newItems })),
    removeAllItems: () => set({ items: 0 }),
}))