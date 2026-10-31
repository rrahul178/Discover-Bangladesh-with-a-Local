import { useState } from "react";
import { useTable } from "../hooks/useTable.js";
import { fallbackReviews } from "../data/fallback.js";
import { supabase } from "../lib/supabase.js";

const Stars = ({ n }) => (
  <span className="stars" aria-label={`${n} out of 5`}>
    {"★".repeat(n)}
    <span className="dim">{"★".repeat(5 - n)}</span>
  </span>
);

export default function Reviews() {
  // শুধু approved reviews দেখানো হবে (RLS policy দিয়েও নিশ্চিত করা আছে)
  const { rows } = useTable("reviews", fallbackReviews, { order: "created_at", filter: ["approved", true] });
  const [form, setForm] = useState({ name: "", country: "", rating: 5, message: "" });
  const [state, setState] = useState("idle");
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  async function submit(e) {
    e.preventDefault();
    if (!supabase) return setState("noconfig");
    setState("sending");
    const { error } = await supabase
      .from("reviews")
      .insert({ ...form, rating: Number(form.rating), approved: false });
    setState(error ? "error" : "done");
    if (!error) setForm({ name: "", country: "", rating: 5, message: "" });
  }

  return (
    <section id="reviews" className="section alt">
      <div className="container">
        <p className="eyebrow">Guest reviews</p>
        <h2>Words from travellers</h2>

        {rows.length > 0 ? (
          <div className="grid">
            {rows.map((r) => (
              <figure key={r.id} className="card review">
                <Stars n={r.rating} />
                <blockquote>{r.message}</blockquote>
                <figcaption>
                  <b>{r.name}</b>
                  {r.country && <span className="muted"> · {r.country}</span>}
                </figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <p className="muted narrow">
            Reviews from guests will appear here. Travelled with me? Share your experience below.
          </p>
        )}

        <form className="card form review-form" onSubmit={submit}>
          <h3>Share your experience</h3>
          <div className="row">
            <input required placeholder="Your name" value={form.name} onChange={set("name")} />
            <input placeholder="Country" value={form.country} onChange={set("country")} />
            <select value={form.rating} onChange={set("rating")} aria-label="Rating">
              {[5, 4, 3, 2, 1].map((n) => (
                <option key={n} value={n}>{"★".repeat(n)}</option>
              ))}
            </select>
          </div>
          <textarea required rows="3" placeholder="Tell us about your tour…" value={form.message} onChange={set("message")} />
          <button className="btn" disabled={state === "sending"}>
            {state === "sending" ? "Sending…" : "Submit review"}
          </button>
          {state === "done" && <p className="ok">Thank you! Your review will appear after approval.</p>}
          {state === "error" && <p className="err">Something went wrong. Please try again.</p>}
          {state === "noconfig" && <p className="err">Database is not connected yet (Supabase keys missing).</p>}
        </form>
      </div>
    </section>
  );
}
