export default function FlowerAnimation() {
  return (
    <div className="flowers">
      {Array.from({ length: 30 }).map((_, i) => (
        <span
          key={i}
          className="flower"
          style={{
            left: Math.random() * 100 + 'vw',
            animationDuration: 6 + Math.random() * 6 + 's',
            fontSize: 16 + Math.random() * 20 + 'px'
          }}
        >
          🌸
        </span>
      ))}
    </div>
  );
}
