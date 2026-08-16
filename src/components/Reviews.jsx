import { Star } from 'lucide-react';
import './Reviews.css';

const reviews = [
  {
    name: 'Michael T.',
    location: 'Austin, TX',
    rating: 5,
    text: 'Absolutely blown away by the quality. Our new pool fits our backyard perfectly. The materials are luxurious and the construction process was incredibly smooth.',
    product: 'Infinity Pool Build',
  },
  {
    name: 'Raj S.',
    location: 'Los Angeles, CA',
    rating: 5,
    text: 'The design process was surprisingly simple and the result exceeded my expectations. The 3D modeling service is exactly what we needed to visualize the project.',
    product: 'Geometric Pool & Spa',
  },
  {
    name: 'Thomas B.',
    location: 'Miami, FL',
    rating: 5,
    text: 'We\'ve had our pool for three years now and it looks as good as day one. The team was professional, timely, and delivered on every promise.',
    product: 'Custom Freeform Pool',
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
              <span className="reviews__trust-label">Based on 7,481 Trustpilot reviews</span>
            </div>
          </div>
          <div className="reviews__trust-divider" />
          <div className="reviews__trust-stat">
            <span className="reviews__trust-stat-num">1,500+</span>
            <span className="reviews__trust-stat-label">Pools Built</span>
          </div>
          <div className="reviews__trust-divider" />
          <div className="reviews__trust-stat">
            <span className="reviews__trust-stat-num">20+</span>
            <span className="reviews__trust-stat-label">Years Experience</span>
          </div>
          <div className="reviews__trust-divider" />
          <div className="reviews__trust-stat">
            <span className="reviews__trust-stat-num">100%</span>
            <span className="reviews__trust-stat-label">Satisfaction Guaranteed</span>
          </div>
        </div>

        {/* Review cards */}
        <div className="reviews__header">
          <p className="reviews__eyebrow">Customer Stories</p>
          <h2 className="reviews__title">What our customers say</h2>
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
            <span>Read all reviews on Trustpilot</span>
          </a>
        </div>
      </div>
    </section>
  );
}
