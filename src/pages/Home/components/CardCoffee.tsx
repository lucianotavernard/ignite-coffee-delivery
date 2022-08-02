import { useContext, useState } from 'react'
import { ShoppingCart } from 'phosphor-react'

import { CartContext } from '@/contexts/CartContext'

import { QuantityInput } from '@/components/Form/QuantityInput'

type Coffee = {
  id: string
  name: string
  price: number
  photo: string
  description: string
  categories: string[]
}

type CardCoffeeProps = {
  coffee: Coffee
}

export function CardCoffee({ coffee }: CardCoffeeProps) {
  const { name, price, photo, description, categories } = coffee

  const [quantity, setQuantity] = useState(0)
  const { addProductToCart } = useContext(CartContext)

  function handleQuantityChange(newQuantity: number) {
    setQuantity(newQuantity)
  }

  function handleAddToCart() {
    addProductToCart(coffee, quantity)
  }

  return (
    <article className="flex flex-col justify-between min-h-[20rem] p-6 pt-0 rounded-tl-md rounded-tr-[2rem] rounded-br-md rounded-bl-[2rem] text-center bg-[#F3F2F2]">
      <header className="flex flex-col justify-center items-center">
        <picture className="flex justify-center items-center w-full h-full max-w-[8rem] max-h-[8rem] -mt-5 mb-4">
          <img src={`src/assets/coffees/${photo}`} alt="" />
        </picture>

        <div className="flex flex-wrap justify-center items-center gap-1">
          {categories.map((category) => (
            <span
              key={String(category)}
              className="py-1 px-2 rounded-full font-roboto font-bold text-[0.625rem] bg-[#F1E9C9] text-[#C47F17] uppercase"
            >
              {category}
            </span>
          ))}
        </div>
      </header>

      <hgroup>
        <h5 className="mb-2 font-baloo font-extrabold text-xl text-[#272221]">
          {name}
        </h5>
        <p className="font-roboto font-normal text-sm text-[#8D8686]">
          {description}
        </p>
      </hgroup>

      <footer className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-[#574F4D]">
          <span className="font-roboto text-sm">R$</span>
          <strong className="ml-1 font-baloo text-2xl">
            {Intl.NumberFormat('pt-br', { minimumFractionDigits: 2 }).format(
              price
            )}
          </strong>
        </div>

        <div className="flex gap-2">
          <QuantityInput quantity={quantity} onChange={handleQuantityChange} />

          <button
            type="button"
            onClick={handleAddToCart}
            disabled={quantity === 0}
            className="transition-colors flex justify-center items-center gap-1 w-10 h-10 p-2 rounded-lg bg-[#4B2995] text-[#F3F2F2] enabled:hover:bg-[#8047F8] hover:cursor-pointer disabled:cursor-not-allowed"
          >
            <ShoppingCart size={24} weight="fill" />
          </button>
        </div>
      </footer>
    </article>
  )
}
