import React from "react";
import ClassComp from "./src/components/ClassComp";
import About from "./src/components/About";

import "./public/css/style.css";
import { BrowserRouter, Routes, Route } from "react-router";

class App extends React.Component {
  constructor() {
    super();
    console.log("App Constructor");
  }

  componentDidMount() {
    console.log("App Component did mount");
  }

  render() {
    console.log("App Render method");

    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ClassComp name={"First"} age={23} />
                <ClassComp name={"Second"} age={23} />
              </>
            }
          />
          <Route
            path="/mix"
            element={
              <>
                <ClassComp name={"First"} age={23} />
                <About course={"React"} />
              </>
            }
          />
          <Route path="/about" element={<About course={"React"} />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
