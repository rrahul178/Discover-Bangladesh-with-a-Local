import { useState } from "react";
import { SITE, waLink } from "../config.js";
import { supabase } from "../lib/supabase.js";
import { useTable } from "../hooks/useTable.js";
import { fallbackPackages } from "../data/fallback.js";

const empty = { name: "", email: "", country: "", phone: "", package_title: "", travel_date: "", group_size: 2, message: "" };

export default function Contact() {
  const { rows: pkgs } = useTable("packages", fallbackPackages, { filter: ["published", true] });
  const [f, setF] = useState(empty);
  const [state, setState] = useState("idle");
  const [waUrl, setWaUrl] = useState("");
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  async function submit(e) {
    e.preventDefault();
    setState("sending");
    if (supabase) {
      const payload = {
        ...f,
        group_size: Number(f.group_size) || null,
        travel_date: f.travel_date || null,
      };
      const { error } = await supabase.from("inquiries").insert(payload);
      if (error) return setState("error");
    }
    setState("done");
    // WhatsApp-এও একই বার্তা পাঠানোর অপশন
    setWaUrl(waLink(
      `Hi ${SITE.guideName}! I'm ${f.name} from ${f.country || "abroad"}. ` +
        `Tour: ${f.package_title || "Custom"}. Date: ${f.travel_date || "flexible"}. ` +
        `Group: ${f.group_size}. ${f.message}`
    ));
    setF(empty);
  }

  return (
    <section id="contact" className="section">
      <div className="container contact">
        <div>
          <p className="eyebrow">Contact / WhatsApp booking</p>
          <h2>Let's plan your trip</h2>
          <p>
            Tell me when you're coming and what you love — history, food, nature, photography. I'll reply
            with a written itinerary and price.
          </p>
          <a className="btn" href={waLink("Hi, I'd like to book a tour in Bangladesh.")} target="_blank" rel="noreferrer">
            Message on WhatsApp
          </a>
          <ul className="contact-list">
            <li>✉️ <a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            <li>📍 {SITE.location}</li>
          </ul>
        </div>

        <form className="card form" onSubmit={submit}>
          <div className="row">
            <input required placeholder="Full name" value={f.name} onChange={set("name")} />
            <input required type="email" placeholder="Email" value={f.email} onChange={set("email")} />
          </div>
          <div className="row">
            <input placeholder="Country" value={f.country} onChange={set("country")} />
            <input placeholder="WhatsApp / phone" value={f.phone} onChange={set("phone")} />
          </div>
          <div className="row">
            <select value={f.package_title} onChange={set("package_title")}>
              <option value="">Custom / not sure yet</option>
              {pkgs.map((p) => (
                <option key={p.id} value={p.title}>{p.title}</option>
              ))}
            </select>
            <input type="date" value={f.travel_date} onChange={set("travel_date")} />
            <input type="number" min="1" max="30" value={f.group_size} onChange={set("group_size")} aria-label="Group size" />
          </div>
          <textarea rows="4" placeholder="Anything we should know?" value={f.message} onChange={set("message")} />
          <button className="btn" disabled={state === "sending"}>
            {state === "sending" ? "Sending…" : "Send enquiry"}
          </button>
          {state === "done" && (
            <p className="ok">
              Thank you — I'll get back to you soon.{" "}
              {waUrl && (
                <a href={waUrl} target="_blank" rel="noreferrer">Also send via WhatsApp →</a>
              )}
            </p>
          )}
          {state === "error" && <p className="err">Could not send. Please use WhatsApp or email instead.</p>}
        </form>
      </div>
    </section>
  );
}
