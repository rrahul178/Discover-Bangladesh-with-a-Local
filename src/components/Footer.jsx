import { SITE, NAV } from "../config.js";

export default function Footer() {
  const socials = [
    ["Facebook", SITE.facebook],
    ["Instagram", SITE.instagram],
    ["Tripadvisor", SITE.tripadvisor],
  ].filter(([, u]) => u);

  return (
    <footer className="footer">
      <div className="container foot">
        <div>
          <strong>{SITE.brand}</strong>
          <p className="muted">{SITE.intro}</p>
        </div>
        <nav>
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`}>{n.label}</a>
          ))}
          {socials.map(([n, u]) => (
            <a key={n} href={u} target="_blank" rel="noreferrer">{n}</a>
          ))}
        </nav>
      </div>
      <p className="copy">© {new Date().getFullYear()} {SITE.brand}. All rights reserved.</p>
    </footer>
  );
}
