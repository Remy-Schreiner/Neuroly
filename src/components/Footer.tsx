import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-text text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="/neuroly-logo.png" alt="Neuroly" className="h-10 mb-4" />
            <p className="text-white/80">
              L'IA, simplement.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-accent">Accueil</Link></li>
              <li><Link to="/approche" className="hover:text-accent">Notre approche</Link></li>
              <li><Link to="/services" className="hover:text-accent">Services</Link></li>
              <li><Link to="/blog" className="hover:text-accent">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="hover:text-accent">Audit</Link></li>
              <li><Link to="/services" className="hover:text-accent">Intégration</Link></li>
              <li><Link to="/services" className="hover:text-accent">Formation</Link></li>
              <li><Link to="/services" className="hover:text-accent">Suivi</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <a href="mailto:contact@neuroly.fr" className="hover:text-accent">contact@neuroly.fr</a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span>01 23 45 67 89</span>
              </li>
              <li className="flex items-center space-x-2">
                <Linkedin size={16} />
                <a href="https://linkedin.com/company/neuroly" className="hover:text-accent">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/60">
          <p>© {new Date().getFullYear()} Neuroly. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;