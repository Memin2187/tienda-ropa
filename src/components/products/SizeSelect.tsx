'use client';

import React, { useState } from 'react';
import { ValidSizes } from '@/interfaces';


interface Props{
  selectedSize?: ValidSizes
  availableSizes: ValidSizes[];
  onSizeChanged: ( size: ValidSizes) => void;
}


export const SizeSelect = ({selectedSize,availableSizes, onSizeChanged}:Props) => {
  //const [selected, setSelected] = useState('L');
  return (
    <div className="flex items-center gap-3">
      {availableSizes.map((size) => (
        <button
          key={size}
          type="button"
          onClick={() => onSizeChanged(size)}
          className={`w-16 rounded-lg px-3 py-2 text-2xl ${
            selectedSize === size
              ? 'bg-gray-400 text-white'
              : 'border border-neutral-400'
          }`}
        >
          {size}
        </button>
      ))}
      <span className="underline">Guía de tallas</span>
    </div>
  );
};


