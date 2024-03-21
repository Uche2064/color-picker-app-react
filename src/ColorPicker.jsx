import { useState } from "react";


export default function ColorPicker() {
    const [color, setColor] = useState("#fff")


    function handleColorChange(e) {
        setColor(e.target.value)
    }

    const style = {
        backgroundColor: color 
    }

    return (
        <div className="color-picker-container">
            <p className="color-picker-title">Color picker</p>
            <div className="color-container" style={style}>
                <p>Selected Color: { color }</p>
            </div>
            <p className="select-color">Select a color: </p>
            <input type="color" value={color} onChange={handleColorChange} />
        </div>
    )
}