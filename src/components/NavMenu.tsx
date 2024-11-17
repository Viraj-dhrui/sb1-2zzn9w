import React from 'react';

interface NavMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NavMenu({ isOpen, onClose }: NavMenuProps) {
  const menuItems = [
    { label: 'About Me', href: '#about' },
    { label: 'My Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div 
      className={`fixed top-0 right-0 h-full w-full md:w-96 bg-yellow-400 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } z-50`}
    >
      <div className="p-8">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-2xl"
        >
          ×
        </button>
        <nav className="mt-16">
          <ul className="space-y-6">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-2xl font-bold hover:text-white transition-colors"
                  onClick={onClose}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}