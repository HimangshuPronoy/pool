import './HowItWorks.css';

const steps = [
  {
    number: '01',
    title: 'Consultation & Vision',
    desc: 'We start by understanding your vision, lifestyle, and assessing your backyard space.',
  },
  {
    number: '02',
    title: '3D Design & Permitting',
    desc: 'Our designers create a realistic 3D model. Once approved, we handle all necessary city permits.',
  },
  {
    number: '03',
    title: 'Construction & Finishing',
    desc: 'Our skilled craftsmen excavate, build, and apply premium finishes to your new pool.',
  },
  {
    number: '04',
    title: 'Final Walkthrough & Enjoy',
    desc: 'We hand over your completed oasis, ensuring everything runs perfectly so you can dive right in.',
  },
];

export default function HowItWorks() {
  return (
    <section className="how">
      <div className="how__inner">
        <div className="how__header">
          <p className="how__eyebrow">The Process</p>
          <h2 className="how__title">How it works</h2>
          <p className="how__sub">Building your dream pool is easier than you think.</p>
        </div>
        <div className="how__steps">
          {steps.map((s, i) => (
            <div key={s.number} className="how__step">
              <div className="how__step-number">{s.number}</div>
              {i < steps.length - 1 && <div className="how__step-line" />}
              <h3 className="how__step-title">{s.title}</h3>
              <p className="how__step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="how__cta-wrap">
          <a href="#" className="how__cta">Book a free consultation</a>
        </div>
      </div>
    </section>
  );
}
