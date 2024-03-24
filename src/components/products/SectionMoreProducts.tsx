
import {ProductCard} from '@/components';
import { initialData } from '@/seed/seed';
import {Heading} from '@/components';

export const SectionMoreProducts = () => {

  const products = initialData.products;

  return (
    <div>
      <Heading className="mb-0">Productos destacados</Heading>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.title} product={product} />
        ))}
      </div>
    </div>
  );
};


