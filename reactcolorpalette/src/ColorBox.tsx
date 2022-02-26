import React from "react";
import "./ColorBox.css";
import "./Palette.css";
export interface ColorBoxProps {
  background: string;
  name: string;
}
const ColorBox = ({ background, name }: ColorBoxProps) => {
  console.log("Color", background);
  return (
    <div style={{ background: background }} className="ColorBox">
      <span>{name}</span>
      <span> More </span>
    </div>
  );
};

export default ColorBox;
