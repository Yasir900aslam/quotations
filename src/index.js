import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { GeistProvider, CssBaseline, Page } from "@geist-ui/react";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <GeistProvider>
      <CssBaseline />
      <Page>
        <App />
      </Page>
    </GeistProvider>
  </StrictMode>,
  rootElement
);
