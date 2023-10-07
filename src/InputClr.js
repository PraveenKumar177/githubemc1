import React from "react";
import colornames from "colornames";

const InputClr = ({ color, setColor, setHexa, isDarkText, setDarkText }) => {
  return (
    <form>
      <input
        type="text"
        autoFocus
        placeholder=" Add Color Name"
        required
        style={{padding:8}}
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
          setHexa(colornames(e.target.value));
        }}
      />
      <button
        onClick={() => {
          setDarkText(!isDarkText);
        }}
      >
        Toggle Text Color
      </button>
    </form>
  );
};

export default InputClr;
