import { create } from 'zustand'

export const useItemStore = create((set) => ({
    items: 0,
    addToCart: (newItems: number) => set((state: any) => ({ items: state.items + newItems })),
    removeAllItems: () => set({ items: 0 }),
}))