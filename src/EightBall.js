import "./EightBall.css";
import { useState } from "react";

/** EightBall
 *
 * Props:
 * - answers (array of objects with the keys of msg and color)
 *
 * State:
 * - msg
 * - color
 *
 * App -> EightBall
 */

function EightBall(props) {
  const [msg, setMsg] = useState("Think of a Question");
  const [color, setColor] = useState("black");
  const [greenCount, setGreenCount] = useState(0);
  const [redCount, setRedCount] = useState(0);
  const [goldCount, setGoldCount] = useState(0);

  function msgAndColorHandler(answers) {
    let idx = Math.floor(Math.random() * answers.length);
    let answer = answers[idx];
    setMsg(answer.msg);
    setColor(answer.color);
    updateCount(answer.color);
  }

  function updateCount(color) {
    if (color === "green") {
      setGreenCount(greenCount + 1);
    } else if (color === "red") {
      setRedCount(redCount + 1);
    } else if (color === "goldenrod") {
      setGoldCount(goldCount + 1);
    }
  }

  function resetHandler() {
    setMsg("Think of a Question");
    setColor("black");
    setGreenCount(0);
    setGoldCount(0);
    setRedCount(0);
  }

  return (
    <div className="EightBall">
      <div
        className="EightBall-ball"
        onClick={() => msgAndColorHandler(props.answers)}
        style={{ backgroundColor: color }}
      >
        {msg}
      </div>
      <button onClick={resetHandler}>Reset</button>
      <div>
        <ul>
          <li>Green count: {greenCount}</li>
          <li>Red count: {redCount}</li>
          <li>Gold count: {goldCount}</li>
        </ul>
      </div>
    </div>
  );
}

EightBall.defaultProps = {
  answers: [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
  ],
};

export default EightBall;
