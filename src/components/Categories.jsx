import { Link } from 'react-router-dom';
import './Categories.css';

const categories = [
  {
    title: 'Piscines à Débordement',
    sub: 'Se fondent parfaitement avec l\'horizon',
    image: '/images/cat_infinity_1786901794141.jpg',
    link: '/gallery',
  },
  {
    title: 'Piscines Géométriques',
    sub: 'Lignes épurées et modernes pour un look contemporain',
    image: '/images/cat_geometric_1786901840967.jpg',
    link: '/gallery',
  },
  {
    title: 'Piscines Libres',
    sub: 'Design naturel, style lagon',
    image: '/images/cat_freeform_1786901853679.jpg',
    link: '/gallery',
  },
  {
    title: 'Spas & Bains à Remous',
    sub: 'Détente absolue dans votre jardin',
    image: '/images/tile_spa_feature_1786901680000.jpg',
    link: '/gallery',
  },
];

export default function Categories() {
  return (
    <section className="categories">
      <div className="categories__inner">
        <div className="categories__header">
          <p className="categories__eyebrow">Styles de Piscines</p>
          <h2 className="categories__title">Trouvez la piscine parfaite</h2>
        </div>
        <div className="categories__grid">
          {categories.map((cat) => (
            <Link key={cat.title} to={cat.link} className="cat-card">
              <div className="cat-card__img-wrap">
                <img src={cat.image} alt={cat.title} className="cat-card__img" />
                <div className="cat-card__overlay">
                  <span className="cat-card__shop">Voir la Galerie →</span>
                </div>
              </div>
              <div className="cat-card__body">
                <h3 className="cat-card__title">{cat.title}</h3>
                <p className="cat-card__sub">{cat.sub}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
