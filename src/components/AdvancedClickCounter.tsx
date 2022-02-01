import clsx from "clsx";
import { useState } from "react";

export default function AdvancedClickCounter(): JSX.Element {
  const [clickCounter, setClickCounter] = useState<number>(0);

  // the <> </> below is known as a react fragment, and is often used as a wrapper element instead of a div
  // i think that's because its faster, but im not sure. note you cannot give react fragments a className
  // or anything like that (no onClick, nothing, purely a wrapper). I think they're slightly more performant than divs...

  // The functions return type is JSX.ELement, not JSX.Element[],
  // which is why everything must be nicely wrapped in one tag
  return (
    <>
      {/* use turnary statements like this to conditionally render components */}
      {clickCounter === 0 ? (
        // if the clickCounter is still 0, render this text
        <p>You have not yet clicked the button!</p>
      ) : (
        // otherwise, render this text
        <p className={clsx("font-bold", clickCounter > 5 ? "text-3xl" : "")}>
          You've clicked {clickCounter} times
        </p>
        // you can see the conditionally applied class of 'text-3xl' once the clickCounter gets above 5
        // again, another turnary statement, I told you we'd be using lots of these :)
      )}
      {/* The button is outside of the turnary statement because we want it to always be rendered */}
      <button
        className="border-8 border-blue-300"
        onClick={() => setClickCounter(clickCounter + 1)}
      >
        Click me
      </button>
    </>
  );
}

// notice the brakets surrounding the first turnary statement. They serve the same purpose as the brackets
// that surround clickCounter in the 'You've clicked {clickCounter} times' p tag
// the brackets allow you to have expressions inside of your HTML. They will be confusing to work with at first
// but they are what make react so powerful!
// if an expression within the brackets spans multiple lines, it must be wrapped in parenthesis
