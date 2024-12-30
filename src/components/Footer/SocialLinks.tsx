import React from 'react';
import { Facebook, Instagram, PinIcon } from 'lucide-react';

export function SocialLinks() {
  return (
    <div className="flex flex-col gap-4">
      <a href="#" aria-label="Facebook">
        <Facebook className="w-6 h-6 text-gray-700 hover:text-vanilla-red" />
      </a>
      <a href="#" aria-label="Instagram">
        <Instagram className="w-6 h-6 text-gray-700 hover:text-vanilla-red" />
      </a>
      <a href="#" aria-label="Pinterest">
        <PinIcon className="w-6 h-6 text-gray-700 hover:text-vanilla-red" />
      </a>
    </div>
  );
}