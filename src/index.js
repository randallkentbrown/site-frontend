import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import LightweightSite from "./new-components/LightweightSite";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <LightweightSite />
  </StrictMode>
);