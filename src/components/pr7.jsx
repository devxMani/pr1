import { useState } from "react";
export default function Pr7() {
  const [backgroundColor, setBackgroundColor] = useState("red");
  const handleClick = () => {
    const newColor =
      backgroundColor === "white"
        ? "red"
        : backgroundColor === "white"
        ? "lightblue"
        : "white";
    setBackgroundColor(newColor);
  };
  return (
    <div
      onClick={handleClick}
      style={{
        backgroundColor,
        width: 200,
        height: 200,
        cursor: "pointer",
      }}
    >
      click me to change color
    </div>
  );
}
