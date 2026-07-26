'use client';

import { useState } from 'react';

interface PortfolioFilterProps {
  onFilterChange: (filter: string) => void;
}

const PortfolioFilter = ({ onFilterChange }: PortfolioFilterProps) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'wedding', label: 'Wedding' },
    { id: 'portrait', label: 'Portrait' },
    { id: 'event', label: 'Event' },
    { id: 'commercial', label: 'Commercial' },
  ];

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => handleFilterClick(filter.id)}
          className={`px-6 py-3 rounded-full capitalize transition-colors ${
            activeFilter === filter.id
              ? 'bg-dark-maroon text-white'
              : 'bg-white text-dark-maroon border border-dark-maroon hover:bg-dark-maroon hover:text-white'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default PortfolioFilter;