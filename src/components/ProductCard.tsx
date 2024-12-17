import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductCardProps {
  imgSrc: string;
  name: string;
  price: string;
  id:string;
  discount?:string;
  badge?:string;
  originalPrice?:string;
  shortdescription:string
}

const ProductCard: React.FC<ProductCardProps> = ({ imgSrc, name, price,discount,id,badge,originalPrice,shortdescription }) => {
  return (
    <Link href={`/shop/${id}`}>
              <div className="relative group hover:shadow-lg rounded-md overflow-hidden">
            {/* Image */}
            <div className="relative">
              <img
                src={imgSrc}
                alt={name}
                className="w-full h-[300px] object-cover"
              />
              {discount && (
                <span className="absolute top-4 right-4 bg-red-500 text-white text-sm px-2 py-4 rounded-full">
                  {discount}
                </span>
              )}
              {badge && (
                <span className="absolute top-4 left-4 bg-green-500 text-white text-sm px-2 py-4 rounded-full">
                  {badge}
                </span>
              )}
            </div>

            {/* Content */}
            <div className="p-4 bg-[#F4F5F7]">
              <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
              <p className="text-gray-600 text-sm mb-2">{shortdescription}</p>
              <div className="flex items-center gap-2">
                <span className="text-gray-800 font-bold">{price}</span>
                {originalPrice && (
                  <span className="text-gray-400 line-through">{originalPrice}</span>
                )}
              </div>
            </div>

            {/* Hover Action */}
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
              <button className="text-yellow-500 bg-white px-10 py-3">Add to cart</button>
            </div>
          </div>
    </Link>
  );
};

export default ProductCard;
