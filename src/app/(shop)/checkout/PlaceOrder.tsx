"use client";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { placeOrder } from '@/actions';
import { useAddressStore, useCartStore } from "@/store";
import { currencyFormat } from '@/utils';

import { Input } from "@/components";

const PlaceOrder = () => {


  const router = useRouter();
  const [loaded, setLoaded] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);



  const address = useAddressStore((state) => state.address);

  const { itemsInCart, subTotal, tax, total } = useCartStore((state) =>
    state.getSummaryInformation()
  );
  const cart = useCartStore( state => state.cart );
  const clearCart = useCartStore( state => state.clearCart );

  useEffect(() => {
    setLoaded(true);
  }, []);


  const onPlaceOrder = async() => {
    setIsPlacingOrder(true);
    // await sleep(2);

    const productsToOrder = cart.map( product => ({
      productId: product.id,
      quantity: product.quantity,
      size: product.size,
    }))


    //! Server Action
    const resp = await placeOrder( productsToOrder, address);
    if ( !resp.ok ) {
      setIsPlacingOrder(false);
      setErrorMessage(resp.message);
      return;
    }

    //* Todo salio bien!
    clearCart();
    router.replace('/orders/' + resp.order?.id );


  }




  if (!loaded) {
    return <p>Cargando...</p>;
  }


  return (
    <>
      <div className="w-full lg:w-[36%] ">
        <h3 className="text-lg font-semibold">Dirección de entrega</h3>

        <p className="text-xl">
          {address.firstName} {address.lastName}
        </p>
        <p>{address.address}</p>
        <p>{address.postalCode}</p>
        <p>
          {address.city}, {address.country}
        </p>
        <p>{address.phone}</p>

        <div className="mt-8 divide-y divide-neutral-300"></div>

        <div className="mt-10 border-t border-neutral-300 pt-6 text-sm">
          <h3 className="text-lg font-semibold">Resumen de pedido</h3>

          <div>
            <div className="text-sm">Código de descuento</div>
            <div className="mt-1.5 flex">
              <Input
                rounded="rounded-md"
                sizeClass="h-12 px-4 py-3"
                className="flex-1 border-2 border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
              />
              <button
                type="button"
                className="ml-3 flex w-24 items-center justify-center rounded-2xl border border-neutral-300 bg-gray-200 px-4 text-sm font-medium transition-colors hover:bg-neutral-100"
              >
                Aplicar
              </button>
            </div>
          </div>

          <div className="mt-5 flex justify-between">
            <span>No. Productos</span>
            <span className="font-semibold">  {itemsInCart === 1 ? "1 artículo" : `${itemsInCart} artículos`}</span>
          </div>
          <div className=" flex justify-between ">
            <span>Subtotal</span>
            <span className="font-semibold">{currencyFormat(subTotal)}</span>
          </div>
          <div className="flex justify-between">
            <span>Impuestos estimados</span>
            <span className="font-semibold">{currencyFormat(tax)}</span>
          </div>
          <div className="flex justify-between pt-4 text-base font-semibold">
            <span>Total</span>
            <span> {currencyFormat(total)}</span>
          </div>
          {/* Disclaimer */}
          <span className="text-xs">
            Al hacer clic en &quot;Colocar orden&quot;, aceptas nuestros{" "}
            <a href="#" className="underline">
              términos y condiciones
            </a>{" "}
            y{" "}
            <a href="#" className="underline">
              política de privacidad
            </a>
          </span>
        </div>

        <p className="text-red-500">{ errorMessage }</p>

        <button
          onClick={ onPlaceOrder }
          className={clsx({
            'mt-8 w-full bg-gray-500 text-white p-3 rounded-md': !isPlacingOrder,
            'btn-disabled bg-red-200': isPlacingOrder
          })}
        >
          Confirmar pedido
        </button>
      </div>
    </>
  );
};

export default PlaceOrder;
