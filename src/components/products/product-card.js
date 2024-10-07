import { Card, CardContent } from "@/components/ui/card"

export default function ProductCard({ image, name, description, price }) {
  return (
    <Card className="overflow-hidden">
            <img
              src={image}
              alt={name}
              width={200}
              height={200}
              className="w-full h-48 object-cover" />
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">{name}</h2>
              <p className="text-gray-600 mb-2">{description}</p>
              <p className="text-lg font-bold text-primary">${price.toFixed(2)}</p>
            </CardContent>
          </Card>
  )
}
