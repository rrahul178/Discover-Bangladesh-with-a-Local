import { SITE } from "../config.js";

const points = [
  ["Local eyes", "Born and raised here — I show you the Bangladesh behind the headlines."],
  ["Private & flexible", "Small groups or just you. We move at your pace and follow your curiosity."],
  ["Clear & honest", "A written itinerary and price before you commit. No surprises."],
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about">
        <img
          className="portrait"
          src="/guide.jpg"
          alt={`${SITE.guideName}, local guide in Bangladesh`}
          width="800"
          height="1000"
          loading="lazy"
        />
        <div>
          <p className="eyebrow">About your guide</p>
          <h2>Hi, I'm {SITE.guideName}</h2>
          <p className="muted">{SITE.guideTitle}</p>
          <p>
            {/* ✏️ নিজের গল্প লিখুন: কোথায় বড় হয়েছেন, কেন গাইড হলেন, কোন জায়গা সবচেয়ে প্রিয় */}
            I grew up in Bangladesh and I love sharing it the way locals live it — through food, rivers,
            markets, history and the people who make each place special. Whether it is a single-day walk
            through Old Dhaka or a week across the country, every trip is planned around you.
          </p>
          <ul className="points">
            {points.map(([t, d]) => (
              <li key={t}>
                <strong>{t}</strong>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
