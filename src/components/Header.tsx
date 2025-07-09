import React from 'react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 h-16 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto max-w-md h-full flex items-center justify-center">
        <h1 className="font-serif text-2xl font-medium text-[#1A1F2C]">
          Veronika & Martin
        </h1>
      </div>
    </header>
  );
}
