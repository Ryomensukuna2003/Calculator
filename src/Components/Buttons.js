import React, { useState } from "react";

function Buttons() {
  const [display, setDisplay] = useState("");
  const [expression, setExpression] = useState("");
  const [outputDisplayed, setoutputDisplayed] = useState(false);

  function clearcontent() {
    setDisplay("");
    setExpression("");
  }

  const assignval = (e) => {
    if (setoutputDisplayed) {
      clearcontent();
      setDisplay(display.concat(e.target.value));
      setExpression(expression.concat(e.target.value));
    } else {
      setDisplay(display.concat(e.target.value));
      setExpression(expression.concat(e.target.value));
    }
  };

  function equalsto() {
    setDisplay(eval(expression));
    setoutputDisplayed(true);
    // clearcontent();
  }

  function deleteelement() {
    setExpression(expression.slice(0, -1));
    setDisplay(expression.slice(0, -1));
  }

  return (
    <div class="container">
      <div className="display">
        {display !== "" ? (
          <h2>{display}</h2>
        ) : (
          <h2 className="placeholder">Nothing Here</h2>
        )}
      </div>
      <div class="calculator">
        <div class="calculator-buttons">
          <button
            onClick={clearcontent}
            class="btn is-clear span-2 orange operator"
          >
            C
          </button>
          <button onClick={deleteelement} class="btn orange operator">
            &larr;
          </button>
          <button onClick={assignval} value={"/"} class="btn orange operator">
            &divide;
          </button>
          <button onClick={assignval} value={7} class="btn">
            7
          </button>
          <button onClick={assignval} value={8} class="btn">
            8
          </button>
          <button onClick={assignval} value={9} class="btn">
            9
          </button>
          <button onClick={assignval} value={"*"} class="btn orange operator">
            x
          </button>
          <button onClick={assignval} value={4} class="btn">
            4
          </button>
          <button onClick={assignval} value={5} class="btn">
            5
          </button>
          <button onClick={assignval} value={6} class="btn">
            6
          </button>
          <button onClick={assignval} value={"-"} class="btn orange">
            -
          </button>
          <button onClick={assignval} value={1} class="btn">
            1
          </button>
          <button onClick={assignval} value={2} class="btn">
            2
          </button>
          <button onClick={assignval} value={3} class="btn">
            3
          </button>
          <button onClick={assignval} value={"+"} class="btn orange operator">
            +
          </button>
          <button onClick={assignval} value={0} class="btn span-3">
            0
          </button>
          <button onClick={equalsto} class="btn orange operator">
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Buttons;
