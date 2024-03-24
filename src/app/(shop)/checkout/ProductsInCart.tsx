'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { initialData } from '@/seed/seed';

const productsInCart = initialData.products;

const ProductsInCart = () => {
  const [loaded, setLoaded] = useState(false);

  

  useEffect(() => {
    setLoaded(true);
  }, []);

  if( !loaded ) {
    return <p>Loading...</p>
  }

  return (
    <>
      <div className="mt-10 border-t border-neutral-300 pt-6 text-sm">
        {productsInCart.slice(0, 3).map((product) => (
          <div
            key={`${product.slug}-${product.sizes}`}
            className="flex py-5   border-b border-neutral-300"
          >
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl">
              <Image
                fill
                src={`/products/${product.images[0]}`}
                alt={product.title}
                className="h-full w-full object-cover object-top"
              />
              <Link
                className="absolute inset-0"
                href={`/products/${product.slug}`}
              />
            </div>

            <div className="ml-4 flex flex-1 flex-col justify-between">
              <div>
                <div className="flex justify-between ">
                  <div>
                    <h3 className="font-medium ">
                      <Link href={`/products/${product.slug}`}>
                        {product.sizes}-{product.title} <span className="font-bold text-lg">({ product.inStock })</span>
                      </Link>
                    </h3>
                  </div>
                  <span className=" font-medium">255.00</span>
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
