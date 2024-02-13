import { useState } from "react";
import "./App.css";
import Cookie from "./Cookie";
import DisappearButton from "./Components/DisappearButton";

export default function App() {
  const [myState, SetMyState] = useState(0);

  function incrementState() {
    SetMyState(myState + 1);
  }

  function decrementState() {
    SetMyState(myState - 1);
  }

  function resetState() {
    SetMyState(0);
  }
  return (
    <div>
      <DisappearButton />
      <Cookie />
      <p onClick={resetState}>{myState} Cookies!</p>
      <button onClick={incrementState}>Click to get more cookies</button>

      <button onClick={decrementState}>Click to get one less cookie</button>
      <button onClick={resetState}>Reset button</button>
    </div>
  );
}
