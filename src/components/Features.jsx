import './Features.css';

const features = [
  {
    icon: '✦',
    title: 'Custom 3D Design',
    desc: 'Every pool is meticulously designed in 3D so you can see exactly how it will look in your backyard.',
  },
  {
    icon: '◈',
    title: 'Premium Materials',
    desc: "We only use the finest tiles, coping, and finishes to ensure your pool stands the test of time.",
  },
  {
    icon: '⬡',
    title: '1,500+ Projects Completed',
    desc: 'Trusted by homeowners who value quality, precision, and a seamless construction experience.',
  },
  {
    icon: '◎',
    title: 'Expert Craftsmanship',
    desc: 'Our experienced artisans handle every detail, from excavation to final finish with ultimate care.',
  },
];

export default function Features() {
  return (
    <section className="features">
      <div className="features__inner">
        <div className="features__header">
          <p className="features__eyebrow">Why Oasis Pools</p>
          <h2 className="features__title">
            Stunning design.<br />Expert craftsmanship.<br />Lasting quality.
          </h2>
        </div>
        <div className="features__grid">
          {features.map((f) => (
            <div key={f.title} className="features__card">
              <span className="features__card-icon">{f.icon}</span>
              <h3 className="features__card-title">{f.title}</h3>
              <p className="features__card-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
