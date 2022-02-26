import React from "react";
import Palette from "./Palette";
import SeedData from "./SeedColorPicker";

function App() {
  console.log("Seed4", SeedData[4].paletteName);
  return (
    <div>
      <Palette {...SeedData[4]} />
    </div>
  );
}

export default App;
