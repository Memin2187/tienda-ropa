import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineDelete } from 'react-icons/ai';
import { TbBrandPaypal } from 'react-icons/tb';

import {LikeButton} from '@/components';
import { initialData } from '@/seed/seed';

import {ButtonPrimary} from '@/components';
import {ButtonSecondary} from '@/components';
import {InputNumber} from '@/components';
import { Product } from '@/interfaces';


const seedProducts = initialData.products;

const renderProduct = (item: Product) => {
  const { title, images, price, slug } = item;

  return (
    <div key={title} className="flex py-5 last:pb-0">
      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl">
        <Image
          fill
          src={`/products/${images[0]}`}
          alt={title}
          className="h-full w-full object-cover object-top"
        />
        <Link className="absolute inset-0" href={`/products/${slug}`} />
      </div>

      <div className="ml-4 flex flex-1 flex-col justify-between">
        <div>
          <div className="flex justify-between ">
            <div>
              <h3 className="font-medium ">
                <Link href={`/products/${slug}`}>{title}</Link>
              </h3>
            </div>
            <span className=" font-medium">${price}.00</span>
          </div>
        </div>
        <div className="flex w-full items-end justify-between text-sm">
          <div className="flex items-center gap-3">
            <LikeButton />
            <AiOutlineDelete className="text-2xl" />
          </div>
          <div>
            <InputNumber />
          </div>
        </div>
      </div>
    </div>
  );
};

const CartPage = () => {
  return (
    <div className="nc-CartPage">
      <main className="container py-16 lg:pb-28 lg:pt-20 ">
        <div className="mb-14">
          <h2 className="block text-2xl font-medium sm:text-3xl lg:text-4xl">
            Tu carrito
          </h2>
        </div>

        <hr className="my-10 border-neutral-300 xl:my-12" />

        <div className="flex flex-col lg:flex-row">
          <div className="w-full divide-y divide-neutral-300 lg:w-[60%] xl:w-[55%]">
            {seedProducts.slice(0, 3).map((item) => renderProduct(item))}
          </div>
          <div className="my-10 shrink-0 border-t border-neutral-300 lg:mx-10 lg:my-0 lg:border-l lg:border-t-0 xl:mx-16 2xl:mx-20" />
          <div className="flex-1">
            <div className="sticky top-28">
              <h3 className="text-2xl font-semibold">Resumen</h3>
              <div className="mt-7 divide-y divide-neutral-300 text-sm">
                <div className="flex justify-between pb-4">
                  <span>Subtotal</span>
                  <span className="font-semibold">$249.00</span>
                </div>
                <div className="flex justify-between py-4">
                  <span>Entrega estimada</span>
                  <span className="font-semibold">Gratis</span>
                </div>
                <div className="flex justify-between py-4">
                  <span>Impuestos Estimados</span>
                  <span className="font-semibold">$24.90</span>
                </div>
                <div className="flex justify-between pt-4 text-base font-semibold">
                  <span>Total</span>
                  <span>$276.00</span>
                </div>
              </div>
              <ButtonPrimary href="/checkout/address" className="mt-8 w-full">
                Comprar Ahora
              </ButtonPrimary>
              <ButtonSecondary
                className="mt-3 inline-flex w-full items-center gap-1 border-2 border-primary text-primary"
                href="/checkout/address"
              >
                <TbBrandPaypal className="text-2xl" />
                PayPal
              </ButtonSecondary>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CartPage;
