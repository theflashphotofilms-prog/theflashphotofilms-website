'use client';

import { useState } from 'react';

const PortfolioFilter = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'wedding', label: 'Weddings' },
    { id: 'pre-wedding', label: 'Pre-Wedding' },
    { id: 'engagement', label: 'Engagements' },
    { id: 'baby-shower', label: 'Baby Showers' },
    { id: 'corporate', label: 'Corporate' },
    { id: 'portraits', label: 'Portraits' },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {filters.map((filter) => (
        <button
          key={filter.id}
          className={`px-6 py-3 rounded-xl font-bold transition-colors duration-300 ${
            activeFilter === filter.id
              ? 'bg-[#3A5A40] text-white'
              : 'bg-white text-[#3A5A40] border border-[#3A5A40] hover:bg-[#3A5A40] hover:text-white'
          }`}
          onClick={() => setActiveFilter(filter.id)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default PortfolioFilter;