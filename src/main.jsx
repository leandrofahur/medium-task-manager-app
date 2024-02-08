import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// third-party providers
import { Provider } from "react-redux";
import store from "./state/store.js";

import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
