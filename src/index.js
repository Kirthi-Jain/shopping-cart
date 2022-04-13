import { render } from "react-dom";
import App from "./App";
import { StrictMode } from "react";

render(
  <StrictMode>
  <App/>
  </StrictMode>
,
  document.getElementById("root")
);
