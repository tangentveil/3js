import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react";
import App from "./App";
import './index.css'

Sentry.init({
  dsn: "https://430796ec872ff1c54c6acc78dcf1f19a@o4509688769806336.ingest.us.sentry.io/4509688771903488",
  integrations: [Sentry.browserTracingIntegration()],
  tracesSampleRate: 1.0,
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
