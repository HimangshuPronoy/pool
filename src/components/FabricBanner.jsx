import './FabricBanner.css';

export default function FabricBanner() {
  return (
    <section className="fabric-banner">
      <div className="fabric-banner__image-col">
        <img
          src="/images/fabric_banner_pool_1786902012159.jpg"
          alt="Premium pool tile finishes"
          className="fabric-banner__img"
        />
      </div>
      <div className="fabric-banner__content">
        <p className="fabric-banner__eyebrow">Premium Materials</p>
        <h2 className="fabric-banner__title">
          Experience the quality<br />of our finishes
        </h2>
        <p className="fabric-banner__text">
          We use only the highest grade glass mosaics, natural stone, and premium plaster to ensure your pool is as durable as it is beautiful.
        </p>
        <div className="fabric-banner__actions">
          <a href="#" className="fabric-banner__btn fabric-banner__btn--primary">Request a Material Sample</a>
          <a href="#" className="fabric-banner__btn fabric-banner__btn--secondary">Browse Finishes</a>
        </div>
      </div>
    </section>
  );
}
