import React from "react";

const UncontrolledComp: React.FC = () => {
  return (
    <div>
      {/* Controlled Accordion Component: - The open/close state of each
      accordion is managed by React state in the parent component. - Only one
      accordion can be open at a time; opening one closes all others. - The
      parent component "controls" which accordion is open by passing props to
      each Accordion child. - This is achieved by lifting the open/close state
      up to the parent and passing down handlers and state as props.
      */}

      {/*
      Uncontrolled Accordion Component: - Each Accordion manages its own
      open/close state internally (using useState inside the Accordion). - The
      parent does not know or control which accordion is open. - This can lead
      to multiple accordions being open at the same time, and the parent cannot
      enforce only one open at a time. - The state is not "lifted up" and is
      local to each Accordion. */}
    </div>
  );
};

export default UncontrolledComp;
