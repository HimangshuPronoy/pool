import { Star } from 'lucide-react';
import './Reviews.css';

const reviews = [
  {
    name: 'Michael T.',
    location: 'Austin, TX',
    rating: 5,
    text: 'Absolument époustouflé par la qualité. Notre nouvelle piscine s\'intègre parfaitement à notre jardin. Les matériaux sont luxueux et le processus de construction a été incroyablement fluide.',
    product: 'Construction de Piscine à Débordement',
  },
  {
    name: 'Raj S.',
    location: 'Los Angeles, CA',
    rating: 5,
    text: 'Le processus de conception a été étonnamment simple et le résultat a dépassé mes attentes. Le service de modélisation 3D est exactement ce dont nous avions besoin pour visualiser le projet.',
    product: 'Piscine Géométrique & Spa',
  },
  {
    name: 'Thomas B.',
    location: 'Miami, FL',
    rating: 5,
    text: 'Nous avons notre piscine depuis trois ans maintenant et elle est aussi belle qu\'au premier jour. L\'équipe a été professionnelle, ponctuelle et a tenu toutes ses promesses.',
    product: 'Piscine Libre Sur Mesure',
  },
];

function StarRow({ count }) {
  return (
    <div className="star-row">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          fill={i < count ? '#c8a96e' : 'none'}
          stroke={i < count ? '#c8a96e' : '#ccc'}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="reviews">
      <div className="reviews__inner">
        {/* Trust bar */}
        <div className="reviews__trust">
          <div className="reviews__trust-score">
            <span className="reviews__trust-number">4.8</span>
            <div className="reviews__trust-meta">
              <StarRow count={5} />
              <span className="reviews__trust-label">Basé sur 7 481 avis Trustpilot</span>
            </div>
          </div>
          <div className="reviews__trust-divider" />
          <div className="reviews__trust-stat">
            <span className="reviews__trust-stat-num">1 500+</span>
            <span className="reviews__trust-stat-label">Piscines Construites</span>
          </div>
          <div className="reviews__trust-divider" />
          <div className="reviews__trust-stat">
            <span className="reviews__trust-stat-num">20+</span>
            <span className="reviews__trust-stat-label">Années d'Expérience</span>
          </div>
          <div className="reviews__trust-divider" />
          <div className="reviews__trust-stat">
            <span className="reviews__trust-stat-num">100%</span>
            <span className="reviews__trust-stat-label">Satisfaction Garantie</span>
          </div>
        </div>

        {/* Review cards */}
        <div className="reviews__header">
          <p className="reviews__eyebrow">Histoires de Clients</p>
          <h2 className="reviews__title">Ce que disent nos clients</h2>
        </div>
        <div className="reviews__grid">
          {reviews.map((r) => (
            <div key={r.name} className="review-card">
              <StarRow count={r.rating} />
              <p className="review-card__text">"{r.text}"</p>
              <div className="review-card__footer">
                <div>
                  <p className="review-card__name">{r.name}</p>
                  <p className="review-card__location">{r.location}</p>
                </div>
                <span className="review-card__product">{r.product}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="reviews__cta-wrap">
          <a
            href="https://www.trustpilot.com"
            target="_blank"
            rel="noopener noreferrer"
            className="reviews__trustpilot-link"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Trustpilot_Logo_%282022%29.svg"
              alt="Trustpilot"
              className="reviews__trustpilot-logo"
            />
            <span>Lire tous les avis sur Trustpilot</span>
          </a>
        </div>
      </div>
    </section>
  );
}
