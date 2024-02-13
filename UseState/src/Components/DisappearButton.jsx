import { useState } from "react";

export default function DisappearButton() {
  const [isVisible, SetVisible] = useState(false);
  return (
    <div>
      <button
        className="disappearingButton"
        onClick={() => SetVisible(!isVisible)}
      >
        Toggle
      </button>
      {isVisible ? <p>I am here!!!</p> : null}
    </div>
  );
}
