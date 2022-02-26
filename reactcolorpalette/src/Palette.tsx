import React from "react";
export interface PaletteProps {
paletteName: string, 
id: string
emoji: string 
colors?: [ColorProps]

}
export interface  ColorProps {
    name?: string
    color?: string
}
const Palette = (props: any ) => {
    console.log("p", props.colors)
    
  return (
    <div className='Palette'>
    {/* navbar */}
        <div className="Palette-colors">
        <h1>Palette</h1>
        <h1>{props.paletteName}</h1>
        </div>
    {/* footer */}
        </div>
  )
}

export default Palette;
