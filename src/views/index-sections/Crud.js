import React from "react";

function Crud() {
  const steps = [
    "✏️ create",
    "📄 read",
    "🛠️ update",
    "🗑️ destroy",
  ];

  return (
    <div className="workflow-container" style={{ marginTop: "70px"}}>
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div className="workflow-box">{step}</div>
          {index < steps.length - 1 && <div className="workflow-arrow">→</div>}
        </React.Fragment>
      ))}
    </div>
  );
}

export default Crud;