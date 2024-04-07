export interface Product {
  id: string;
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: ValidSizes[];
  slug: string;
  tags: string[];
  title: string;
  //type: ValidTypes;
  gender: Category
}
export type Category = 'hombres'|'mujeres'|'infantil'|'unisex';
export type ValidSizes = 'XS'|'S'|'M'|'L'|'XL'|'XXL'|'XXXL';
export type ValidTypes = 'shirts'|'pants'|'hoodies'|'hats';


export interface CartProduct {
  id: string;
  slug: string;
  title: string;
  price: number;
  quantity: number;
  size: ValidSizes;
  image: string;
}


export type FormInputs = {
  firstName: string;
  lastName: string;
  address: string;
  postalCode: string;
  city: string;
  country: string;
  phone: string;
  rememberAddress: boolean;
};

export interface FormInputs2 {
  title: string;
  slug: string;
  description: string;
  price: number;
  inStock: number;
  sizes: string[];
  tags: string;
  gender: "hombres" | "mujeres" | "infantil" | "unisex";
  categoryId: string;

  images?: FileList;
}

export interface Address {
  firstName: string;
  lastName: string;
  address: string;
  postalCode: string;
  city: string;
  country: string;
  phone: string;
}

export interface Country {
  id: string;
  name: string;
}

export interface ProductImage {
  id: number;
  url: string;
  productId: string;
}


