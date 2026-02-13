export default function ValentineCard({ onYes }) {
  return (
    <div className="card">
      <div className="heart">❤️</div>
      <h1>¿Quieres ser mi San Valentín?</h1>
      <p>Prometo momentos lindos, risas y mucho amor 💕</p>

      <div className="buttons">
        <button className="yes" onClick={onYes}>Sí 💖</button>
        <button
          className="no"
          onMouseOver={(e) => {
            e.target.style.transform =
              `translate(${Math.random()*200-100}px, ${Math.random()*200-100}px)`;
          }}
        >
          No 🙈
        </button>
      </div>
    </div>
  );
}
