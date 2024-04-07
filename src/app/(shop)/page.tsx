export const revalidate = 60; // 60 segundos
import { AllProducts } from "@/components";

import { getPaginatedProductsWithImages } from "@/actions";
import { redirect } from "next/navigation";
import { Pagination } from "@/components";



interface Props {
  searchParams: {
    page?: string;
  };
}

const page = async ({ searchParams }: Props) => {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const { products, currentPage, totalPages } =
    await getPaginatedProductsWithImages({ page });

  if (products.length === 0) {
    redirect("/auth/login");
  }
  

  return (
    <div className="container mb-20">
      <AllProducts products={products} gender={""} />

      <Pagination totalPages={totalPages} />
    </div>
  );
};

export default page;
