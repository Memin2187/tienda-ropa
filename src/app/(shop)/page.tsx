import { AllProducts } from "@/components"
import { initialData } from '@/seed/seed';

const products = initialData.products;

const page = () => {
  return (
    <div className="container mb-20">
      <AllProducts
      products={products}
      />
    </div>
  )
}

export default page