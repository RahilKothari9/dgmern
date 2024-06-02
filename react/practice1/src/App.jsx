import "./App.css";
import ColourInput from "./components/ColourInput";
import Square from "./components/Square";
import { useState } from "react";
import Topbar from "./components/Topbar";
import Content from "./components/Content";
function App() {
  
  const [colour, setColour] = useState("");
  const [section, setSection] = useState("users");

  return (
    <>
      {/* <Square colour={colour} />
      <ColourInput colour={colour} setColour={setColour} /> */}
      <Topbar section={section} setSection={setSection}/>
      <Content section={section}/>
    </>
  );
}

export default App;
