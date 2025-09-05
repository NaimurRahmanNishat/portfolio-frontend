import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface SortDropdownProps {
  sortBy: "newest" | "oldest" | "title-asc" | "title-desc";
  onSortChange: (sortBy: "newest" | "oldest" | "title-asc" | "title-desc") => void;
}

const SortDropdown: React.FC<SortDropdownProps> = ({ sortBy, onSortChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'title-asc', label: 'Title A-Z' },
    { value: 'title-desc', label: 'Title Z-A' },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white hover:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm min-w-[160px] justify-between"
      >
        <span className="text-sm">
          {sortOptions.find((opt) => opt.value === sortBy)?.label || "Sort By"}
        </span>
        <ChevronDown 
          size={16} 
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-50 overflow-hidden">
          {sortOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                onSortChange(option.value as any);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-800 transition-colors duration-200 ${
                sortBy === option.value ? 'bg-purple-600 text-white' : 'text-gray-300'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default SortDropdown;
