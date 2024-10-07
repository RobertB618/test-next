import { getProducts } from "@/server/queries"
import  ProductCard from "./product-card"

import Image from "next/image"


export async function ProductListComponent() {
  const products = await getProducts()
  const productlist = products.map((product) =>  <ProductCard key={product.id} {...product}/>)
  
  return (
    (<div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {productlist}
      </div>
    </div>)
  );
}

