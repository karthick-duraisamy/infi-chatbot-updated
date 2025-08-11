import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reactToWebComponent from "react-to-webcomponent";

const WebComponent = reactToWebComponent(App, React, ReactDOM, {
  props: ["userId", "token"], // register expected props
  // shadow is optional and defaults to undefined
});

customElements.define("react-mf", WebComponent);
