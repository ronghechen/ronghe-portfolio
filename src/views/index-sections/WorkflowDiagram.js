import React from "react";

function WorkflowDiagram() {
  const steps = [
    "customer feedback",
    "ai clustering",
    "hypothesis generator",
    "experiment tracker",
  ];

  return (
    <div className="workflow-container">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div className="workflow-box">{step}</div>
          {index < steps.length - 1 && <div className="workflow-arrow">→</div>}
        </React.Fragment>
      ))}
    </div>
  );
}

export default WorkflowDiagram;
