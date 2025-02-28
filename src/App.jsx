import { useState, useEffect } from "react";

function App() {
  const now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);

  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = new Date().toLocaleTimeString();
      setTime(newTime);
    }, 1000); // 1000ms = 1 second

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

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
