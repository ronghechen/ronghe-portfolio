// React / Router
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// Global styles
import "bootstrap/dist/css/bootstrap.min.css";
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";

import withPageLoader from "components/withPageLoader";

import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import ProfilePage from "views/examples/ProfilePage.js";
import Portfolio from "views/Portfolio.js";
import Projects from "views/Projects.js";
import Echolab from "views/Echolab.js";
import Notesync from "views/Notesync.js";
import Placeholder from "views/Placeholder";
import TransportApp from "views/TransportApp.js";
import OpenQQuantify from "views/OpenQQuantify.js";

const pages = {
  "/index": Index,
  "/nucleo-icons": NucleoIcons,
  "/profile-page": ProfilePage,
  "/portfolio": Portfolio,
  "/projects": Projects,
  "/echolab": Echolab,
  "/notesync": Notesync,
  "/placeholder": Placeholder,
  "/nu-transport-app": TransportApp,
  "/openqquantify": OpenQQuantify,
};

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      {Object.entries(pages).map(([path, Component]) => (
        <Route
          key={path}
          path={path}
          element={React.createElement(withPageLoader(Component))}
        />
      ))}
      <Route path="*" element={<Navigate to="/index" replace />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
