import { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export function Input({ className, ...rest }: InputProps) {
  return (
    <div className={className}>
      <input
        {...rest}
        className="transition-colors w-full h-10 px-3 border rounded-md border-[#E6E5E5] bg-[#EDEDED] text-sm focus:border-[#C47F17] focus-visible:outline-none invalid:border-[#f84747]"
      />
    </div>
  )
}
