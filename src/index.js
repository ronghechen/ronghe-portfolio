import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
// pages for this kit
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LoginPage from "views/examples/LoginPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import Portfolio from "views/Portfolio.js";
import Echolab from "views/Echolab.js";
import Notesync from "views/Notesync.js";
import Raiso from "views/Raiso.js";
import TransportApp from "views/TransportApp.js";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/index" element={<Index />} />
      <Route path="/nucleo-icons" element={<NucleoIcons />} />
      <Route path="/profile-page" element={<ProfilePage />} />
      <Route path="/login-page" element={<LoginPage />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/echolab" element={<Echolab />} />
      <Route path="/notesync" element={<Notesync />} />
      <Route path="/raiso" element={<Raiso />} />
      <Route path="/nu-transport-app" element={<TransportApp />} />
      <Route path="*" element={<Navigate to="/index" replace />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
