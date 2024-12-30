import React from 'react';

export function TopNavigation() {
  return (
    <nav className="bg-vanilla-red text-white py-2 px-4">
      <div className="max-w-7xl mx-auto flex justify-end items-center">
        <div className="flex gap-32 mr-auto pl-32">
          <div className="flex flex-col text-[11px] leading-[14px]">
            <span>Vanilla Visa® Gift Card</span>
            <span>Vanilla Mastercard® Gift Card</span>
          </div>
          <div className="flex flex-col text-[11px] leading-[14px]">
            <span>Vanilla Discover® Gift Card</span>
            <span>Vanilla Gift Visa® Virtual Account</span>
          </div>
        </div>
        <div className="flex gap-4 text-[11px]">
          <span>Check Balance</span>
          <div className="flex items-center gap-1">
            <span>Have a Problem?</span>
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
}