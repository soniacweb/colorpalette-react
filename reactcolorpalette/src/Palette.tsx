import React from 'react'
export interface PaletteProps {
paletteName: string, 
id: string
emoji: string 
colors: [ColorProps]

}
export interface  ColorProps {
    name: string
    color: string
}
const Palette = (props: any) => {
    console.log("p", props.colorData.paletteName)
    
  return (
    <div>
        <h1>Palette</h1>
     <h1>{props.colorData.paletteName}</h1>
        </div>
  )
}

export default Palette