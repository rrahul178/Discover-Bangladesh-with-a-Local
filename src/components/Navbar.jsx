import { useState } from "react";
import { NAV, SITE, waLink } from "../config.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#home" className="logo" onClick={() => setOpen(false)}>
          <span className="logo-mark">◐</span>
          <span>{SITE.shortBrand}</span>
        </a>
        <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
          <span /><span /><span />
        </button>
        <nav className={`links ${open ? "open" : ""}`}>
          {NAV.slice(0, -1).map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
          <a
            className="btn btn-sm"
            href={waLink("Hi, I'd like to book a tour in Bangladesh.")}
            target="_blank"
            rel="noreferrer"
          >
            Book on WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
