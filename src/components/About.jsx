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
          <h2>My Story – Discover Bangladesh with Me</h2>
          <p className="muted">
            {SITE.guideName} · {SITE.guideTitle}
          </p>
          <p>
            Born and raised in Kishoreganj, Bangladesh, I have a deep love for my country's natural
            beauty, rich history, and vibrant culture. With experience in guiding travellers, I enjoy
            helping visitors discover the real Bangladesh beyond the usual tourist destinations.
            Sylhet, the Sundarbans, and Cox's Bazar are among my favourite places.
          </p>
          <p>
            Speaking Bengali, English, and Hindi, I aim to make every journey safe, enjoyable, and
            memorable while sharing the warmth of Bangladeshi hospitality, traditions, and local stories.
          </p>
          <ul className="chips about-langs" aria-label="Languages spoken">
            <li>Bengali</li>
            <li>English</li>
            <li>Hindi</li>
          </ul>
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
