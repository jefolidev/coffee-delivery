import { createContext, useState } from 'react'
import type { CoffeeIdTypes } from '../pages/home/components/coffe-list'

export interface CoffeeCartData {
  id: CoffeeIdTypes
  coffee_name: string
  quantity: number
  price: number
}

interface CoffeeCartProviderProps {
  children: React.ReactNode
}

export interface CoffeeCartContextProps {
  productsInCart: CoffeeCartData[]
  setProductsInCart: React.Dispatch<React.SetStateAction<CoffeeCartData[]>>
  // addProductInCart: (coffeeToAdd: CoffeeCartData) => void
}

export const CoffeeCartContext = createContext({} as CoffeeCartContextProps)

export function CoffeeCartProvider({ children }: CoffeeCartProviderProps) {
  const [productsInCart, setProductsInCart] = useState<CoffeeCartData[]>([])

  // function addProductInCart(coffeeToAdd: CoffeeCartData) {
  //   setProductsInCart((prevState) => [...prevState, coffeeToAdd])
  // }

  return (
    <CoffeeCartContext.Provider value={{ productsInCart, setProductsInCart }}>
      {children}
    </CoffeeCartContext.Provider>
  )
}
