import React from "react";
import FancyBorder from "./subcomponents/FancyBorder";
function App() {
  return (
    // pick either yellow, red, blue or pink
    <FancyBorder color="yellow">
      <h1 className="Dialog-title">Welcome</h1>
      <p className="Dialog-message">Thank you for visiting our spacecraft!</p>
    </FancyBorder>
  );
}
export default App;
