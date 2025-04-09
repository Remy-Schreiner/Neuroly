import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-text text-white">
      <div className="container py-12">
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/60">
          <p> {new Date().getFullYear()} Neuroly. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;