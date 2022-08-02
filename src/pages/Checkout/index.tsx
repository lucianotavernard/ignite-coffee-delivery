import { useContext } from 'react'

import { CartContext } from '@/contexts/CartContext'

import { Header } from '@/components/Header'

import { CartItem } from './components/CartItem'
import { NewCheckoutForm } from './components/NewCheckoutForm'

export function Checkout() {
  const { items, totalItemsInCart } = useContext(CartContext)

  const totalDeliveryPrice = 2.0

  const totalItemsPrice = items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  )

  const totalCartPrice = totalItemsPrice + totalDeliveryPrice

  return (
    <div className="flex justify-center w-100 min-h-screen bg-[#FAFAFA]">
      <main className="flex flex-col items-center w-full">
        <Header />

        <section className="flex justify-center items-center w-full min-h-[32rem] px-6">
          <div className="flex flex-col justify-center items-start lg:flex-row lg:justify-between w-full max-w-6xl">
            <aside className="w-full lg:max-w-2xl">
              <h3 className="mb-3 font-baloo font-bold text-lg text-[#403937]">
                Complete seu pedido
              </h3>

              <NewCheckoutForm id="createCheckoutForm" />
            </aside>

            <aside className="w-full lg:max-w-md mt-8 lg:mt-0">
              <h3 className="mb-3 font-baloo font-bold text-lg text-[#403937]">
                Cafés selecionados
              </h3>

              <div className="flex flex-col p-10 rounded-tl-md rounded-tr-[2rem] rounded-br-md rounded-bl-[2rem] bg-[#F3F2F2]">
                <div>
                  {items.map((item) => (
                    <CartItem
                      key={item.product.id}
                      product={item.product}
                      quantity={item.quantity}
                    />
                  ))}
                </div>

                <div className="flex flex-col gap-3 mb-6">
                  <hgroup className="flex justify-between items-center font-roboto font-normal text-[#574F4D]">
                    <span className="text-sm">Total de itens</span>
                    <span className="text-base">
                      {Intl.NumberFormat('pt-br', {
                        currency: 'BRL',
                        style: 'currency',
                        minimumFractionDigits: 2
                      }).format(totalItemsPrice)}
                    </span>
                  </hgroup>

                  <hgroup className="flex justify-between items-center font-roboto font-normal text-[#574F4D]">
                    <span className="text-sm">Entrega</span>
                    <span className="text-base">
                      {Intl.NumberFormat('pt-br', {
                        currency: 'BRL',
                        style: 'currency',
                        minimumFractionDigits: 2
                      }).format(totalDeliveryPrice)}
                    </span>
                  </hgroup>

                  <hgroup className="flex justify-between items-center font-roboto font-bold text-[#403937]">
                    <span className="text-xl">Total</span>
                    <span className="text-xl">
                      {Intl.NumberFormat('pt-br', {
                        currency: 'BRL',
                        style: 'currency',
                        minimumFractionDigits: 2
                      }).format(totalCartPrice)}
                    </span>
                  </hgroup>
                </div>

                <button
                  type="submit"
                  form="createCheckoutForm"
                  disabled={totalItemsInCart === 0}
                  className="transition-colors flex justify-center items-center gap-1 p-3 rounded-lg bg-[#DBAC2C] text-white font-medium uppercase enabled:hover:bg-[#C47F17] disabled:cursor-not-allowed"
                >
                  Confirmar pedido
                </button>
              </div>
            </aside>
          </div>
        </section>

        <footer className="py-10"></footer>
      </main>
    </div>
  )
}
