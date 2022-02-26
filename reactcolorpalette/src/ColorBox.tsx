import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./ColorBox.css";
import "./Palette.css";
export interface ColorBoxProps {
  background: string;
  name: string;
}
const ColorBox = ({ background, name }: ColorBoxProps) => {
  //   const [value, setValue] = useState("");
  //   const [copied, setCopied] = useState(false);
  console.log("Color", background);
  return (
    <CopyToClipboard text={background}>
      <div style={{ background }} className="ColorBox">
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-button">Copy</button>
        </div>
        <span className="see-more"> More </span>
      </div>
    </CopyToClipboard>
  );
};

export default ColorBox;
