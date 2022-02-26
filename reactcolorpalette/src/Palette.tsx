import React from "react";
export interface PaletteProps {
  paletteName?: string;
  id?: string;
  emoji?: string;
  colors?: [ColorProps];
  colorData?: any;
}
export interface ColorProps {
  name?: string;
  color?: string;
}
const Palette = ({
  paletteName,
  id,
  emoji,
  colors,
  ...props
}: PaletteProps) => {
  console.log("props", props);

  return (
    <div className="Palette">
      {/* navbar */}
      <div className="Palette-colors">
        <h1>Palette</h1>
        <h1>name: {paletteName}</h1>
        <h3>id: {id}</h3>
        <h3>{colors}</h3>
      </div>
      {/* footer */}
    </div>
  );
};

export default Palette;
