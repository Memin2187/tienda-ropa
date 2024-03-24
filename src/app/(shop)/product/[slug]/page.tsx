import Link from 'next/link';
import { initialData } from '@/seed/seed';  
import { ButtonCircle3 } from '@/components';
import { MdArrowBack } from 'react-icons/md';
import SectionProductHeader from './SectionProductHeader';
import { pathOr } from 'ramda';
import { SectionMoreProducts } from '@/components';

interface Props {
  params: {
    slug: string;
  };
}


const page = ({params}:Props) => {


  const { slug } = params;

  console.log(slug)
  const selectedProduct = initialData.products.find( product => product.slug === slug );


  return (
    <div className="container">
      <Link href="/" className="mb-10">
        <ButtonCircle3 size="w-10 h-10" className="border border-neutral-300">
          <MdArrowBack className="text-2xl" />
        </ButtonCircle3>
      </Link>

      <div className="mb-20">
        <SectionProductHeader
          images={pathOr([], ['images'], selectedProduct)}
          productName={pathOr('', ['title'], selectedProduct)}
          price={pathOr(0, ['price'], selectedProduct)}
          reviews={pathOr(0, ['reviews'], selectedProduct)}
          description={pathOr('', ['description'], selectedProduct)}
          slug={pathOr('', ['slug'], selectedProduct)}
          sizes={pathOr([], ['sizes'], selectedProduct)}
         
        
        />
       
      </div>
      <div className="mb-28">
        <SectionMoreProducts 
        
        />
      </div>
    </div>
  )
}

export default page