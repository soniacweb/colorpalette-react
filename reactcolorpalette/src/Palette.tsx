import React from "react";
import ColorBox from "./ColorBox";
// export interface PaletteProps {
//   paletteName: string;
//   id: string;
//   emoji: string;
//   colors?: [ColorProps];
// }
// export interface ColorProps {
//   name?: string;
//   color?: string;
// }
const Palette = ({ paletteName, id, emoji, colors }: any) => {
  //   console.log("p", colors);

  return (
    <div className="Palette">
      {/* navbar */}

      <div className="Palette-colors">
        {colors.map((item: any, idx: number) => {
          return (
            <ColorBox background={item.color} key={idx} name={item.name} />
          );
        })}
        {/* color */}
      </div>
      {/* footer */}
    </div>
  );
};

export default Palette;
