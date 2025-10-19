import { useState } from 'react';

interface FilterOption {
  value: string;
  label: string;
}

interface FilterProps {
  label: string;
  options: FilterOption[];
  selectedValue: string;
  onValueChange: (value: string) => void;
  className?: string;
}

export default function Filter({
  label,
  options,
  selectedValue,
  onValueChange,
  className = ''
}: FilterProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      <label className="text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <select
        value={selectedValue}
        onChange={(e) => onValueChange(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}