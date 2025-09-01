
import React from 'react';
import { PROMOTIONS } from '../constants';

const PromotionsPage: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">Current Promotions</h1>
          <p className="text-lg text-accent max-w-3xl mx-auto">
            Don't miss out on our special offers! Use the codes at checkout to save big.
          </p>
        </div>
        
        <div className="space-y-12">
          {PROMOTIONS.map((promo, index) => (
            <div key={promo.id} className={`bg-white rounded-lg shadow-xl overflow-hidden flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <div className="md:w-1/2">
                <img className="w-full h-64 md:h-full object-cover" src={promo.imageUrl} alt={promo.title} />
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-primary mb-3">{promo.title}</h2>
                <p className="text-accent mb-6 text-lg">{promo.description}</p>
                <div className="flex items-center space-x-4">
                  <span className="text-xl font-semibold text-primary">CODE:</span>
                  <span className="bg-highlight text-white font-bold py-2 px-4 rounded-md text-lg">{promo.code}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromotionsPage;
