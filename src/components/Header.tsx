import React from 'react';
import { Menu } from 'lucide-react';
import NavMenu from './NavMenu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#faf7f2] py-6">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight">VIRAJ.DHURI</h1>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-300 transition-colors"
            aria-label="Menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
      <NavMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}