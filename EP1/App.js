// Hello App using JavaScript ===============================

// const heading = document.createElement('h1');
// heading.innerHTML = 'Hello from Javascript !!';

// const root = document.getElementById('root');

// root.appendChild(heading);

// Hello App using React CDN ===============================

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

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

setTimeout(() => {
    root.render(parent);
}, 2000);

// console.log(root);
