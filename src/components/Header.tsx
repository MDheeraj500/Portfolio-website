import React from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  scrollPosition: number;
}

const Header: React.FC<HeaderProps> = ({ scrollPosition }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrollPosition > 50 ? 'bg-black bg-opacity-80 backdrop-blur-md' : ''}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img src="/Dheeraj2.png" alt="Signature" className="h-20" /> {/* Adjust height as needed */}
        </a>
        <nav className="hidden md:flex space-x-8">
          {['Home', 'Projects', 'Skills', 'Contact', 'Resume'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-lg hover:text-blue-500 transition-colors">
              {item}
            </a>
          ))}
        </nav>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-90 backdrop-blur-md">
          <nav className="flex flex-col items-center py-4">
            {['Home', 'Projects', 'Skills', 'Contact', 'Resume'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-lg py-2 hover:text-blue-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
