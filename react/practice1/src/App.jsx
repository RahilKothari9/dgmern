import "./App.css";
import ColourInput from "./components/ColourInput";
import Square from "./components/Square";
import { useState } from "react";
function App() {
  
  const [colour, setColour] = useState("");

  return (
    <>
      <Square colour={colour} />
      <ColourInput colour={colour} setColour={setColour} />
    </>
  );
}

export default App;
