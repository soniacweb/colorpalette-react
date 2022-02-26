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
    <div style={{ background }} className="ColorBox">
      <div className="copy-container">
        <div className="box-content">
          <span>{name}</span>
        </div>
        <button className="copy-button">Copy</button>
      </div>
      <span className="see-more"> More </span>
    </div>
  );
};

export default ColorBox;
