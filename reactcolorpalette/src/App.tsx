import React from "react";
import Palette from "./Palette";
import SeedData from "./SeedColorPicker";

function App() {
  console.log("Seed4", SeedData[4].paletteName);
  return (
    <div>
      <Palette
        {...SeedData[4]}
        // colorData={SeedData[4]}
        // paletteName={SeedData[4].paletteName}
        // id={SeedData[4].id}
        // emoji={SeedData[4].emoji}
        // colors={[SeedData[4].colors[0]]}
      />
    </div>
  );
}

export default App;
