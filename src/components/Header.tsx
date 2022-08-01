import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

import faviconImg from '@/assets/favicon.png'

export function Header() {
  return (
    <header className="flex justify-center w-full py-8 px-6">
      <div className="flex justify-between items-center w-full max-w-6xl">
        <NavLink to="/">
          <picture className="flex">
            <img src={faviconImg} alt="" />
          </picture>
        </NavLink>

        <aside className="flex gap-3">
          <button
            type="button"
            className="flex justify-center items-center gap-1 py-2 px-3 rounded-lg bg-[#EBE5F9] text-[#4B2995] font-medium"
          >
            <MapPin size={24} weight="fill" />
            Porto Alegre, RS
          </button>

          <NavLink
            to="/checkout"
            className="relative flex justify-center items-center gap-1 w-10 h-10 p-2 rounded-lg bg-[#F1E9C9] text-[#C47F17]"
          >
            <span className="absolute -top-2 -right-2 flex justify-center items-center w-5 h-5 rounded-full bg-[#C47F17] text-white text-xs font-bold">
              3
            </span>
            <ShoppingCart size={24} weight="fill" />
          </NavLink>
        </aside>
      </div>
    </header>
  )
}
