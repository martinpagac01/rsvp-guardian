import React from 'react';

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full h-16 bg-white/90 backdrop-blur-sm border-b">
      <div className="container mx-auto max-w-md h-full flex items-center justify-center">
        <h1 className="font-serif text-2xl font-medium text-[#1A1F2C]">
          Veronika & Martin
        </h1>
      </div>
    </header>
  );
}
