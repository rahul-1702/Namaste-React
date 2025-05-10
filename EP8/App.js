import React from "react";
import ClassComp from "./src/components/ClassComp";
import "./public/css/style.css";

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
      <>
        <ClassComp name={"First"} age={23} />
        <ClassComp name={"Second"} age={23} />
      </>
    );
  }
}

export default App;
