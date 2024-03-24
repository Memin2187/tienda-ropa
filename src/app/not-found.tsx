import {ButtonPrimary} from "@/components";


const Page404 = () => {
  return (
    <div className="container">
      <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-5 py-24">
        <h1
          className="text-[100px] font-extrabold text-primary"
          style={{ lineHeight: '1em' }}
        >
          404
        </h1>
        <h4 className="text-4xl font-semibold">Página no Encontrada</h4>
        <p className="text-neutral-500">
          La página que buscas no existe o ha sido removida.
        </p>
        <div className="flex items-center justify-center gap-5">
          <ButtonPrimary href='/' sizeClass="px-5 py-4">ir a Inicio</ButtonPrimary>
         
        </div>
      </div>
    </div>
  );
};

export default Page404;
