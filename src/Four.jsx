import { useState } from "react";
export default function Four() {
  const [isToggled, setIsToggeles] = useState(false);
  const handleToggle = () => {
    setIsToggeles(!isToggled);
  };
  return (
    <div>
      <label>
        <input type="checkbox" onChange={handleToggle} />
      </label>
      <p>{isToggled ? "ON" : "OFF"}</p>
    </div>
  );
}
