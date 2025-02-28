import { useState } from "react";

function App() {
  const now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);

  console.log(now);

  return (
    <div className="">
      <h2 className="text-3xl font-bold underline">Hello</h2>
    </div>
  );
}

export default App;
