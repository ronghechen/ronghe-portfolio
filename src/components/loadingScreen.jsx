import React from "react";
import logo from "assets/img/rc-logo.png";
const LoadingScreen = ({ fadeOut }) => {
    return (
        <div className={`loading-screen ${fadeOut ? "fade-out" : ""}`}>
            <img src={logo} alt="RC Logo" className="pulse-logo"/>
        </div>
    );
}

export default LoadingScreen;