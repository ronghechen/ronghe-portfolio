import React from "react";

function DesignProcess() {
  const steps = [
    "💡 inspiration ",
    "🤝 collaboration",
    "🧩 prototyping",
    "🎨 design systems",
    "🔁 iteration",
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

export default DesignProcess;