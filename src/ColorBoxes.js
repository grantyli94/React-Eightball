import "./ColorBoxes.css";
import { useState } from "react";
import ColorBox from "./ColorBox";
// App --> ColorBoxes --> ColorBox

function ColorBoxes(props) {
  return (
    <div className="ColorBoxes">
      {[...Array(props.numBoxes)].map(() => (
        <ColorBox />
      ))}
    </div>
  );
}

ColorBoxes.defaultProps = {
  numBoxes: 16,
};

export default ColorBoxes;

/* 
<ul>
{ msgs.map(m => <li>{m.text}</li>) }
</ul>
*/
