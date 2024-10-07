'use client'

import { useState } from 'react'
import { Star, ShoppingCart, Heart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ProductPage() {
  const [mainImage, setMainImage] = useState("/placeholder.svg?height=400&width=400")
  const images = [
    "/placeholder.svg?height=100&width=100",
    "/placeholder.svg?height=100&width=100",
    "/placeholder.svg?height=100&width=100",
    "/placeholder.svg?height=100&width=100"
  ]

  return (
    (<div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
            <img
              src={mainImage}
              alt="Main product image"
              className="h-full w-full object-cover" />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {images.map((img, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-lg bg-gray-100 cursor-pointer"
                onClick={() => setMainImage(img)}>
                <img
                  src={img}
                  alt={`Product image ${index + 1}`}
                  className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">Elegant Timepiece</h1>
            <p className="text-xl text-muted-foreground">Classic Chronograph Watch</p>
          </div>
          <div className="flex items-center space-x-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-primary" />
            ))}
            <span className="text-sm text-muted-foreground">(128 reviews)</span>
          </div>
          <div>
            <p className="text-3xl font-bold">$299.99</p>
            <p className="text-sm text-muted-foreground">Free shipping on orders over $500</p>
          </div>
          <div className="space-y-2">
            <Button className="w-full">
              <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
            </Button>
            <Button variant="outline" className="w-full">
              <Heart className="mr-2 h-4 w-4" /> Add to Wishlist
            </Button>
          </div>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Product Highlights</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Swiss-made movement</li>
                <li>Water-resistant up to 100m</li>
                <li>Sapphire crystal glass</li>
                <li>Stainless steel case and band</li>
              </ul>
            </CardContent>
          </Card>
          <Tabs defaultValue="description">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-4">
              <p>
                This elegant timepiece combines classic design with modern functionality. 
                Perfect for both formal occasions and everyday wear, its a testament to 
                fine craftsmanship and attention to detail.
              </p>
            </TabsContent>
            <TabsContent value="specifications" className="mt-4">
              <ul className="list-disc list-inside space-y-1">
                <li>Case diameter: 42mm</li>
                <li>Movement: Automatic</li>
                <li>Power reserve: 48 hours</li>
                <li>Band material: Stainless steel</li>
              </ul>
            </TabsContent>
            <TabsContent value="shipping" className="mt-4">
              <p>
                We offer free standard shipping on all orders over $500. 
                Expedited and international shipping options are available at checkout.
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>)
  );
}