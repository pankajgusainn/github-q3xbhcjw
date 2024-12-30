import React from 'react';

export function NewsletterSignup() {
  return (
    <div className="bg-[#7DD1DB] p-8 rounded-lg">
      <h2 className="text-2xl mb-4">Get the Scoop on Vanilla Gift</h2>
      <input
        type="email"
        placeholder="Email Address"
        className="w-full p-3 rounded mb-4"
      />
      <div className="flex items-start gap-2 mb-4">
        <input type="checkbox" className="mt-1" id="newsletter-consent" />
        <label htmlFor="newsletter-consent" className="text-sm">
          Please send me tips, news, and special offers from and on behalf of Vanilla Gift. I understand that my information will be used as described in the{' '}
          <a href="#" className="underline hover:text-vanilla-red">Privacy Policy</a>.
        </label>
      </div>
      <button className="w-full bg-gray-700 text-white py-3 rounded">
        Sign Me Up!
      </button>
    </div>
  );
}