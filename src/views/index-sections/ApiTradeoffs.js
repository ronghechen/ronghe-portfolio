import React from "react";

const features = [
  "❌ no conversational memory", "❌ less personalization across turns", "✅ safer for regulated domains"
];

export default function ApiTradeoffs() {
  return (
    <section
      style={{
        width: "100%",
        padding: "48px 16px",
        backgroundColor: "white",
      }}
    >
      {/* Responsive grid styles */}
      <style>
        {`
            .features-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 32px;
            }

            /* Laptop & up */
            @media (min-width: 1024px) {
            .features-grid {
                grid-template-columns: repeat(3, 1fr);
            }
            }
        `}
        </style>

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <h3
          style={{
            fontSize: "20px",
            fontWeight: 600,
            marginBottom: "32px",
            color: "#444",
            textAlign: "center",
          }}
        >
          tradeoffs
        </h3>

        <div className="features-grid">
          {features.map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "#f9f9f9",
                borderRadius: "20px",
                padding: "36px",
                boxShadow: "0 10px 24px rgba(0,0,0,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "140px",
                textAlign: "center",
              }}
            >
              <div>
                <div style={{ fontSize: "15px", fontWeight: 600, color: "#333" }}>
                  {item}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p
          style={{
            marginTop: "32px",
            fontSize: "13px",
            color: "#777",
            textAlign: "center",
            lineHeight: 1.6,
          }}
        >
        </p>
      </div>
    </section>
  );
}
