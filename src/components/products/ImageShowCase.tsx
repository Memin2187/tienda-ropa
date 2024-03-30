'use client';

import Image from 'next/image';
import { pathOr } from 'ramda';
import type { FC } from 'react';
import React, { useState } from 'react';

interface ImageShowCaseProps {
  image: string[];
}

export const ImageShowCase: FC<ImageShowCaseProps> = ({ image }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div className="space-y-5 rounded-2xl p-2">
      <div className="relative overflow-hidden rounded-2xl md:h-[500px]">
        <Image
          src={`/products/${image[activeImageIndex]}`}
          alt={`/products/${image}`}
          className="h-full w-full object-cover object-top"
          width={1000}
          height={1000}
        />
      </div>
      <div className="grid grid-cols-4 gap-5">
        {image.map((shot, index) => (
          <div
            key={shot}
            className={`${
              activeImageIndex === index ? 'border-2 border-primary' : ''
            } h-[100px] overflow-hidden rounded-lg`}
          >
            <button
              className="h-full w-full"
              type="button"
              onClick={() => setActiveImageIndex(index)}
            >
              <Image
                src={`/products/${shot}`}
                alt={shot}
                className="h-full w-full object-cover object-top"
                width={500}
                height={500}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};


