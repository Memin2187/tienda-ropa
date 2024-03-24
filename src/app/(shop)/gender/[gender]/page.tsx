import { initialData } from '@/seed/seed';
import { Category } from '@/interfaces';
import { AllProducts } from '@/components';

const seedProducts = initialData.products;

interface Props {
    params: {
      gender: Category;
    }
  }


const page = ({params}:Props) => {

    const { gender } = params;
    const products = seedProducts.filter( product => product.gender === gender );

  return (
    <>
    <AllProducts products={products}/>
    
    </>
  )
}

export default page