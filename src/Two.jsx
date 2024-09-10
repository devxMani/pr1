import { useState } from "react"

export default function Two() {
 const [input, setInput] = useState("");
    return (
    <div>
    
      <input type="text" onChange={(e) => setInput(e.target.value)}/>
      <p>User input: {input}</p>
    </div>
  )
}
