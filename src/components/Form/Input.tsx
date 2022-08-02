import { forwardRef, InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
}

const InputComponent = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, ...rest }, ref) => {
    return (
      <div className={className}>
        <input
          ref={ref}
          {...rest}
          className={`transition-colors w-full h-10 px-3 border rounded-md ${
            !error ? 'border-[#E6E5E5]' : 'border-[#f84747]'
          } bg-[#EDEDED] text-sm focus:border-[#C47F17] focus-visible:outline-none`}
        />

        {error && <span className="mt-2 text-[#f84747] text-xs">{error}</span>}
      </div>
    )
  }
)

InputComponent.displayName = 'Input'

export const Input = InputComponent
