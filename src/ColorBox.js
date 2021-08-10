import { useState } from "react";
import "./ColorBox.css";

function ColorBox(props) {
  const [color, setColor] = useState(getRandomColor());

  function getRandomColor() {
    let colors = props.colors;
    let idx = Math.floor(Math.random() * colors.length);
    return colors[idx];
  }

  return (
    <div className="ColorBox">
      <div className="ColorBox-Box" style={{ backgroundColor: color }}></div>
      <button onClick={() => setColor(getRandomColor)}>Change</button>
    </div>
  );
}

ColorBox.defaultProps = {
  colors: ["red", "green", "purple", "blue"],
};

export default ColorBox;
