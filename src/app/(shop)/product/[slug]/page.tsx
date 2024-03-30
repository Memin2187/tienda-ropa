export const revalidate = 604800//7 dias
import Link from 'next/link';
import { Metadata, ResolvingMetadata } from "next";

import { ButtonCircle3 } from '@/components';
import { MdArrowBack } from 'react-icons/md';
import SectionProductHeader from './SectionProductHeader';
import { pathOr } from 'ramda';
import { SectionMoreProducts } from '@/components';
import { getProductBySlug } from '@/actions';


interface Props {
  params: {
    slug: string;
  };
}

// export async function generateMetadata(
//   { params }: Props,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   // read route params
//   const slug = params.slug;

//   // fetch data
//   const product = await getProductBySlug(slug);

 
//   return {
//     title: product?.title ?? "Producto no encontrado",
//     description: product?.description ?? "",
//     openGraph: {
//       title: product?.title ?? "Producto no encontrado",
//       description: product?.description ?? "",
//       // images: [], // https://misitioweb.com/products/image.png
//       images: [ `/products/${ product?.images[1] }`],
//     },
//   };
// }


const page = async({params}:Props) => {


  const { slug } = params;

  //console.log(slug)
  //const selectedProduct = initialData.products.find( product => product.slug === slug );

  const selectedProduct = await getProductBySlug(slug);

  if(!selectedProduct){
    return null
  }

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
          id={pathOr('', ['id'], selectedProduct)}
         
        
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


