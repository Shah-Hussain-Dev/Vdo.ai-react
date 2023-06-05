import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import VdoAi from "./components/VdoAi";

function App() {
  const [name,setName] = useState("Z1 Media")
  return (
    <div>
      <div>
        <h1>Counter Component</h1>
        <Counter />
      </div>
      <div>
      </div>

     <div className="flex col" >
     <h1>{name ? "Z1 Tech" : "Z1 Media"}</h1>
      <button onClick={()=>setName(!name)}>Change Name</button>
     </div>
    </div>
  );
}

export default App;
