import { useState } from "react";
import { useTable } from "../hooks/useTable.js";
import { fallbackPackages } from "../data/fallback.js";
import { SITE, waLink } from "../config.js";

function Card({ p }) {
  const [open, setOpen] = useState(false);
  const itinerary = Array.isArray(p.itinerary) ? p.itinerary : [];
  const msg = `Hi ${SITE.guideName}, I'm interested in "${p.title}". Could you share availability and the itinerary?`;
  return (
    <article className="card pkg">
      <div className="pkg-top">
        <span className="badge">{p.category}</span>
        <span className="muted">{p.duration}</span>
      </div>
      <h3>{p.title}</h3>
      <p>{p.summary}</p>
      {p.highlights?.length > 0 && (
        <ul className="tags">
          {p.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      )}
      {open && itinerary.length > 0 && (
        <ol className="itin">
          {itinerary.map((s, i) => (
            <li key={i}>
              <b>{s.day}</b> {s.text}
            </li>
          ))}
        </ol>
      )}
      <div className="pkg-bottom">
        <div>
          {p.price_usd ? (
            <>
              <span className="price">from ${p.price_usd}</span>
              <small className="muted"> per person*</small>
            </>
          ) : (
            <span className="muted">Custom quote</span>
          )}
        </div>
        <div className="pkg-actions">
          {itinerary.length > 0 && (
            <button className="link-btn" onClick={() => setOpen(!open)}>
              {open ? "Hide itinerary" : "View itinerary"}
            </button>
          )}
          <a className="btn btn-sm" href={waLink(msg)} target="_blank" rel="noreferrer">
            Enquire
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Packages() {
  const { rows } = useTable("packages", fallbackPackages, { filter: ["published", true] });
  return (
    <section id="packages" className="section alt">
      <div className="container">
        <p className="eyebrow">Tour packages</p>
        <h2>Pick a journey, or let's design your own</h2>
        <p className="muted narrow">
          Every tour is private and can be customised. You'll receive a written itinerary and final
          price before anything is confirmed.
        </p>
        <div className="grid">
          {rows.map((p) => (
            <Card key={p.id} p={p} />
          ))}
        </div>
        <p className="muted small">*Indicative prices; the final quote depends on group size, season and hotel choice.</p>
      </div>
    </section>
  );
}
