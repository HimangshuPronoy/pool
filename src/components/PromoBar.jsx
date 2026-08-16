import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './PromoBar.css';

const promos = [
  'Free 3D Design Consultation with New Builds · Book Now',
  'Receive a free robotic pool cleaner with any new pool construction',
  '$500 off pool heating systems · Use code: SUMMERREADY',
];

export default function PromoBar() {
  const [visible, setVisible] = useState(true);
  const [index, setIndex] = useState(0);

  if (!visible) return null;

  const prev = () => setIndex((i) => (i - 1 + promos.length) % promos.length);
  const next = () => setIndex((i) => (i + 1) % promos.length);

  return (
    <div className="promo-bar">
      <button className="promo-bar__nav" onClick={prev} aria-label="Previous">
        <ChevronLeft size={14} />
      </button>
      <p className="promo-bar__text">{promos[index]}</p>
      <button className="promo-bar__nav" onClick={next} aria-label="Next">
        <ChevronRight size={14} />
      </button>
      <button className="promo-bar__close" onClick={() => setVisible(false)} aria-label="Close">
        <X size={14} />
      </button>
    </div>
  );
}
