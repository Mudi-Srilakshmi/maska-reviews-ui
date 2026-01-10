function App() {
  const reviews = [
    {
      name: "Ananya S",
      rating: 5,
      text: "Absolutely love the taste! Smooth, creamy, and natural."
    },
    {
      name: "Rahul K",
      rating: 4,
      text: "Very good quality peanut butter. Not too sweet."
    },
    {
      name: "Megha P",
      rating: 5,
      text: "Best peanut butter I’ve tried. Will buy again!"
    }
  ];

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>What Our Peanut Butter Lovers Say</h1>

      {/* Rating section */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <span style={{ fontSize: "22px", fontWeight: "bold" }}>⭐ 4.7</span>
        <span style={{ color: "#555" }}>Based on 382 reviews</span>
      </div>

      <hr style={{ margin: "20px 0" }} />

      {/* Reviews cards */}
      <div style={{ display: "flex", gap: "20px" }}>
        {reviews.map((review, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "16px",
              width: "260px"
            }}
          >
            <h3>{review.name}</h3>
            <p>⭐ {review.rating} / 5</p>
            <p>{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
