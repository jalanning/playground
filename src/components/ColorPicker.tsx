import clsx from "clsx";
import { useState } from "react";
export default function ColorPicker(): JSX.Element {
    const [clickCounter, setClickCounter] = useState(0);
    const [selectedColor, setSelectedColor] = useState<string | null>(null)
    return (
      <>
        <div className="flex flex-col space-y-1">
        <div>
        {clickCounter === 0 ? (
            <p>You have not yet select a color!</p>
        ) : (
            <p className={clsx("font-bold",  selectedColor != null && selectedColor === "green" ? "border-8 border-green-600" : "",
                                selectedColor === "orange" ? "border-8 border-orange-400" : "",
                                selectedColor === "blue" ? "border-8 border-blue-400" : "",
                                selectedColor === "yellow" ? "border-8 border-yellow-300" : "")}>
                You selected the color {selectedColor}!
            </p>
        )}
        </div>
        <div className="flex space-x-1 place-content-center">
        <div
          className="h-10 w-10 border-8 border-orange-400 bg-orange-400"
          onClick={() => {setClickCounter(clickCounter + 1); setSelectedColor("orange")}}
        >
        </div>
      
        <div
          className="h-10 w-10 border-8 border-blue-400 backg bg-blue-400"
          onClick={() => {setClickCounter(clickCounter + 1); setSelectedColor("blue")}}
        >
        </div>
      
        <div
          className="h-10 w-10 border-8 border-green-600 bg-green-600"
          onClick={() => {setClickCounter(clickCounter + 1); setSelectedColor("green")}}
        >
        </div>
     
        <div
          className="h-10 w-10 border-8 border-yellow-300 bg-yellow-300"
          onClick={() => {setClickCounter(clickCounter + 1); setSelectedColor("yellow")}}
        >
        </div>
        </div>
        </div>
      </>
    );
  }