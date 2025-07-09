import React from 'react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 w-full h-16 bg-white/80 backdrop-blur-sm shadow-md z-20">
      <div className="container mx-auto max-w-md h-full flex items-center justify-center">
        <h1 className="font-serif text-2xl font-medium text-[#1A1F2C]">
          Veronika & Martin
        </h1>
      </div>
    </header>
  );
}
