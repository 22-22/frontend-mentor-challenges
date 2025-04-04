export interface ItemState {
    items: number,
    addToCart: (newItems: number) => void;
    removeAllItems: () => void;
}