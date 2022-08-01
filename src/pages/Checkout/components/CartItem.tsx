import { Trash } from 'phosphor-react'

import { QuantityInput } from '@/components/Form/QuantityInput'

type CartItemProps = {
  image: string
  title: string
}

export function CartItem({ image, title }: CartItemProps) {
  return (
    <div className="flex justify-between items-start py-6 border-b border-[#E6E5E5] last-of-type:mb-6">
      <div className="flex justify-between items-center gap-5">
        <picture className="flex w-16 h-16">
          <img src={image} alt="" />
        </picture>

        <div>
          <span className="font-roboto font-normal text-base text-[#403937]">
            {title}
          </span>

          <div className="flex gap-2 mt-2">
            <QuantityInput />

            <button
              type="button"
              className="transition-colors flex justify-center items-center py-2 px-3 rounded-md bg-[#E6E5E5] text-xs text-[#574F4D] uppercase hover:cursor-pointer hover:bg-[#D7D5D5]"
            >
              <Trash size={16} className="mr-1 text-[#8047F8]" />
              Remover
            </button>
          </div>
        </div>
      </div>

      <span className="font-roboto font-bold text-base text-[#574F4D]">
        R$ 0,00
      </span>
    </div>
  )
}
