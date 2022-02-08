import React from "react";
import AdvancedClickCounter from "./components/AdvancedClickCounter";
import ColorPicker from "./components/ColorPicker";
// import ClickCounter from './components/clickcounter';

function App(): JSX.Element {
  return (
    <div className="text-center text-yellow-800 text-2xl">
      {/* <ClickConpmunter /> */}
      <ColorPicker />
    </div>
  );
}

export default App;
