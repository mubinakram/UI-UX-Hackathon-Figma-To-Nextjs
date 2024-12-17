import React from 'react';
import { Trophy, ShieldCheck, Truck,  Headphones } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Trophy />,
    title: 'High Quality',
    description: 'Premium materials crafted',
  },
  {
    icon: <ShieldCheck />,
    title: 'Warranty Protection',
    description: '2-year coverage',
  },
  {
    icon: <Truck />,
    title: 'Free Shipping',
    description: 'Orders over $150',
  },
  {
    icon: <Headphones />,
    title: '24/7 Support',
    description: 'Dedicated support',
  }
];

const DeliveryServices: React.FC = () => {
  return (
    <section className='bg-[#FAF3EA]'>
    <div className="container mx-auto px-6 py-20 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="flex items-center space-x-4 p-4   "
          >
            <div className={`p-2 rounded-full bg-opacity-10 `}>
              {React.cloneElement(feature.icon as React.ReactElement, {
                size: 28,
                
              })}
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-800 mb-1">{feature.title}</h3>
              <p className="text-xs text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default DeliveryServices;