import { ShoppingCart } from 'phosphor-react'

import coffeeImg from '@/assets/coffees/tradicional.png'
import { QuantityInput } from '@/components/Form/QuantityInput'

export function CardCoffee() {
  return (
    <article className="flex flex-col justify-between min-h-[20rem] p-6 pt-0 rounded-tl-md rounded-tr-[2rem] rounded-br-md rounded-bl-[2rem] text-center bg-[#F3F2F2]">
      <header className="flex flex-col justify-center items-center">
        <picture className="flex justify-center items-center w-full h-full max-w-[8rem] max-h-[8rem] -mt-5 mb-4">
          <img src={coffeeImg} alt="" />
        </picture>

        <div className="flex flex-wrap justify-center items-center gap-1">
          <span className="py-1 px-2 rounded-full font-roboto font-bold text-[0.625rem] bg-[#F1E9C9] text-[#C47F17] uppercase">
            Tradicional
          </span>
        </div>
      </header>

      <hgroup>
        <h5 className="mb-2 font-baloo font-extrabold text-xl text-[#272221]">
          Expresso Tradicional
        </h5>
        <p className="font-roboto font-normal text-sm text-[#8D8686]">
          O tradicional café feito com água quente e grãos moídos
        </p>
      </hgroup>

      <footer className="flex justify-between items-center">
        <div className="text-[#574F4D]">
          <span className="font-roboto text-sm">R$</span>
          <strong className="ml-1 font-baloo text-2xl">9,90</strong>
        </div>

        <div className="flex gap-2">
          <QuantityInput />

          <button
            type="button"
            className="transition-colors flex justify-center items-center gap-1 w-10 h-10 p-2 rounded-lg bg-[#4B2995] text-[#F3F2F2] hover:bg-[#8047F8]"
          >
            <ShoppingCart size={24} weight="fill" />
          </button>
        </div>
      </footer>
    </article>
  )
}
