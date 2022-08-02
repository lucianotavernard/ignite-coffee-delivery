import { FormHTMLAttributes, useContext } from 'react'
import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money
} from 'phosphor-react'

import { useNavigate } from 'react-router-dom'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { CartContext } from '@/contexts/CartContext'

import { Input } from '@/components/Form/Input'
import { InputRadio } from '@/components/Form/InputRadio'

enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money'
}

const newCheckoutFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe o Rua'),
  number: zod.string().min(1, 'Informe o Número'),
  complement: zod.string(),
  neighborhood: zod.string().min(1, 'Informe o Bairro'),
  city: zod.string().min(1, 'Informe a Cidade'),
  uf: zod.string().min(1, 'Informe a UF'),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => ({ message: 'Informe o método de pagamento' })
  })
})

type NewCheckoutFormData = zod.infer<typeof newCheckoutFormValidationSchema>

type NewCheckoutFormProps = FormHTMLAttributes<HTMLFormElement>

type ErrorsType = {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function NewCheckoutForm(props: NewCheckoutFormProps) {
  const navigate = useNavigate()
  const { clearCart } = useContext(CartContext)

  const { register, handleSubmit, reset, formState } =
    useForm<NewCheckoutFormData>({
      resolver: zodResolver(newCheckoutFormValidationSchema),
      defaultValues: {
        paymentMethod: undefined
      }
    })

  function handleCreateNewCheckout(data: NewCheckoutFormData) {
    navigate('/confirmation', {
      state: data
    })

    reset()
    clearCart()
  }

  const { errors } = formState as unknown as ErrorsType

  return (
    <form {...props} onSubmit={handleSubmit(handleCreateNewCheckout)}>
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

        <div className="grid grid-cols-4 gap-4">
          <Input
            className="col-span-4 max-w-[12rem]"
            placeholder="CEP"
            {...register('cep')}
            error={errors.cep?.message}
          />
          <Input
            className="col-span-4"
            placeholder="Rua"
            {...register('street')}
            error={errors.street?.message}
          />
          <Input
            placeholder="Número"
            {...register('number')}
            error={errors.number?.message}
          />
          <Input
            className="col-span-3"
            placeholder="Complemento"
            {...register('complement')}
            error={errors.complement?.message}
          />
          <Input
            placeholder="Bairro"
            {...register('neighborhood')}
            error={errors.neighborhood?.message}
          />
          <Input
            className="col-span-2"
            placeholder="Cidade"
            {...register('city')}
            error={errors.city?.message}
          />
          <Input
            placeholder="UF"
            {...register('uf')}
            error={errors.uf?.message}
          />
        </div>
      </div>

      <div className="p-10 rounded-md bg-[#F3F2F2]">
        <div className="flex mb-8">
          <CurrencyDollar size={22} className="text-[#8047F8]" />

          <hgroup className="ml-1">
            <h6 className="font-roboto font-normal text-base text-[#403937]">
              Pagamento
            </h6>
            <p className="font-roboto font-normal text-sm text-[#574F4D]">
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </hgroup>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <InputRadio
            id="creditCard"
            value="credit"
            {...register('paymentMethod')}
            label={
              <>
                <CreditCard size={22} className="text-[#8047F8] mr-4" />
                Cartão de crédito
              </>
            }
          />

          <InputRadio
            id="debitCard"
            value="debit"
            {...register('paymentMethod')}
            label={
              <>
                <Bank size={22} className="text-[#8047F8] mr-4" />
                Cartão de débito
              </>
            }
          />

          <InputRadio
            id="money"
            {...register('paymentMethod')}
            value="money"
            label={
              <>
                <Money size={22} className="text-[#8047F8] mr-4" />
                Dinheiro
              </>
            }
          />
        </div>

        {errors?.paymentMethod && (
          <div className="mt-2">
            <p className=" text-[#f84747] text-xs">
              {errors?.paymentMethod?.message}
            </p>
          </div>
        )}
      </div>
    </form>
  )
}
