import React, { useState } from 'react';
import { Eye } from 'lucide-react';

export function CardForm() {
  const [showCardInfo, setShowCardInfo] = useState(false);

  return (
    <div className="bg-white rounded-lg p-8 w-[450px]">
      <h1 className="-ml-6 text-[#D81E1E] text-2xl font-medium mb-6">
        Manage Your Vanilla Gift Card
      </h1>
      <p className="text-gray-700 mb-8">
        Enter Card details to check balance, review transactions, or activate Gift Card
      </p>

      <form className="space-y-6">
        <div>
          <input
            type="text"
            placeholder="CARD NUMBER"
            className="w-full border border-gray-300 rounded p-3"
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-2">EXPIRATION DATE</label>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="MM"
              className="w-24 border border-gray-300 rounded p-3"
            />
            <input
              type="text"
              placeholder="YY"
              className="w-24 border border-gray-300 rounded p-3"
            />
            <input
              type="text"
              placeholder="CVV"
              className="w-24 border border-gray-300 rounded p-3"
            />
          </div>
        </div>

        <button
          type="button"
          onClick={() => setShowCardInfo(!showCardInfo)}
          className="flex items-center gap-2 text-gray-500"
        >
          <Eye size={20} />
          <span>Hide Card Info</span>
        </button>

        <button
          type="submit"
          className="w-full bg-gray-700 text-white py-4 rounded text-lg font-medium"
        >
          Continue
        </button>
      </form>
    </div>
  );
}