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
    <div style={{ fontFamily: "Arial", padding: "40px" }}>
      {/* PRODUCT PAGE SECTION */}
      <div
        style={{
          display: "flex",
          gap: "40px",
          marginBottom: "50px",
          alignItems: "center"
        }}
      >
        <img
          src="https://www.maskabutters.in/cdn/shop/products/chatpata.png"
          alt="Maska Peanut Butter Chatpata"
          width="260"
          style={{ borderRadius: "10px" }}
        />

        <div>
          <h1>Maska Peanut Butter – Chatpata</h1>
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>₹349</p>
          <p>
            A bold, spicy, and crunchy peanut butter made for Indian taste buds.
          </p>
          <button
            style={{
              padding: "12px 20px",
              backgroundColor: "#000",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              borderRadius: "6px"
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>

      <hr />

      {/* REVIEWS SECTION */}
      <h2 style={{ marginTop: "40px" }}>What Our Peanut Butter Lovers Say</h2>

      {/* Rating summary */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <span style={{ fontSize: "22px", fontWeight: "bold" }}>⭐ 4.7</span>
        <span style={{ color: "#555" }}>Based on 382 reviews</span>
      </div>

      <hr style={{ margin: "20px 0" }} />

      {/* DESIGN VARIATION A – CARD VIEW */}
      <h3>Design Variation A – Card View</h3>
      <div style={{ display: "flex", gap: "20px", marginBottom: "40px" }}>
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
            <h4>{review.name}</h4>
            <p>⭐ {review.rating} / 5</p>
            <p>{review.text}</p>
          </div>
        ))}
      </div>

      {/* DESIGN VARIATION B – LIST VIEW */}
      <h3>Design Variation B – List View</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {reviews.map((review, index) => (
          <div
            key={index}
            style={{
              borderBottom: "1px solid #ddd",
              paddingBottom: "12px"
            }}
          >
            <strong>{review.name}</strong>
            <p>⭐ {review.rating} / 5</p>
            <p style={{ color: "#555" }}>{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
