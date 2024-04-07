
import {ProductCard} from '@/components';
//import { initialData } from '@/seed/seed';
import {Heading} from '@/components';
import { getPaginatedProductsWithImages } from "@/actions";
import { $Enums } from '@prisma/client';


export const SectionMoreProducts = async() => {

  //const products = initialData.products;
  const page = undefined; // Establece page como undefined
  const { products } = await getPaginatedProductsWithImages({ page });

  // Función para mezclar un array de manera aleatoria
function shuffleArray(array: { images: string[]; ProductImage: { url: string; }[]; id: string; title: string; description: string; inStock: number; price: number; sizes: $Enums.Size[]; slug: string; tags: string[]; gender: $Enums.Gender; categoryId: string; }[]) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

const shuffledProducts = shuffleArray(products);

  return (
    <div>
      <Heading className="mb-0">Productos destacados</Heading>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {shuffledProducts.slice(0, 3).map((product) => (
          <ProductCard key={product.title} product={product} />
        ))}
      </div>
    </div>
  );
};


