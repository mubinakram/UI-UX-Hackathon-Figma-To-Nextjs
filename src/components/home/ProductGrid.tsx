import React from "react";
import ProductCard from "../ProductCard";
import { Button } from "../ui/button";

interface Product {
  id: string;
  name: string;
  shortdescription: string;
  price: string;
  originalPrice?: string;
  discount?: string; // e.g., "-50%"
  badge?: string; // e.g., "New"
  imgSrc: string;
}

const products: Product[] = [
  {
    id: '1',
    name: "Syltherine",
    shortdescription: "Stylish cafe chair",
    price: "Rp 2.500.000",
    originalPrice: "Rp 3.500.000",
    discount: "-30%",
    imgSrc: "/products/image 1.png",
  },
  {
    id: '2',
    name: "Leviosa",
    shortdescription: "Stylish cafe chair",
    price: "Rp 2.500.000",
    imgSrc: "/products/image 2.png",
  },
  {
    id: '3',
    name: "Lolito",
    shortdescription: "Luxury big sofa",
    price: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
    discount: "-50%",
    imgSrc: "/products/image 3.png",
  },
  {
    id: '4',
    name: "Respira",
    shortdescription: "Outdoor bar table and stool",
    price: "Rp 500.000",
    badge: "New",
    imgSrc: "/products/image 4.png",
  },
  {
    id: '5',
    name: "Grifo",
    shortdescription: "Night lamp",
    price: "Rp 1.500.000",
    imgSrc: "/products/image 5.png",
  },
  {
    id: '6',
    name: "Muggo",
    shortdescription: "Small mug",
    price: "Rp 150.000",
    badge: "New",
    imgSrc: "/products/image 6.png",
  },
  {
    id: '7',
    name: "Pingky",
    shortdescription: "Cute bed set",
    price: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
    discount: "-50%",
    imgSrc: "/products/image 7.png",
  },
  {
    id: '8',
    name: "Potty",
    shortdescription: "Minimalist flower pot",
    price: "Rp 500.000",
    badge: "New",
    imgSrc: "/products/image 8.png",
  },
];

const ProductGrid = ({noOfCards}:{noOfCards?:number}) => {
    const only4Products = products.slice(0, 4);
  return (
    <section className="py-12 bg-white">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800">Our Products</h2>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
        {noOfCards ? (
            only4Products.map((product) => (
                <ProductCard key={product.id} {...product} />
                ))
        ) : (products.map((product) => (
        <ProductCard key={product.id} {...product} />
        )))}
      </div>

      {/* Show More Button */}
      <div className="text-center mt-8">
        <Button variant={'fBtn2'} className="rounded-none border-yellow-700 text-yellow-700" >Show More</Button>
      </div>
    </section>
  );
};

export default ProductGrid;
