

export async function getProduct( idproduct ) {
    
    const response = await fetch(`https://fakestoreapi.com/products/${idproduct}`)
    const data = await response.json()
    
    return data
  }

  