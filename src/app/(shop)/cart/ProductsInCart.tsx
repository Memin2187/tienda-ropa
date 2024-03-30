"use client";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineDelete } from "react-icons/ai";

import { LikeButton } from "@/components";

import { useCartStore } from "@/store";
import { useEffect, useState } from "react";
import { QuantitySelector } from "@/components";

const ProductsInCart = () => {
  const updateProductQuantity = useCartStore(
    (state) => state.updateProductQuantity
  );
  const removeProduct = useCartStore((state) => state.removeProduct);
  const [loaded, setLoaded] = useState(false);

  const productsInCart = useCartStore((state) => state.cart);


  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) {
    return <p>Loading...</p>;
  }

 
  return (
    <>
      {productsInCart.map((product) => (
        <div
          key={`${product.slug}-${product.size}`}
          className="flex py-5 last:pb-0"
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
              href={`/product${product.slug}`}
            />
          </div>

          <div className="ml-4 flex flex-1 flex-col justify-between">
            <div>
              <div className="flex justify-between ">
                <div>
                  <h3 className="font-medium ">
                    <Link href={`/product/${product.slug}`}>
                      {product.size}-{product.title}
                    </Link>
                  </h3>
                </div>
                <span className=" font-medium">${product.price}.00</span>
              </div>
            </div>
            <div className="flex w-full items-end justify-between text-sm">
              <div className="flex items-center gap-3">
                <LikeButton />
                <button onClick={() => removeProduct(product)}>
                  <AiOutlineDelete className="text-2xl" />
                </button>
              </div>
              <div>
                <QuantitySelector
                  quantity={product.quantity}
                  onQuantityChanged={(quantity) =>
                    updateProductQuantity(product, quantity)
                  }
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductsInCart;
