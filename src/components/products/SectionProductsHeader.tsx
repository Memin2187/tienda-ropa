import Image from 'next/image';

import hero from '@/images/productsHero.jpg';
import {Heading} from '@/components';
import Link from 'next/link';

const categories = [
  'hombres',
  'mujeres',
  'infantil',
  'unisex',
];

export const SectionProductsHeader = () => {
  return (
    <div className="space-y-10">
      <div className="h-[220px] w-full overflow-hidden rounded-2xl">
        <Image
          src={hero}
          alt="hero products"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <Heading desc='En definitiva, la moda contemporánea es un viaje de autenticidad y descubrimiento. Cada prenda es una declaración, cada tendencia un capítulo en la historia colectiva de la expresión humana a través del vestir.' isMain className='text-center'>
        
      Productos
        
      </Heading>

      <div className='text-center'>
      <Link href={`/`} className='bg-black text-white font-bold w-full text-center rounded-lg p-2'>
        quitar filtro
        </Link>
      </div>

      <div className="hiddenScrollbar grid grid-cols-2 gap-5 overflow-y-hidden md:grid-cols-4">
        {categories.map((category) => (
          <Link href={`/gender/${category}`} 
          className="bg-black text-white w-full text-center font-bold rounded-lg p-2" key={category}>
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
};


