import React, { useEffect } from "react";

function FC() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Interval running");
    }, 1000);

    //  Act as ComponentDidUnmount for cleanup the code
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <div></div>;
}

export default FC;
