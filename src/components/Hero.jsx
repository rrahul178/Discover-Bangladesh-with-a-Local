import { SITE, TAGS, waLink } from "../config.js";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
        <p className="eyebrow">Beyond Bangladesh · Private tours with a local</p>
        <h1>
          Explore Bangladesh <em>with a Local</em>
        </h1>
        <p className="lead">{SITE.intro}</p>
        <div className="hero-cta">
          <a className="btn" href="#packages">View Tour Packages</a>
          <a
            className="btn btn-ghost"
            href={waLink("Hi, I'd like to plan a trip to Bangladesh.")}
            target="_blank"
            rel="noreferrer"
          >
            Plan on WhatsApp
          </a>
        </div>
        <ul className="chips">
          {TAGS.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        </div>
        <figure className="hero-photo">
          <img
            src="/guide.jpg"
            alt={`${SITE.guideName}, your local guide`}
            width="800"
            height="1000"
            fetchpriority="high"
          />
          <figcaption>
            <b>{SITE.guideName}</b>
            {SITE.guideTitle}
          </figcaption>
        </figure>
      </div>
      <div className="hero-shape" aria-hidden="true" />
    </section>
  );
}
