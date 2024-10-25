import { create } from 'zustand'

export interface Item {
  id: number
  name: string
  price: number
}

interface Store {
  items: Item[]
  addItem: (item: Item) => void
  removeItem: (id: number) => void
  totalPrice: () => number
}

const useCartStore = create<Store>((set, get) => ({
  items: [],
  addItem: (item: Item) => set(state => ({ items: [...state.items, item] })),
  removeItem: (id: number) =>
    set(state => ({ items: state.items.filter(item => item.id !== id) })),
  totalPrice: () => get().items.reduce((total, item) => total + item.price, 0),
}))

export default useCartStore
