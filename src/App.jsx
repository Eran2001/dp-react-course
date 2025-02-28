import { useState, useEffect } from "react";

function App() {
  const now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);

  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = new Date().toLocaleTimeString();
      setTime(newTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      <h2 className="text-3xl font-bold underline m-4">{time}</h2>
    </div>
  );
}

export default App;
