/* eslint-disable @typescript-eslint/no-explicit-any */

export type Product = {
  id: string
  name: string
  price: number
  photo: string
  description: string
  categories: string[]
}

export type CartItem = {
  product: Product
  quantity: number
}

type CartState = {
  items: CartItem[]
}

export enum ActionTypes {
  CLEAR_CART = 'CLEAR_CART',
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  CHANGE_ITEM_QUANTITY = 'CHANGE_ITEM_QUANTITY',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART'
}

export const initialState: CartState = {
  items: []
}

export function cartReducer(state: CartState, action: any): CartState {
  switch (action.type) {
    case ActionTypes.ADD_ITEM_TO_CART: {
      const { product, quantity = 1 } = action.payload

      const productInCartIndex = state.items.findIndex(
        (item) => item.product.id === product.id
      )

      if (productInCartIndex > -1) {
        state.items[productInCartIndex].quantity = quantity

        return state
      }

      return {
        ...state,
        items: [
          ...state.items,
          {
            product: product,
            quantity: quantity
          }
        ]
      }
    }
    case ActionTypes.CHANGE_ITEM_QUANTITY: {
      const { productId, quantity } = action.payload

      return {
        ...state,
        items: state.items.map((item) =>
          item.product.id === productId
            ? {
                ...item,
                quantity: quantity
              }
            : item
        )
      }
    }
    case ActionTypes.REMOVE_ITEM_FROM_CART: {
      const { productId } = action.payload

      return {
        ...state,
        items: state.items.filter((item) => item.product.id !== productId)
      }
    }
    default:
      return state
  }
}
