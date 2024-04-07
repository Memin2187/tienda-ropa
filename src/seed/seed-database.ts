import { initialData } from "./seed";
import { countries } from "./seed-countries";
import prisma from "../lib/prisma";


async function main() {

  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();


  const { products, categories, users } = initialData;
  //catagorias
  const categoriesData = categories.map((name) => ({ name }));

  await prisma.category.createMany({
    data: categoriesData,
  });

  const categoriesDB = await prisma.category.findMany();

    
  const categoriesMap = categoriesDB.reduce( (map, category) => {
    map[ category.name.toLowerCase()] = category.id;
    return map;
  }, {} as Record<string, string>); 

  await prisma.country.createMany({
    data: countries
  });

  
  //products
  products.forEach(async (product) => {
    const { type, images, ...rest } = product;

    const dbProduct = await prisma.product.create({
     data:{
        ...rest,
        categoryId: categoriesMap[type],
        
     }
    });

    //Images
    const imagesData = images.map((image) => ({
      url: image,
      productId: dbProduct.id,
    }));

    await prisma.productImage.createMany({
      data: imagesData,
    });
  });

  //users
  await prisma.user.createMany({
    data: users
  });


  console.log("seed ejecutado correctamente");
}

(() => {
  if (process.env.NODE_ENV === "production") return;
  main();
})();
