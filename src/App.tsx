import React from "react";
import AdvancedClickCounter from "./components/AdvancedClickCounter";
// import ClickCounter from './components/clickcounter';

function App(): JSX.Element {
  return (
    <div className="text-center text-yellow-800 text-2xl">
      {/* <ClickCounter /> */}
      <AdvancedClickCounter />
    </div>
  );
}

export default App;
