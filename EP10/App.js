import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./src/components/Header";
// import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import Error from "./src/components/Error";

// Chunking
// Code spliting
// Dynamic bundling
// Lazy loading
// On demand loading
const Body = lazy(() => {
  return new Promise((res) => {
    setTimeout(() => {
      res(import("./src/components/Body"));
    }, 1000);
  });
});

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route
          path="/"
          element={
            <>
              <Header />
              <Suspense fallback={<h1>Loading ...</h1>}>
                <Body />
              </Suspense>
              <Footer />
            </>
          }
        />
        <Route
          path="/body"
          element={
            <Suspense fallback={<h1>Loading ...</h1>}>
              <Body />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
