import { useEffect, useState } from "react";

const ranges = [
  { key: "today", label: "Today" },
  { key: "week", label: "Week" },
  { key: "month", label: "Month" },
];

export default function VisitorsCard() {
  const [range, setRange] = useState("today");
  const [visitors, setVisitors] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/visitors?range=${range}`)
      .then(res => res.json())
      .then(data => {
        setVisitors(data.visitors);
        setLoading(false);
      });
  }, [range]);

  return (
    <div style={styles.card}>
      <div style={styles.toggleRow}>
        {ranges.map(r => (
          <button
            key={r.key}
            onClick={() => setRange(r.key)}
            style={{
              ...styles.toggle,
              ...(range === r.key ? styles.activeToggle : {})
            }}
          >
            {r.label}
          </button>
        ))}
      </div>

      <div style={styles.content}>
        <span style={styles.label}>Visitors</span>
        <h2 style={styles.value}>
          {loading ? "—" : visitors}
        </h2>
      </div>

      <span style={styles.footer}>
        Data via Google Analytics
      </span>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #eaeaea",
    borderRadius: 12,
    padding: 16,
    width: 260,
    background: "#fff",
  },
  toggleRow: {
    display: "flex",
    gap: 8,
    marginBottom: 12,
  },
  toggle: {
    flex: 1,
    padding: "6px 8px",
    fontSize: 12,
    borderRadius: 6,
    border: "1px solid #ddd",
    background: "#fafafa",
    cursor: "pointer",
  },
  activeToggle: {
    background: "#111",
    color: "#fff",
    borderColor: "#111",
  },
  content: {
    marginTop: 8,
  },
  label: {
    fontSize: 12,
    color: "#666",
  },
  value: {
    margin: "4px 0 0",
    fontSize: 32,
    fontWeight: 600,
  },
  footer: {
    display: "block",
    marginTop: 8,
    fontSize: 10,
    color: "#999",
  },
};
