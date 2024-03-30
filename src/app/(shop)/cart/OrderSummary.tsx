"use client";
import {ButtonPrimary} from "@/components";
import { useCartStore } from "@/store";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import { currencyFormat } from "@/utils";

const OrderSummary = () => {
  const router = useRouter();

  const [loaded, setLoaded] = useState(false);
  const { itemsInCart, subTotal, tax, total } = useCartStore((state) =>
    state.getSummaryInformation()
  );

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (itemsInCart === 0 && loaded === true) {
      router.replace("/empty");
    }
  }, [itemsInCart, loaded, router]);

  if (!loaded) return <p>Loading...</p>;

 
  

  return (
    <>
      <div className="flex-1">
        <div className="sticky top-28">
          <h3 className="text-2xl font-semibold">Resumen</h3>
          <div className="mt-7 divide-y divide-neutral-300 text-sm">
            <div className="flex justify-between pb-4">
              <span>No. Productos</span>
              <span className="font-semibold">
              {itemsInCart === 1 ? "1 artículo" : `${itemsInCart} artículos`}
              </span>
            </div>
            <div className="flex justify-between pb-4">
              <span>Subtotal</span>
              <span className="font-semibold">{currencyFormat(subTotal)}</span>
            </div>
           
            <div className="flex justify-between py-4">
              <span>Impuestos Estimados</span>
              <span className="font-semibold">{currencyFormat(tax)}</span>
            </div>
            <div className="flex justify-between pt-4 text-base font-semibold">
              <span>Total</span>
              <span>{currencyFormat(total)}</span>
            </div>
          </div>
          <ButtonPrimary href="/checkout" className="mt-8 w-full">
            Comprar Ahora
          </ButtonPrimary>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
