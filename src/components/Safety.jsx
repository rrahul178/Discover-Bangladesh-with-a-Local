const items = [
  ["Written itinerary & price", "You receive a clear itinerary and total cost before the tour is confirmed."],
  ["Trusted partners", "Reliable drivers, boats and hotels that I have worked with personally."],
  ["Emergency ready", "Emergency contacts and the nearest hospital details are shared for every route."],
  ["Your documents stay with you", "I never hold your passport or personal documents."],
  ["Respectful travel", "We respect religious sites, local customs and everyone's privacy."],
  ["Checked before you go", "Weather, local restrictions and the safety situation are reviewed before each trip."],
];

export default function Safety() {
  return (
    <section className="section dark">
      <div className="container">
        <p className="eyebrow light">Travel with confidence</p>
        <h2>Safety & professionalism, built in</h2>
        <div className="grid safety-grid">
          {items.map(([t, d], i) => (
            <div key={t} className="safe">
              <span className="num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
