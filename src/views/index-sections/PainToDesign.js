import React from "react";

export default function PainToDesign() {
  return (
    <>
      {/* Card-grid version */}
      <div
        style={{
          width: "100%",
          textAlign: "center",
          padding: "40px 0",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "2rem",
            width: "90%",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              flex: "1 1 300px",
              backgroundColor: "#f9f9f9",
              borderRadius: "16px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              padding: "24px",
              maxWidth: "650px",
              textAlign: "left",
            }}
          >
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                marginBottom: "6px",
                color: "#444",
              }}
            >
              after the interview, i found the following opportunities for design:
            </h3>

            <div style={{ display: "grid", gap: "12px" }}>
              {[
                {
                  pain: "unreliable pickup times",
                  opp: "add a realistic ETA buffer (e.g. 5 min)",
                },
                {
                  pain: "no notice when a ride is canceled (“left in limbo”)",
                  opp: "clear cancellation state + instant in-app notification",
                },
                {
                  pain: "can’t change passenger count",
                  opp: "+/- passenger controls before confirming ride request + ride filtering by group size",
                },
                {
                  pain: "too many redundant features (such as editing number of passengers for public transit app)",
                  opp: "only keep features that sufficiently address my user's needs & pain points",
                },
              ].map((row, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: "white",
                    borderRadius: "14px",
                    padding: "14px",
                    border: "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr auto 1fr",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <div style={{ fontSize: "12px", color: "#888", marginBottom: "4px" }}>pain point</div>
                      <div style={{ color: "#444", fontSize: "14px", lineHeight: "1.45" }}>
                        {row.pain}
                      </div>
                    </div>

                    <div style={{ color: "#999", fontSize: "16px", fontWeight: "600", padding: "0 4px" }}>
                      →
                    </div>

                    <div>
                      <div style={{ fontSize: "12px", color: "#888", marginBottom: "4px" }}>
                        design opportunity
                      </div>
                      <div style={{ color: "#444", fontSize: "14px", lineHeight: "1.45" }}>
                        {row.opp}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "16px", color: "#888", fontSize: "12px", lineHeight: "1.5" }}>
              focus: clarity + closure + faster recovery when plans change.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
