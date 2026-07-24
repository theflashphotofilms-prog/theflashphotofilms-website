'use client';

import { useState } from 'react';

interface PortfolioFilterProps {
  onFilterChange: (filter: string) => void;
}

const PortfolioFilter = ({ onFilterChange }: PortfolioFilterProps) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Work' },
    { id: 'wedding', label: 'Weddings' },
    { id: 'portrait', label: 'Portraits' },
    { id: 'events', label: 'Events' },
    { id: 'landscape', label: 'Landscapes' },
    { id: 'commercial', label: 'Commercial' },
  ];

  const handleFilterClick = (filterId: string) => {
    setActiveFilter(filterId);
    onFilterChange(filterId);
  };

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => handleFilterClick(filter.id)}
          className={`px-5 py-2 rounded-full text-base font-medium transition-colors duration-300 ${
            activeFilter === filter.id
              ? 'bg-dark-maroon text-white'
              : 'bg-white text-dark-maroon border border-dark-maroon hover:bg-dark-maroon hover:text-white'
          }`}
          aria-pressed={activeFilter === filter.id}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default PortfolioFilter;