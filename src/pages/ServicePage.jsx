import { useLocation } from 'react-router-dom';
import './ServicePage.css';

export default function ServicePage() {
  const location = useLocation();
  // Simple way to generate a title from the URL path
  const rawPath = location.pathname.split('/').pop();
  const title = decodeURIComponent(rawPath)
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <div className="service-page">
      <div className="service-header">
        <p className="service-eyebrow">Nos Services</p>
        <h1 className="service-title">{title || 'Service'}</h1>
        <p className="service-sub">
          Nous sommes spécialisés dans {title ? title.toLowerCase() : 'ce service'}. 
          Notre équipe d'experts s'engage à vous fournir la meilleure qualité.
        </p>
      </div>
      <div className="service-content">
        <div className="service-placeholder">
          <p>Plus de détails sur <strong>{title}</strong> seront bientôt disponibles.</p>
          <a href="/" className="service-btn">Retour à l'accueil</a>
        </div>
      </div>
    </div>
  );
}
