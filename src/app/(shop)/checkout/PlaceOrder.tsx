"use client";
import clsx from "clsx";

import { Input } from "@/components";

const PlaceOrder = () => {
  return (
    <>
      <div className="w-full lg:w-[36%] ">
        <h3 className="text-lg font-semibold">Dirección de entrega</h3>

        <p className="text-xl">Mario Mchilas</p>
        <p>Occote 258</p>
        <p>20000</p>
        <p>Aguascalientes Ags.</p>
        <p>4495852565</p>

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
            <span className="font-semibold">3 articulos</span>
          </div>
          <div className=" flex justify-between ">
            <span>Subtotal</span>
            <span className="font-semibold">$250</span>
          </div>
          <div className="flex justify-between">
            <span>Impuestos estimados</span>
            <span className="font-semibold">$25.50</span>
          </div>
          <div className="flex justify-between pt-4 text-base font-semibold">
            <span>Total</span>
            <span>$275.50</span>
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

        <button
          className={clsx({
            "mt-8 w-full bg-gray-500 text-white p-3 rounded-md": true,
          })}
        >
          Confirmar pedido
        </button>
      </div>
    </>
  );
};

export default PlaceOrder;
