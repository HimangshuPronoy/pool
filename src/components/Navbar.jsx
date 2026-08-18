import { useState } from 'react';
import { Search, ShoppingBag, User, Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const navItems = [
  {
    label: 'Piscines Sur Mesure',
    sub: ['Piscines à Débordement', 'Piscines Géométriques', 'Piscines Libres', 'Mini-piscines', 'Voir Tout'],
  },
  {
    label: 'Spas & Bains à Remous',
    sub: ['Spas Intégrés', 'Spas Indépendants', 'Fonctionnalités Sur Mesure', 'Voir Tout'],
  },
  {
    label: 'Rénovation',
    sub: ['Revêtement de Piscine', 'Carrelage & Margelles', 'Mise à Niveau des Équipements', 'Voir Tout'],
  },
  {
    label: 'Aménagement Extérieur',
    sub: ['Cuisines d\'Extérieur', 'Braseros', 'Patios & Terrasses', 'Voir Tout'],
  },
  {
    label: 'Galerie',
    sub: ['Projets Récents', 'Avant & Après', 'Idées de Design', 'Voir Tout'],
  },
  {
    label: 'À Propos',
    sub: ['Notre Histoire', 'Le Processus', 'L\'Équipe', 'Nous Contacter'],
  },
];

const generateLink = (text) => {
  if (text === 'Voir Tout' || text === 'Galerie') return '/gallery';
  return `/service/${encodeURIComponent(text.toLowerCase().replace(/\s+/g, '-'))}`;
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);

  return (
    <header className="navbar">
      {/* Top row */}
      <div className="navbar__top">
        <button
          className="navbar__hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-main">OASIS POOLS</span>
          <span className="navbar__logo-tm">™</span>
        </Link>

        <div className="navbar__actions">
          <button className="navbar__action-btn" aria-label="Search">
            <Search size={18} />
          </button>
          <button className="navbar__action-btn" aria-label="Account">
            <User size={18} />
          </button>
          <button className="navbar__action-btn navbar__cart" aria-label="Cart">
            <ShoppingBag size={18} />
            <span className="navbar__cart-count">0</span>
          </button>
        </div>
      </div>

      {/* Desktop nav */}
      <nav className="navbar__nav">
        {navItems.map((item) => (
          <div
            key={item.label}
            className={`navbar__nav-item ${activeDropdown === item.label ? 'is-active' : ''}`}
            onMouseEnter={() => setActiveDropdown(item.label)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="navbar__nav-btn">
              {item.label}
              <ChevronDown size={12} className="navbar__nav-chevron" />
            </button>
            {activeDropdown === item.label && (
              <div className="navbar__dropdown">
                {item.sub.map((s) => (
                  <Link key={s} to={generateLink(s)} className="navbar__dropdown-link">
                    {s}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <Link to="/gallery" className="navbar__nav-btn navbar__nav-special">Obtenir un Devis</Link>
        <Link to="/gallery" className="navbar__nav-btn navbar__nav-special">Centre de Design</Link>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="navbar__mobile-menu">
          {navItems.map((item) => (
            <div key={item.label} className="navbar__mobile-item">
              <button
                className="navbar__mobile-btn"
                onClick={() =>
                  setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                }
              >
                <span>{item.label}</span>
                <ChevronDown
                  size={14}
                  className={mobileExpanded === item.label ? 'rotated' : ''}
                />
              </button>
              {mobileExpanded === item.label && (
                <div className="navbar__mobile-sub">
                  {item.sub.map((s) => (
                    <Link key={s} to={generateLink(s)} className="navbar__mobile-sub-link">
                      {s}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link to="/gallery" className="navbar__mobile-btn">Obtenir un Devis</Link>
          <Link to="/gallery" className="navbar__mobile-btn">Centre de Design</Link>
          <div className="navbar__mobile-divider" />
          <Link to="/gallery" className="navbar__mobile-btn">À Propos</Link>
          <Link to="/gallery" className="navbar__mobile-btn">Service Client</Link>
        </div>
      )}
    </header>
  );
}
