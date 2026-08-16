import './Categories.css';

const categories = [
  {
    title: 'Infinity Pools',
    sub: 'Blend seamlessly with the horizon',
    image: '/images/cat_infinity_1786901794141.jpg',
    link: '#',
  },
  {
    title: 'Geometric Pools',
    sub: 'Modern, clean lines for a contemporary look',
    image: '/images/cat_geometric_1786901840967.jpg',
    link: '#',
  },
  {
    title: 'Freeform Pools',
    sub: 'Natural, lagoon-style designs',
    image: '/images/cat_freeform_1786901853679.jpg',
    link: '#',
  },
  {
    title: 'Spas & Hot Tubs',
    sub: 'Ultimate relaxation in your backyard',
    image: '/images/tile_spa_feature_1786901680000.jpg',
    link: '#',
  },
];

export default function Categories() {
  return (
    <section className="categories">
      <div className="categories__inner">
        <div className="categories__header">
          <p className="categories__eyebrow">Pool Styles</p>
          <h2 className="categories__title">Find your perfect pool</h2>
        </div>
        <div className="categories__grid">
          {categories.map((cat) => (
            <a key={cat.title} href={cat.link} className="cat-card">
              <div className="cat-card__img-wrap">
                <img src={cat.image} alt={cat.title} className="cat-card__img" />
                <div className="cat-card__overlay">
                  <span className="cat-card__shop">View Gallery →</span>
                </div>
              </div>
              <div className="cat-card__body">
                <h3 className="cat-card__title">{cat.title}</h3>
                <p className="cat-card__sub">{cat.sub}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
