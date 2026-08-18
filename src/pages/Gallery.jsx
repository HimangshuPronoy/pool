import './Gallery.css';

const galleryImages = [
  { id: 1, src: '/images/gallery_1.jpg', alt: 'Piscine à débordement au coucher du soleil', span: 'col-span-2 row-span-2' },
  { id: 2, src: '/images/gallery_2.jpg', alt: 'Piscine géométrique moderne', span: 'col-span-1 row-span-1' },
  { id: 3, src: '/images/gallery_3.jpg', alt: 'Piscine naturelle lagon', span: 'col-span-1 row-span-1' },
  { id: 4, src: '/images/gallery_1.jpg', alt: 'Piscine intérieure de luxe', span: 'col-span-2 row-span-1' },
];

export default function Gallery() {
  return (
    <div className="gallery-page">
      <div className="gallery-header">
        <h1 className="gallery-title">Notre Galerie</h1>
        <p className="gallery-sub">Découvrez nos réalisations primées et laissez-vous inspirer pour votre future oasis.</p>
      </div>
      
      <div className="gallery-grid">
        {galleryImages.map((img) => (
          <div key={img.id} className={`gallery-item ${img.span}`}>
            <img src={img.src} alt={img.alt} className="gallery-img" />
            <div className="gallery-overlay">
              <span className="gallery-overlay-text">Voir le projet</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
