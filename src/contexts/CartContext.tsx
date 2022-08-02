import { createContext, ReactNode, useReducer } from 'react'

import {
  ActionTypes,
  CartItem,
  cartReducer,
  initialState,
  Product
} from '@/reducers/cart'

type CartContextType = {
  items: CartItem[]
  totalItemsInCart: number
  clearCart: () => void
  addProductToCart: (product: Product, quantity: number) => void
  removeProductFromCart: (productId: string) => void
  changeProductQuantity: (productId: string, newQuantity: number) => void
}

export const CartContext = createContext({} as CartContextType)

type CartContextProviderProps = {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, initialState, () => {
    const storedStateAsJSON = localStorage.getItem(
      '@ignite-timer:cart-state-1.0.0'
    )

    return storedStateAsJSON ? JSON.parse(storedStateAsJSON) : initialState
  })

  const { items } = cartState

  const totalItemsInCart = items.reduce(
    (total, item) => total + item.quantity,
    0
  )

  function addProductToCart(product: Product, quantity = 1) {
    dispatch({
      type: ActionTypes.ADD_ITEM_TO_CART,
      payload: {
        product,
        quantity
      }
    })
  }

  function removeProductFromCart(productId: string) {
    dispatch({
      type: ActionTypes.REMOVE_ITEM_FROM_CART,
      payload: {
        productId
      }
    })
  }

  function changeProductQuantity(productId: string, quantity: number) {
    dispatch({
      type: ActionTypes.CHANGE_ITEM_QUANTITY,
      payload: {
        productId,
        quantity
      }
    })
  }

  function clearCart() {
    dispatch({
      type: ActionTypes.CLEAR_CART
    })
  }

  return (
    <CartContext.Provider
      value={{
        items,
        totalItemsInCart,
        addProductToCart,
        removeProductFromCart,
        changeProductQuantity,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
