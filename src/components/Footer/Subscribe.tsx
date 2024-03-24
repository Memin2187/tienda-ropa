import {ButtonPrimary} from '@/components';

import {Input} from '@/components';

const Subscribe = () => {
  return (
    <div className="space-y-5">
      <h1
        className="text-4xl font-semibold md:text-[80px]"
        style={{ lineHeight: '1em' }}
      >
        Clommerce
      </h1>
      <p className="w-[80%] text-sm text-neutral-200">
      Suscríbete y obtendras descuentos adicionales
      </p>

      <div className="flex items-center rounded-full border border-neutral-500">
        <Input
          type="text"
          sizeClass="h-12 px-4 py-3"
          rounded="rounded-md"
          className="border-2 bg-transparent placeholder:text-sm
           placeholder:text-neutral-200 focus:border-transparent"
          placeholder="Tu correo electrónico"
        />
        <ButtonPrimary className='rounded-md'>Suscríbete</ButtonPrimary>
      </div>
    </div>
  );
};

export default Subscribe;
