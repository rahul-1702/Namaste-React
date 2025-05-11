import React from "react";
import useOnlineStatus from "../utilities/useOnlineStatus";

function Header() {
  const status = useOnlineStatus();

  return (
    <div>
      <h1>I am Header</h1>
      <span>
        Online Status - <strong>{status ? "Online" : "Offline"}</strong>
      </span>
    </div>
  );
}

export default Header;
