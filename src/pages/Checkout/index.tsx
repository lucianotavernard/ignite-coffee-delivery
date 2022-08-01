import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money
} from 'phosphor-react'

import coffeeImg from '@/assets/coffees/tradicional.png'

import { Header } from '@/components/Header'
import { Input } from '@/components/Form/Input'
import { InputRadio } from '@/components/Form/InputRadio'
import { CartItem } from './components/CartItem'

export function Checkout() {
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

              <div className="mb-4 p-10 rounded-md bg-[#F3F2F2]">
                <div className="flex mb-8">
                  <MapPinLine size={22} className="text-[#C47F17]" />

                  <hgroup className="ml-1">
                    <h6 className="font-roboto font-normal text-base text-[#403937]">
                      Endereço de Entrega
                    </h6>
                    <p className="font-roboto font-normal text-sm text-[#574F4D]">
                      Informe o endereço onde deseja receber seu pedido
                    </p>
                  </hgroup>
                </div>

                <form className="grid grid-cols-4 gap-4">
                  <Input
                    className="col-span-4 max-w-[12rem]"
                    placeholder="CEP"
                  />
                  <Input className="col-span-4" placeholder="Rua" />
                  <Input placeholder="Número" />
                  <Input className="col-span-3" placeholder="Complemento" />
                  <Input placeholder="Bairro" />
                  <Input className="col-span-2" placeholder="Cidade" />
                  <Input placeholder="UF" />
                </form>
              </div>

              <div className="p-10 rounded-md bg-[#F3F2F2]">
                <div className="flex mb-8">
                  <CurrencyDollar size={22} className="text-[#8047F8]" />

                  <hgroup className="ml-1">
                    <h6 className="font-roboto font-normal text-base text-[#403937]">
                      Pagamento
                    </h6>
                    <p className="font-roboto font-normal text-sm text-[#574F4D]">
                      O pagamento é feito na entrega. Escolha a forma que deseja
                      pagar
                    </p>
                  </hgroup>
                </div>

                <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <InputRadio
                    id="creditCard"
                    name="paymentMethod"
                    label={
                      <>
                        <CreditCard size={22} className="text-[#8047F8] mr-4" />
                        Cartão de crédito
                      </>
                    }
                  />

                  <InputRadio
                    id="debitCard"
                    name="paymentMethod"
                    label={
                      <>
                        <Bank size={22} className="text-[#8047F8] mr-4" />
                        Cartão de débito
                      </>
                    }
                  />

                  <InputRadio
                    id="money"
                    name="paymentMethod"
                    label={
                      <>
                        <Money size={22} className="text-[#8047F8] mr-4" />
                        Dinheiro
                      </>
                    }
                  />
                </form>
              </div>
            </aside>

            <aside className="w-full lg:max-w-md mt-8 lg:mt-0">
              <h3 className="mb-3 font-baloo font-bold text-lg text-[#403937]">
                Cafés selecionados
              </h3>

              <div className="flex flex-col p-10 rounded-tl-md rounded-tr-[2rem] rounded-br-md rounded-bl-[2rem] bg-[#F3F2F2]">
                <form>
                  <CartItem image={coffeeImg} title="Expresso Tradicional" />
                  <CartItem image={coffeeImg} title="Expresso Tradicional" />
                  <CartItem image={coffeeImg} title="Expresso Tradicional" />
                </form>

                <div className="flex flex-col gap-3 mb-6">
                  <hgroup className="flex justify-between items-center font-roboto font-normal text-[#574F4D]">
                    <span className="text-sm">Total de itens</span>
                    <span className="text-base">R$ 0,00</span>
                  </hgroup>

                  <hgroup className="flex justify-between items-center font-roboto font-normal text-[#574F4D]">
                    <span className="text-sm">Entrega</span>
                    <span className="text-base">R$ 0,00</span>
                  </hgroup>

                  <hgroup className="flex justify-between items-center font-roboto font-bold text-[#403937]">
                    <span className="text-xl">Total</span>
                    <span className="text-xl">R$ 0,00</span>
                  </hgroup>
                </div>

                <button
                  type="button"
                  className="transition-colors flex justify-center items-center gap-1 p-3 rounded-lg bg-[#DBAC2C] text-white font-medium uppercase hover:bg-[#C47F17]"
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
