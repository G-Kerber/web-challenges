import "./Card.css";

export default function Card({ name, color, borderColor }) {
  return (
    <p
      className="card"
      style={{ backgroundColor: color, border: `2px solid ${borderColor}` }}
    >
      {name}
    </p>
  );
}
