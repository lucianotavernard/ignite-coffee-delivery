import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import bannerImg from '@/assets/banner.png'

import { Header } from '@/components/Header'
import { CardCoffee } from './components/CardCoffee'

export function Home() {
  return (
    <div className="flex justify-center w-100 min-h-screen bg-[#FAFAFA]">
      <main className="flex flex-col items-center w-full">
        <Header />

        <section className="flex justify-center items-center w-full min-h-[32rem] px-6 intro-container">
          <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-between w-full max-w-6xl">
            <aside className="w-full max-w-[38rem]">
              <hgroup className="mb-16">
                <h1 className="mb-3 font-baloo font-extrabold text-5xl text-[#272221]">
                  Encontre o café perfeito para qualquer hora do dia
                </h1>
                <p className="font-roboto font-normal text-xl text-[#403937]">
                  Com o Coffee Delivery você recebe seu café onde estiver, a
                  <br />
                  qualquer hora
                </p>
              </hgroup>

              <ul className="grid grid-cols-2 gap-y-5 font-roboto font-normal text-base text-[#574F4D]">
                <li className="flex items-center">
                  <span className="flex justify-center items-center w-8 h-8 mr-3 rounded-full bg-[#C47F17] text-white">
                    <ShoppingCart weight="fill" />
                  </span>
                  Compra simples e segura
                </li>
                <li className="flex items-center">
                  <span className="flex justify-center items-center w-8 h-8 mr-3 rounded-full bg-[#574F4D] text-white">
                    <Package weight="fill" />
                  </span>
                  Embalagem mantém o café intacto
                </li>
                <li className="flex items-center">
                  <span className="flex justify-center items-center w-8 h-8 mr-3 rounded-full bg-[#DBAC2C] text-white">
                    <Timer weight="fill" />
                  </span>
                  Entrega rápida e rastreada
                </li>
                <li className="flex items-center">
                  <span className="flex justify-center items-center w-8 h-8 mr-3 rounded-full bg-[#8047F8] text-white">
                    <Coffee weight="fill" />
                  </span>
                  O café chega fresquinho até você
                </li>
              </ul>
            </aside>

            <aside className="w-full max-w-[30rem]">
              <picture>
                <img src={bannerImg} alt="" />
              </picture>
            </aside>
          </div>
        </section>

        <section className="flex justify-center items-center w-full mt-8">
          <div className="flex flex-col w-full max-w-6xl">
            <h2 className="mb-10 font-baloo font-extrabold text-3xl text-[#272221]">
              Nossos cafés
            </h2>

            <section className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <CardCoffee />
              <CardCoffee />
              <CardCoffee />
              <CardCoffee />
              <CardCoffee />
              <CardCoffee />
              <CardCoffee />
              <CardCoffee />
              <CardCoffee />
              <CardCoffee />
              <CardCoffee />
              <CardCoffee />
              <CardCoffee />
              <CardCoffee />
            </section>
          </div>
        </section>

        <footer className="py-10"></footer>
      </main>
    </div>
  )
}
