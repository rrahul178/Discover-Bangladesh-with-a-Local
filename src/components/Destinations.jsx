import { useState } from "react";
import { useTable } from "../hooks/useTable.js";
import { fallbackDestinations } from "../data/fallback.js";

const FILTERS = ["All", "Heritage", "Nature", "Local Culture"];

export default function Destinations() {
  const { rows } = useTable("destinations", fallbackDestinations, { filter: ["published", true] });
  const [f, setF] = useState("All");
  const shown = rows.filter((d) => f === "All" || d.category === f);

  return (
    <section id="destinations" className="section">
      <div className="container">
        <p className="eyebrow">Destinations</p>
        <h2>Places worth the journey</h2>
        <div className="filters" role="tablist">
          {FILTERS.map((x) => (
            <button key={x} className={f === x ? "on" : ""} onClick={() => setF(x)}>
              {x}
            </button>
          ))}
        </div>
        <div className="grid dest-grid">
          {shown.map((d) => (
            <article key={d.id} className="dest">
              <div
                className="dest-img"
                style={
                  d.image_url
                    ? { backgroundImage: `url(${d.image_url})` }
                    : { background: d.gradient || "linear-gradient(135deg,#1f5c44,#e0a458)" }
                }
              >
                <span className="badge light">{d.category}</span>
              </div>
              <div className="dest-body">
                <h3>{d.name}</h3>
                <small className="muted">{d.region}</small>
                <p>{d.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
