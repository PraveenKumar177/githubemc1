import React, { useState } from "react";
import "./App.css";
import Square from "./Square";
import InputClr from "./InputClr";

function App() {
  const [color, setColor] = useState("");
  const [hexa, setHexa] = useState("");
  const [isDarkText, setDarkText] = useState(true);

  return (
    <div className="App">
      <h1>Color Identifier</h1>
      <Square
      color = {color}
      hexa = {hexa}
      isDarkText = {isDarkText}
      />
      <InputClr 
      color = {color}
      setColor = {setColor}
      setHexa = {setHexa}
      isDarkText = {isDarkText}
      setDarkText = {setDarkText}z
      />
    </div>
  );
}

export default App;
