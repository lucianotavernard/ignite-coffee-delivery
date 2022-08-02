import { Minus, Plus } from 'phosphor-react'

type QuantityInput = {
  quantity: number
  onChange: (quantity: number) => void
}

export function QuantityInput({ quantity, onChange }: QuantityInput) {
  function handleIncrease() {
    onChange(quantity + 1)
  }

  function handleDecrease() {
    onChange(quantity - 1)
  }

  return (
    <div className="flex justify-between items-center gap-2 p-2 rounded-md bg-[#E6E5E5]">
      <button
        type="button"
        disabled={quantity === 0}
        onClick={handleDecrease}
        className="transition-colors text-[#8047F8] hover:text-[#4B2995] hover:cursor-pointer"
      >
        <Minus size={20} weight="fill" />
      </button>

      <input
        readOnly
        value={quantity}
        className="w-5 font-roboto font-normal bg-transparent text-base text-center text-[#272221] outline-none select-none"
      />

      <button
        type="button"
        onClick={handleIncrease}
        className="transition-colors text-[#8047F8] hover:text-[#4B2995] hover:cursor-pointer"
      >
        <Plus size={20} weight="fill" />
      </button>
    </div>
  )
}
