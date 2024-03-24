'use client'
import { useState, type FC } from 'react';
import { QuantitySelector } from '@/components';
import { ValidSizes } from '@/interfaces';

import { MdStar } from 'react-icons/md';


import {ImageShowCase} from '@/components';
import {SizeSelect} from '@/components';
import {ButtonPrimary} from '@/components';
import {Heading} from '@/components';
import {Variant} from '@/components';
import {StockLabel} from '@/components';


interface SectionProductHeaderProps {
  images: string[];
  productName: string;
  price: number;
  reviews: number;
  description: string;
  slug:string,
  sizes: ValidSizes[],
  
}



//AddToCart
const SectionProductHeader: FC<SectionProductHeaderProps> = ({
  images,
  productName,
  price,
  reviews,
  description,
  slug,
  sizes,

  
}) => {
 
  
  const [size,setSize] = useState<ValidSizes | undefined>()
  const [quantity,setQuantity] = useState<number>(1)

 
  return (
    <div className="items-stretch justify-between space-y-10 lg:flex lg:space-y-0">
      <div className="basis-[47%]">
        <ImageShowCase image={images} />
      </div>

      <div className="basis-[48%] space-y-7">
        <Heading className="mb-0" isMain>
          {productName}
        </Heading>
        <StockLabel slug={slug}/>
        <p className="text-lg text-neutral-500">{description}</p>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-yellow-400">
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
          </div>
          <span className="text-sm text-neutral-500">({reviews}k)Reseñas</span>
        </div>
        <p className="text-2xl font-semibold text-secondary">${price}.00</p>
        <QuantitySelector 
          quantity={quantity}
          onQuantityChanged={setQuantity}
          />
          {/* {posted && !size && (
        <span className="mt-2 text-red-500 fade-in">
          Debe de seleccionar una talla*
        </span>
      )} */}
        <SizeSelect 
        selectedSize={size}
        availableSizes={sizes}
        onSizeChanged={setSize}
        />

        <div>
          <h4 className="mb-5 font-medium">Colores disponibles</h4>
          <Variant sizes="w-8 h-8" />
        </div>
       

        <div className="mt-5 flex items-center gap-5">
          {/* <ButtonPrimary href="/checkout" className="w-3/5">
            Comprar ahora
          </ButtonPrimary> */}
          <ButtonPrimary className="w-3/5"
           href={'/cart'}
          >
            Agregar al carrito
          </ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default SectionProductHeader;
