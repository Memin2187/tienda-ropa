"use client";
import {SectionProductsHeader} from "@/components";
import { useState } from "react";

import {ProductCard} from "@/components";

import { Product } from "@/interfaces";


interface Products {
  products: Product[];
}

export const AllProducts = ({ products }: Products) => {


  return (
    <div className="container mb-20">
      <div className="mb-10">
        <SectionProductsHeader />
      </div>

      <div className="relative flex flex-col" id="body">
        
        <div className="mb-10 shrink-0 border-t lg:mx-4 lg:mb-0 lg:border-t-0" />
        <div className="relative flex-1">
          <div className="mb-5 flex items-center justify-between">
            <span className="text-sm">{products.length} artículos</span>
          </div>
          <div className="grid flex-1 gap-10 sm:grid-cols-3 xl:grid-cols-3 2xl:gap-12 ">
            {products.map((item) => (
              <ProductCard product={item} key={item.slug} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
