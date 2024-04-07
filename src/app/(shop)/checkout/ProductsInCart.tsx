'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
//import { initialData } from '@/seed/seed';
import { useCartStore } from '@/store';
import { currencyFormat } from "@/utils";

//const productsInCart = initialData.products;

const ProductsInCart = () => {
  const [loaded, setLoaded] = useState(false);
  const productsInCart = useCartStore( state => state.cart );
  

  useEffect(() => {
    setLoaded(true);
  }, []);

  if( !loaded ) {
    return <p>Loading...</p>
  }

  console.log(productsInCart)

  return (
    <>
      <div className="mt-10 border-t border-neutral-300 pt-6 text-sm">
        {productsInCart.map((product) => (
          <div
            key={`${product.slug}-${product.size}`}
            className="flex py-5   border-b border-neutral-300"
          >
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl">
              <Image
                fill
                src={`/products/${product.image}`}
                alt={product.title}
                className="h-full w-full object-cover object-top"
              />
              <Link
                className="absolute inset-0"
                href={`/product/${product.slug}`}
              />
            </div>

            <div className="ml-4 flex flex-1 flex-col justify-between">
              <div>
                <div className="flex justify-between ">
                  <div>
                    <h3 className="font-medium ">
                      <Link href={`/product/${product.slug}`}>
                        {product.size}-{product.title} <span className="font-bold text-lg">({ product.quantity })</span>
                      </Link>
                    </h3>
                  </div>
                  <span className=" font-medium">{ currencyFormat(product.price * product.quantity )  }</span>
                </div>
              </div>
            </div>
           
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductsInCart;
