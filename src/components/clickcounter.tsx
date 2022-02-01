import { useState } from "react";

export default function ClickCounter(): JSX.Element {
  const [clickCounter, setClickCounter] = useState(0);

  return (
    <div>
      You've clicked {clickCounter} times
      <button className='border border-8 border-blue-300' onClick={() => setClickCounter(clickCounter + 1)}>
        Click me
      </button>
    </div>
  );
}
