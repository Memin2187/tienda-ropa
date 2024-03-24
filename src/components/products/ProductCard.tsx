import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

import { Product } from '@/interfaces';
//import type { ProductType } from '@/seed/types';
import {Variant} from '@/components';



interface ProductCardProps {
  product: Product;
  className?: string;
}



export const ProductCard: FC<ProductCardProps> = ({ product, className }) => {

  
  const { images,title, price, slug } = product;
  
  
  return (
    <div className={`relative rounded-xl ${className}`}>
      <div className="relative h-[430px] overflow-hidden rounded-xl">
        <Image
          src={`/products/${images[0]}`}
          alt={title}
          className="h-full w-full object-cover object-top"
          width={1000}
          height={1000}
        />
        <Link
          href={`/product/${slug}`}
          className="absolute inset-0 h-full w-full"
        />
      </div>
      <div className="mt-5 space-y-1">
        <div className="flex items-center justify-between">
          <Link href={`/product/${slug}`} className="text-2xl font-medium">
            {title}
          </Link>
          <Variant />
        </div>
        <p className="text-2xl font-medium text-secondary">${price}.00</p>
       
      </div>
    </div>
  );
};


