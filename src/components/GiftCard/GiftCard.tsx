import React from 'react';
import { CardImage } from './CardImage';
import { CardDetails } from './CardDetails';

export function GiftCard() {
  return (
    <div className="w-[600px] h-[500px] relative overflow-hidden rounded-lg">
      <div className="absolute inset-0 bg-[#CAA550]" />
      <CardImage />
      <div className="absolute bottom-8 left-8 z-10">
        <CardDetails />
      </div>
    </div>
  );
}