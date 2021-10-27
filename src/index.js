import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import counterStore from "./Store/Redux";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <Provider store={counterStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
