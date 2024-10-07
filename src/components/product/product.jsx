import { getProduct } from "@/server/queries"
import { ProductPage } from "@/components/product-page"

export default async function Product({idproduct}) {
  const product = await getProduct(idproduct)
  console.log(product)
  return (
  
    <ProductPage {...product} />
  )
}

