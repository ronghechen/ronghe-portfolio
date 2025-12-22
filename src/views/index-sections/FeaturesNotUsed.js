import React from "react";

const features = [
  {
    feature: "buffer time notice",
    explored:
      "addressed frustration around unreliable pickup times by setting more realistic expectations.",
    notChosen:
      "risked becoming static and arbitrary without real system data, which could reduce trust if the buffer felt inaccurate or inconsistent.",
    tradeoff:
      "i prioritized clear system feedback and recovery over predictive estimates, since recovery reduces anxiety more effectively than speculative buffers.",
  },
  {
    feature: "manual alternative ride selection",
    explored:
      "gave users more control after a ride cancellation.",
    notChosen:
      "introduced decision fatigue and slowed recovery during a stressful, late-night context.",
    tradeoff:
      "i chose automation over control to optimize for speed, reassurance, and reduced cognitive load.",
  },
  {
    feature: "passenger count form input",
    explored:
      "provided a familiar and flexible way to input group size.",
    notChosen:
      "increased friction and error risk compared to simple increment/decrement controls.",
    tradeoff:
      "i optimized for frequent use cases by choosing +/- controls that reduce errors and speed up interaction.",
  },
  {
    feature: "filtering rides by passenger count",
    explored:
      "allowed users to pre-filter available rides based on group size.",
    notChosen:
      "added redundancy and interface complexity without significantly improving outcomes.",
    tradeoff:
      "i avoided redundant controls to keep the interface focused and reduce unnecessary decision points.",
  },
];

export default function FeaturesNotUsed() {
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
            gap: 24px;
          }

          @media (min-width: 768px) {
            .features-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (min-width: 1200px) {
            .features-grid {
              grid-template-columns: repeat(4, 1fr);
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
          features i considered but did not end up using
        </h3>

        <div className="features-grid">
          {features.map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "#f9f9f9",
                borderRadius: "16px",
                padding: "24px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                height: "100%",
              }}
            >
              <div>
                <div style={{ fontSize: "12px", color: "#888", marginBottom: "4px" }}>
                  feature
                </div>
                <div style={{ fontSize: "15px", fontWeight: 600, color: "#333" }}>
                  {item.feature}
                </div>
              </div>

              <div>
                <div style={{ fontSize: "12px", color: "#888", marginBottom: "4px" }}>
                  why i explored it
                </div>
                <div style={{ fontSize: "14px", lineHeight: 1.5, color: "#444" }}>
                  {item.explored}
                </div>
              </div>

              <div>
                <div style={{ fontSize: "12px", color: "#888", marginBottom: "4px" }}>
                  why i didn’t move forward
                </div>
                <div style={{ fontSize: "14px", lineHeight: 1.5, color: "#444" }}>
                  {item.notChosen}
                </div>
              </div>

              <div>
                <div style={{ fontSize: "12px", color: "#888", marginBottom: "4px" }}>
                  tradeoff rationale
                </div>
                <div style={{ fontSize: "14px", lineHeight: 1.5, color: "#444" }}>
                  {item.tradeoff}
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
          every feature I added had a cost in complexity, so i prioritized decisions
          that reduced stress and improved recovery during high-uncertainty moments.
        </p>
      </div>
    </section>
  );
}
