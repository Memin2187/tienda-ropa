"use client";

import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { MdClose } from "react-icons/md";

import {ButtonCircle3} from "@/components";

import {ButtonSecondary} from "@/components";


import {LikeButton} from "@/components";
import {  useCartStore } from "@/store";
import { QuantitySelector } from "@/components";
import { currencyFormat } from "@/utils";
import { IoCartOutline } from "react-icons/io5";

export interface CartSideBarProps {}
const CartSideBar: React.FC<CartSideBarProps> = () => {
  const [isVisable, setIsVisable] = useState(false);
 
  const handleOpenMenu = () => setIsVisable(true);
  const handleCloseMenu = () => setIsVisable(false);
  const updateProductQuantity = useCartStore( state => state.updateProductQuantity );
  const totalItemsInCart = useCartStore((state) => state.getTotalItems());
  const removeProduct = useCartStore( state => state.removeProduct );
  const productsInCart = useCartStore((state) => state.cart);
  const { itemsInCart, subTotal, tax, total } = useCartStore((state) =>
    state.getSummaryInformation()
  );
  const [loaded, setLoaded] = useState(false);
 


  useEffect(() => {
    setLoaded(true);
  }, []);

  const renderProduct = () => {
    

   
    return (
      <>
        {productsInCart.map((product) => (
          <div key={product.slug} className="flex py-5 last:pb-0">
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl">
              <Image
                fill
                src={`/products/${product.image}`}
                alt={product.title}
                className="h-full w-full object-cover object-top"
              />
              <Link
                onClick={handleCloseMenu}
                className="absolute inset-0"
                href={`/product/${product.slug}`}
              />
            </div>

            <div className="ml-4 flex flex-1 flex-col justify-between">
              <div>
                <div className="flex justify-between ">
                  <div>
                    <h3 className="font-medium ">
                      <Link
                        onClick={handleCloseMenu}
                        href={`/product/${product.slug}`}
                      >
                        {product.title}
                      </Link>
                    </h3>
                  </div>
                  <span className=" font-medium">${product.price}.00</span>
                </div>
              </div>
              <div className="flex w-full items-end justify-between text-sm">
                <div className="flex items-center gap-3">
                  <LikeButton />
                  <button
                  onClick={ () => removeProduct(product) }
                  >
                    <AiOutlineDelete className="text-2xl" />
                  </button>
                  
                </div>
                <div>
                <QuantitySelector 
              quantity={ product.quantity } 
              onQuantityChanged={ quantity => updateProductQuantity(product, quantity) }
            />
                </div>
              </div>
            </div>
          </div>
        ))}

        {itemsInCart === 0 && loaded === true && (
          <>
          <div className="flex items-center justify-center mt-40 ">
          <IoCartOutline size={40} className="mx-5" /><p>El carrito esta vacío</p>

          </div>
          </>
        )}
      </>
    );
  };

  const renderContent = () => {
    return (
      <Transition appear show={isVisable} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={handleCloseMenu}
        >
          <div className="z-max fixed inset-y-0 right-0 w-full max-w-md outline-none focus:outline-none md:max-w-md">
            <Transition.Child
              as={Fragment}
              enter="transition duration-100 transform"
              enterFrom="opacity-0 translate-x-full"
              enterTo="opacity-100 translate-x-0"
              leave="transition duration-150 transform"
              leaveFrom="opacity-100 translate-x-0"
              leaveTo="opacity-0 translate-x-full"
            >
              <div className="relative z-20">
                <div className="overflow-hidden shadow-lg ring-1 ring-black/5">
                  <div className="relative h-screen bg-white">
                    <div className="hiddenScrollbar h-screen overflow-y-auto p-5">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold">
                          Carrito de compras
                        </h3>
                        <ButtonCircle3 onClick={handleCloseMenu}>
                          <MdClose className="text-2xl" />
                        </ButtonCircle3>
                      </div>
                      <div className="divide-y divide-neutral-300">
                        { renderProduct()}
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full bg-neutral-50 p-5">
                      <p className="flex justify-between">
                        <span>
                          <span className="font-medium">Subtotal</span>
                          <span className="block text-sm text-neutral-500">
                            Gastos de envío e impuestos calculados en el momento
                            de la compra.
                          </span>
                        </span>
                        <span className="text-xl font-medium">{currencyFormat(subTotal)}</span>
                      </p>
                      <div className="mt-5 flex items-center gap-5">
                        {/* <ButtonPrimary
                          href="/checkout"
                          onClick={handleCloseMenu}
                          className="w-full flex-1"
                        >
                          Pagar
                        </ButtonPrimary> */}
                        <ButtonSecondary
                          onClick={handleCloseMenu}
                          href="/cart"
                          className="w-full flex-1 border-2 border-primary text-primary"
                        >
                          Ver carrito
                        </ButtonSecondary>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter=" duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave=" duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-neutral-900/60" />
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    );
  };

  return (
    <>
      <Link
        onMouseEnter={handleOpenMenu}
        className="focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        href={totalItemsInCart === 0 && loaded ? "/empty" : "/cart"}
      >
        <div className="relative">
          {loaded && totalItemsInCart > 0 && (
            <span className="absolute text-xs rounded-full px-1 font-bold top-2 right-2 bg-blue-500 text-white">
              {totalItemsInCart}
            </span>
          )}
          <FaShoppingCart />
        </div>
      </Link>

      {renderContent()}
    </>
  );
};

export default CartSideBar;
