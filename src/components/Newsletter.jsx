import { useState } from 'react';
import './Newsletter.css';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="newsletter">
      <div className="newsletter__inner">
        <div className="newsletter__text">
          <p className="newsletter__eyebrow">Stay in the Loop</p>
          <h2 className="newsletter__title">Join the Oasis Pools community</h2>
          <p className="newsletter__sub">
            Get exclusive offers, outdoor living design guides, and new project inspiration delivered to your inbox.
          </p>
        </div>
        <div className="newsletter__form-wrap">
          {submitted ? (
            <div className="newsletter__success">
              <span className="newsletter__success-icon">✓</span>
              <p>Thank you! You're now subscribed.</p>
            </div>
          ) : (
            <form className="newsletter__form" onSubmit={handleSubmit}>
              <input
                type="email"
                className="newsletter__input"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="newsletter__btn">Subscribe</button>
            </form>
          )}
          <p className="newsletter__disclaimer">
            By subscribing you agree to our Privacy Policy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
