import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '/icone.png?url';

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Notre accompagnement', href: '/approche' },
  { name: 'Contact', href: '/contact' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Si on scroll vers le bas
      if (currentScrollY > lastScrollY) {
        setIsScrolled(true);
      } else {
        // Si on scroll vers le haut et qu'on est assez haut
        if (currentScrollY < 100) {
          setIsScrolled(false);
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`bg-white shadow-sm ${isScrolled ? 'fixed top-0 left-0 right-0 z-50' : 'hidden md:block'} transition-all duration-300 ease-in-out`}>
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="flex items-center justify-between h-14">
          <Link to="/" className="flex items-center space-x-2" onClick={scrollToTop}>
            <img src={logo} alt="Logo Neuroly" className="h-8 w-auto" />
            <div className="flex items-center space-x-1">
              <span className="text-3xl font-bold tracking-wide">NEUROLY</span>
              <span className="text-sm text-gray-500">L'IA, simplement.</span>
            </div>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navigation.map((item) => (
              <Link key={item.name} to={item.href} className="text-gray-700 hover:text-primary transition-colors px-2.5 py-1.5 rounded-md text-base font-medium" onClick={scrollToTop}>
                {item.name}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary px-4 py-2 text-lg font-medium" onClick={scrollToTop}>
              Audit gratuit
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block py-2 px-3 text-gray-700 hover:text-primary text-base"
                onClick={(e) => {
                  scrollToTop();
                  setIsOpen(false);
                }}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block py-2 px-3 text-primary font-medium hover:bg-primary-light text-base"
              onClick={(e) => {
                scrollToTop();
                setIsOpen(false);
              }}
            >
              Audit gratuit
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;