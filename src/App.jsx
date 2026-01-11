import { useState } from "react";

function App() {
  const [view, setView] = useState("card");

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
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      {/* Product Section */}
      <h1>Maska Peanut Butter – Chatpata</h1>
      <h2>₹349</h2>
      <p>A bold, spicy, and crunchy peanut butter made for Indian taste buds.</p>
      <button style={{ padding: "10px 16px", cursor: "pointer" }}>
        Add to Cart
      </button>

      <hr style={{ margin: "40px 0" }} />

      {/* Reviews Section */}
      <h2>What Our Peanut Butter Lovers Say</h2>

      <p style={{ fontSize: "18px", marginBottom: "8px" }}>
        ⭐ <strong>4.7</strong> <span style={{ color: "#555" }}>Based on 382 reviews</span>
      </p>

      {/* Design Variation Label */}
      <p style={{ color: "#555", marginBottom: "12px" }}>
        Choose a review layout:
      </p>

      {/* Toggle Buttons */}
      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={() => setView("card")}
          style={{
            marginRight: "10px",
            padding: "8px 14px",
            background: view === "card" ? "#000" : "#eee",
            color: view === "card" ? "#fff" : "#000",
            border: "none",
            cursor: "pointer"
          }}
        >
          Card View
        </button>

        <button
          onClick={() => setView("list")}
          style={{
            padding: "8px 14px",
            background: view === "list" ? "#000" : "#eee",
            color: view === "list" ? "#fff" : "#000",
            border: "none",
            cursor: "pointer"
          }}
        >
          List View
        </button>
      </div>

      {/* Card View */}
      {view === "card" && (
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
      )}

      {/* List View */}
      {view === "list" && (
        <div>
          {reviews.map((review, index) => (
            <div
              key={index}
              style={{
                borderBottom: "1px solid #ddd",
                padding: "16px 0"
              }}
            >
              <h3>{review.name}</h3>
              <p>⭐ {review.rating} / 5</p>
              <p>{review.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
