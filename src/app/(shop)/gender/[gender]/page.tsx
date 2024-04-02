export const revalidate = 60; // 60 segundos

import { AllProducts, Pagination } from "@/components";
import { getPaginatedProductsWithImages } from "@/actions";
import { Gender } from "@prisma/client";

import { redirect } from "next/navigation";

interface Props {
  params: {
    gender: string;
  };
  searchParams: {
    page?: string;
  };
}

const page = async ({ params, searchParams }: Props) => {
  const { gender } = params;
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const { products, currentPage, totalPages } =
    await getPaginatedProductsWithImages({
      page,
      gender: gender as Gender,
    });

  if (products.length === 0) {
    redirect(`/gender/${gender}`);
  }

  return (
    <>
      <AllProducts products={products}
      gender={gender}
      />

      <Pagination totalPages={totalPages} />
    </>
  );
};

export default page;
