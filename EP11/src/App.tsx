import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import UserProvider from "./context/UserContext";
import About from "./components/About";
import ClassComp from "./components/ClassComp";
import HOC from "./components/HOC";

// Higer Order Component / are also called pure functions =====
const SuperAbout = HOC(About);

function App() {

  return (
    <>
      <div>
        <a rel="noopener" href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a rel="noopener" href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <UserProvider finalName="Ab Sir">
          {/* <About page="About" /> */}
          <SuperAbout page="Super-About" />
        </UserProvider>
        <hr />
           <UserProvider finalName="CC Sir">
        <ClassComp page="ClassComp" />
      </UserProvider>
      </div>
    </>
  );
}

export default App;
