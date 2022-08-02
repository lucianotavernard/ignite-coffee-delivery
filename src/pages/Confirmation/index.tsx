import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'

import deliveryImg from '@/assets/delivery.png'

import { Header } from '@/components/Header'

type Location = {
  street: string
  number: string
  neighborhood: string
  city: string
  uf: string
  paymentMethod: 'money' | 'debit' | 'credit'
}

const paymentMethods = {
  money: 'Dinheiro',
  debit: 'Cartão de débito',
  credit: 'Cartão de Crédito'
} as const

export function Confirmation() {
  const { state } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (!state) navigate('/')
  }, [])

  const location = state as Location

  return (
    <div className="flex justify-center w-100 min-h-screen bg-[#FAFAFA]">
      <main className="flex flex-col items-center w-full">
        <Header />

        <section className="flex justify-center items-center w-full min-h-[32rem] px-6">
          <div className="flex flex-col justify-center items-end md:flex-row lg:justify-between w-full max-w-6xl">
            <aside className="w-full md:max-w-lg">
              <hgroup className="mb-10">
                <h3 className="mb-2 font-baloo font-extrabold text-3xl text-[#C47F17]">
                  Uhu! Pedido confirmado
                </h3>

                <p className="font-roboto font-normal text-xl text-[#403937]">
                  Agora é só aguardar que logo o café chegará até você
                </p>
              </hgroup>

              <div className="flex flex-col p-[0.0625rem] rounded-tl-md rounded-tr-[2rem] rounded-br-md rounded-bl-[2rem] bg-gradient-to-tr from-amber-500 to-fuchsia-700">
                <ul className="grid grid-cols-1 gap-6 p-10 rounded-tl-md rounded-tr-[2rem] rounded-br-md rounded-bl-[2rem] font-roboto font-normal text-base bg-[#FAFAFA] text-[#574F4D]">
                  <li className="flex items-center">
                    <span className="flex justify-center items-center w-8 h-8 mr-3 rounded-full bg-[#8047F8] text-base text-white">
                      <MapPin />
                    </span>

                    <hgroup>
                      <p className="text-left">
                        Entrega em{' '}
                        <strong>
                          {location.street}, {location.number}
                        </strong>
                      </p>

                      <p>
                        {location.neighborhood} - {location.city}, {location.uf}
                      </p>
                    </hgroup>
                  </li>

                  <li className="flex items-center">
                    <span className="flex justify-center items-center w-8 h-8 mr-3 rounded-full bg-[#DBAC2C] text-base text-white">
                      <Timer />
                    </span>

                    <hgroup>
                      <p className="text-left">Previsão de entrega</p>
                      <strong>20 min - 30 min</strong>
                    </hgroup>
                  </li>

                  <li className="flex items-center">
                    <span className="flex justify-center items-center w-8 h-8 mr-3 rounded-full bg-[#C47F17] text-base text-white">
                      <CurrencyDollar />
                    </span>

                    <hgroup>
                      <p className="text-left">Pagamento na entrega</p>
                      <strong>{paymentMethods[location.paymentMethod]}</strong>
                    </hgroup>
                  </li>
                </ul>
              </div>
            </aside>

            <aside className="flex justify-center w-full md:max-w-md mt-8 lg:mt-0">
              <picture>
                <img src={deliveryImg} alt="" />
              </picture>
            </aside>
          </div>
        </section>

        <footer className="py-10"></footer>
      </main>
    </div>
  )
}
