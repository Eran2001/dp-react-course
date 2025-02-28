import { useState } from "react";

function App() {
  const now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);

  const getTime = () => {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  };

  return (
    <div className="">
      <h2 className="text-3xl font-bold underline m-4">{time}</h2>
      <button onClick={getTime} className="border-2 border-[#000] m-4 p-1">
        Get Time
      </button>
    </div>
  );
}

export default App;
