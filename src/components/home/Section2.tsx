import React from 'react';

interface RangeItem {
  imageSrc: string;
  title: string;
}

const rangeItems: RangeItem[] = [
  { imageSrc: '/section2Img1.png', title: 'Dining' },
  { imageSrc: '/section2Img2.png', title: 'Living' },
  { imageSrc: '/section2Img3.png', title: 'Bedroom' },
];

const Section2 = () => {
  return (
    <section className="text-center py-12 bg-white">
      {/* Header */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Browse The Range</h2>
      <p className="text-gray-600 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {rangeItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-md overflow-hidden"
          >
            <img
              src={item.imageSrc}
              alt={item.title}
              className="w-full  object-cover"
            />
            <div className="py-4">
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section2;
