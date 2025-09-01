
import React from 'react';
import type { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-300">
      <div className="flex justify-center mb-4">
        {service.icon}
      </div>
      <h3 className="text-2xl font-bold text-primary mb-2">{service.title}</h3>
      <p className="text-accent">{service.description}</p>
    </div>
  );
};

export default ServiceCard;
