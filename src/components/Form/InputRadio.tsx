import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: ReactNode
}

const InputComponent = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, ...rest }, ref) => {
    return (
      <label htmlFor={id}>
        <input
          id={id}
          type="radio"
          ref={ref}
          {...rest}
          className="peer hidden"
        />
        <div className="transition-colors flex justify-center items-center p-3 border border-transparent rounded-md bg-[#E6E5E5] text-xs uppercase select-none hover:cursor-pointer hover:bg-[#D7D5D5] peer-checked:border-[#8047F8] peer-checked:bg-[#EBE5F9]">
          {label}
        </div>
      </label>
    )
  }
)

InputComponent.displayName = 'InputRadio'

export const InputRadio = InputComponent
