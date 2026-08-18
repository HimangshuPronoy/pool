import { useEffect, useRef, useState } from 'react';
import './Hero.css';

const frameCount = 192;

export default function Hero() {
  const canvasRef = useRef(null);
  const heroRef = useRef(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadedImages = [];
    let loadedCount = 0;
    
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      const num = i.toString().padStart(3, '0');
      img.src = `/frames/frame_${num}.png`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === 1 && canvasRef.current) {
          const ctx = canvasRef.current.getContext('2d');
          canvasRef.current.width = window.innerWidth;
          canvasRef.current.height = window.innerHeight;
          drawFrame(ctx, img, canvasRef.current);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const drawFrame = (ctx, img, canvas) => {
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio  = Math.max(hRatio, vRatio);
    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;  
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.drawImage(img, 0,0, img.width, img.height,
                       centerShift_x,centerShift_y,img.width*ratio, img.height*ratio);  
  }

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !canvasRef.current || images.length === 0) return;
      
      const { top, height } = heroRef.current.getBoundingClientRect();
      const scrollY = -top; 
      
      const maxScroll = height - window.innerHeight;
      let progress = scrollY / maxScroll;
      
      if (progress < 0) progress = 0;
      if (progress > 1) progress = 1;

      const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(progress * frameCount)
      );

      const ctx = canvasRef.current.getContext('2d');
      const img = images[frameIndex];
      
      if (img && img.complete) {
        if (canvasRef.current.width !== window.innerWidth) {
           canvasRef.current.width = window.innerWidth;
           canvasRef.current.height = window.innerHeight;
        }
        drawFrame(ctx, img, canvasRef.current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [images]);

  return (
    <>
      <section className="hero" ref={heroRef}>
        <div className="hero__sticky">
          <canvas ref={canvasRef} className="hero__canvas" />
          <div className="hero__content-overlay">
            <p className="hero__eyebrow">Designs Primés</p>
            <h1 className="hero__title">
              La Piscine de vos Rêves,<br />Conçue à la Perfection
            </h1>
            <p className="hero__subtitle">
              Sublimez votre espace extérieur avec une oasis sur mesure.<br />
              Qualité irréprochable et savoir-faire expert.
            </p>
            <a href="#" className="hero__cta">Commencer votre Projet</a>
          </div>
        </div>
      </section>

      {/* Sub-hero tiles */}
      <div className="hero__tiles">
        <div className="hero__tile hero__tile--dark">
          <img
            src="/images/tile_geometric_pool_1786901662890.jpg"
            alt="New Construction"
            className="hero__tile-img"
          />
          <div className="hero__tile-content">
            <span className="hero__tile-label">Nouvelle Construction</span>
            <h3 className="hero__tile-title">La perfection géométrique moderne</h3>
            <a href="#" className="hero__tile-link">Voir la Galerie →</a>
          </div>
        </div>
        <div className="hero__tile">
          <img
            src="/images/tile_spa_feature_1786901680000.jpg"
            alt="Spas & Features"
            className="hero__tile-img"
          />
          <div className="hero__tile-content hero__tile-content--light">
            <span className="hero__tile-label">Spas & Équipements</span>
            <h3 className="hero__tile-title">Le luxe dans les moindres détails</h3>
            <a href="#" className="hero__tile-link hero__tile-link--dark">Explorer les Options →</a>
          </div>
        </div>
      </div>
    </>
  );
}
