import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-red-500 text-white text-3xl font-bold p-6">
        Tailwind is working!
      </div>
    </>
  );
}

export default App;
