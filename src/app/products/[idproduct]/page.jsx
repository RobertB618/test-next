import Product from "@/components/product"

export default function ProductPage({ params: { idproduct } }) {
  return (
    <Product idproduct={idproduct} />
  )
}
