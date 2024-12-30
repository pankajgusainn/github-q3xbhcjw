import React from 'react';
import { NewsletterSignup } from './NewsletterSignup';
import { SocialLinks } from './SocialLinks';
import { LegalText } from './LegalText';

export function Footer() {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="border-t-4 border-black pt-8">
          <div className="flex items-start gap-16">
            <div className="flex-1">
              <div className="flex gap-8">
                <SocialLinks />
                <div className="flex-1">
                  <LegalText />
                </div>
              </div>
            </div>
            <div className="w-[400px] flex-shrink-0">
              <NewsletterSignup />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}