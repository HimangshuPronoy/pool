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
        <p className="fabric-banner__eyebrow">Matériaux Haut de Gamme</p>
        <h2 className="fabric-banner__title">
          Découvrez la qualité<br />de nos finitions
        </h2>
        <p className="fabric-banner__text">
          Nous n'utilisons que des mosaïques en verre, des pierres naturelles et des enduits de qualité supérieure pour garantir que votre piscine soit aussi durable que belle.
        </p>
        <div className="fabric-banner__actions">
          <a href="#" className="fabric-banner__btn fabric-banner__btn--primary">Demander un Échantillon</a>
          <a href="#" className="fabric-banner__btn fabric-banner__btn--secondary">Parcourir les Finitions</a>
        </div>
      </div>
    </section>
  );
}
