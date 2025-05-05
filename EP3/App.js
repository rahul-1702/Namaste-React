import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement(
//   "div",
//   {
//     id: "parent",
//     className: "parent-container",
//   },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", { id: "heading1", key: 1 }, "I am H1 tag"),
//     React.createElement("h2", { id: "heading2", key: 2 }, "I am H2 tag"),
//   ])
// );

// JSX => parcel (watched) => babel (transpiled) => React Element => render (converted to HTML)

// React Element =========
const parent = (
  <div>
    <h1 id="heading" className="heading">
      This is heading from React Element
    </h1>
  </div>
);

// React Functional Component =========
const Child = () => (
  <div>
    <h1 id="child" className="child">
      This is Child from React Component
    </h1>
  </div>
);

// React element inside React element ==========
const text = <section>{parent}<Child /></section>;

// React component inside react component (Component Compositions) and React element inside React component =========
const Parent = () => (
  <div>
    <Child />
    <Child></Child>
    {Child()}
    <h1 id="heading" className="heading">
      This is heading from React Component
    </h1>
    {text}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);
root.render(<Parent />);
