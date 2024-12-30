import React from 'react';
import { TopNavigation } from './components/TopNavigation';
import { MainNavigation } from './components/MainNavigation';
import { CardForm } from './components/CardForm';
import { BottomStripe } from './components/BottomStripe';
import { Footer } from './components/Footer/Footer';
import { GiftCard } from './components/GiftCard/GiftCard';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-50">
        <TopNavigation />
        <MainNavigation />
      </div>
      
      <main className="flex-1 bg-[#CAA550] p-8 pb-24 mt-[104px]">
        <div className="max-w-7xl mx-auto flex items-start gap-14 pl-24">
          <CardForm />
          <div className="flex-shrink-0">
            <GiftCard />
          </div>
        </div>
      </main>
      
      <BottomStripe />
      <Footer />
    </div>
  );
}