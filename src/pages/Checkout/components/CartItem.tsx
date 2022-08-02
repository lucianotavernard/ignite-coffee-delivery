import { useContext } from 'react'
import { Trash } from 'phosphor-react'

import { CartContext } from '@/contexts/CartContext'

import { QuantityInput } from '@/components/Form/QuantityInput'

type Product = {
  id: string
  name: string
  price: number
  photo: string
}

type CartItemProps = {
  product: Product
  quantity: number
}

export function CartItem({ product, quantity }: CartItemProps) {
  const { id, name, price, photo } = product

  const { changeProductQuantity, removeProductFromCart } =
    useContext(CartContext)

  function handleQuantityChange(newQuantity: number) {
    changeProductQuantity(id, newQuantity)
  }

  function handleProductRemove() {
    removeProductFromCart(id)
  }

  return (
    <div className="flex justify-between items-start py-6 border-b border-[#E6E5E5] last-of-type:mb-6">
      <div className="flex justify-between items-center gap-5">
        <picture className="flex w-16 h-16">
          <img src={`/src/assets/coffees/${photo}`} alt="" />
        </picture>

        <div>
          <span className="font-roboto font-normal text-base text-[#403937]">
            {name}
          </span>

          <div className="flex gap-2 mt-2">
            <QuantityInput
              quantity={quantity}
              onChange={handleQuantityChange}
            />

            <button
              type="button"
              onClick={handleProductRemove}
              className="transition-colors flex justify-center items-center py-2 px-3 rounded-md bg-[#E6E5E5] text-xs text-[#574F4D] uppercase hover:cursor-pointer hover:bg-[#D7D5D5]"
            >
              <Trash size={16} className="mr-1 text-[#8047F8]" />
              Remover
            </button>
          </div>
        </div>
      </div>

      <span className="font-roboto font-bold text-base text-[#574F4D]">
        {Intl.NumberFormat('pt-br', {
          style: 'currency',
          currency: 'BRL',
          minimumFractionDigits: 2
        }).format(price)}
      </span>
    </div>
  )
}
