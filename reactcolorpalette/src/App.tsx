import React from "react";
import Palette from "./Palette";
import SeedData from "./SeedColorPicker";

function App() {
  return (
    <div>
      <Palette colors={SeedData[4]} />
    </div>
  );
}

export default App;
