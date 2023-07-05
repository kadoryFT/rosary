import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [talk] = useState({
    one: "الله اكبر ",
    two: " الحمدلله",
    three: " سبحان الله"
  });
  function increase() {
    setCount(count + 1);
    if (count === 100) {
      setCount(0);
    }
  }

  function restet() {
    setCount(0);
  }
  return (
    <div className="container">
      <div >
        <pre>
          <h1>
            {count <= 34
              ? talk.one
              : count <= 67
              ? talk.two
              : count > 67
              ? talk.three
              : null}
          </h1>
        </pre>
      </div>
      <h1>{count}</h1>
      <button type="button" class="btn btn-dark" onClick={increase}>
        +
      </button>
      <div></div>
      <button type="button" class="btn btn-dark" onClick={restet} >
        re
      </button>
    </div>
  );
}

export default App;
