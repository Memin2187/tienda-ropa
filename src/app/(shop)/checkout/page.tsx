

import ProductsInCart from "./ProductsInCart";
import PlaceOrder from "./PlaceOrder";
import Link from "next/link";

const CheckoutPage = () => {
  const renderLeft = () => {
    return (
      <div className="space-y-8">
        <span className="text-xl p-8 ">Ajustar elementos</span>
        <Link href="/cart" className="underline mb-5">
          Editar carrito
        </Link>
        <ProductsInCart />
      </div>
    );
  };

  return (
    <div className="nc-CheckoutPage">
      <main className="container py-16 lg:pb-28 lg:pt-20 ">
        <div className="mb-16">
          <h2 className="block text-2xl font-semibold sm:text-3xl lg:text-4xl "></h2>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">{renderLeft()}</div>

          <div className="my-10 shrink-0 border-t border-neutral-300 lg:mx-10 lg:my-0 lg:border-l lg:border-t-0 xl:lg:mx-14 2xl:mx-16 " />

          <PlaceOrder />
        </div>
      </main>
    </div>
  );
};

export default CheckoutPage;
