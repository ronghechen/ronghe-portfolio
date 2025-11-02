import React, { useState, useEffect } from "react";
import LoadingScreen from "./loadingScreen";

const withPageLoader = (WrappedComponent) => {
  return function PageWithLoader(props) {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
      const showTimer = setTimeout(() => setFadeOut(true), 1000); 
      return () => clearTimeout(showTimer);
    }, []);

    return (
      <div style={{ position: "relative" }}>
        <WrappedComponent {...props} />
        <LoadingScreen fadeOut={fadeOut} />
      </div>
    );
  };
};

export default withPageLoader;
