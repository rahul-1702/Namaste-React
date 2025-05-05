import React from "react";
import ReactDOM from "react-dom/client";

// parent : React Element / JS Object => render : (converted into HTML)

const parent = React.createElement(
  "div",
  {
    id: "parent",
    className: "parent-container",
  },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading1", key: 1 }, "I am H1 tag"),
    React.createElement("h2", { id: "heading2", key: 2 }, "I am H2 tag"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
