import React from "react";

function HOC<P extends object>(Comp: React.ComponentType<P>) {
  return (props: P) => {
    return (
      <div className="hoc mt-20 bg-red-500">
        <Comp {...props} />
      </div>
    );
  };
}

export default HOC;
