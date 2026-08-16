import { useState } from 'react';
import { Search, ShoppingBag, User, Menu, X, ChevronDown } from 'lucide-react';
import './Navbar.css';

const navItems = [
  {
    label: 'Custom Pools',
    sub: ['Infinity Pools', 'Geometric Pools', 'Freeform Pools', 'Plunge Pools', 'View All'],
  },
  {
    label: 'Spas & Hot Tubs',
    sub: ['Attached Spas', 'Standalone Spas', 'Custom Features', 'View All'],
  },
  {
    label: 'Remodeling',
    sub: ['Pool Resurfacing', 'Tile & Coping', 'Equipment Upgrades', 'View All'],
  },
  {
    label: 'Outdoor Living',
    sub: ['Outdoor Kitchens', 'Fire Pits', 'Patios & Decking', 'View All'],
  },
  {
    label: 'Gallery',
    sub: ['Recent Projects', 'Before & After', 'Design Ideas', 'View All'],
  },
  {
    label: 'About Us',
    sub: ['Our Story', 'The Process', 'Meet the Team', 'Contact Us'],
  },
];

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

        <a href="/" className="navbar__logo">
          <span className="navbar__logo-main">OASIS POOLS</span>
          <span className="navbar__logo-tm">™</span>
        </a>

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
                  <a key={s} href="#" className="navbar__dropdown-link">
                    {s}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
        <a href="#" className="navbar__nav-btn navbar__nav-special">Get a Quote</a>
        <a href="#" className="navbar__nav-btn navbar__nav-special">Design Center</a>
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
                    <a key={s} href="#" className="navbar__mobile-sub-link">
                      {s}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a href="#" className="navbar__mobile-btn">Get a Quote</a>
          <a href="#" className="navbar__mobile-btn">Design Center</a>
          <div className="navbar__mobile-divider" />
          <a href="#" className="navbar__mobile-btn">About Us</a>
          <a href="#" className="navbar__mobile-btn">Customer Service</a>
        </div>
      )}
    </header>
  );
}
