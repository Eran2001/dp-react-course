import { useState, useEffect } from "react";

function App() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1 className="text-2xl font-bold underline">Hello</h1>
      <h2>{number}</h2>
    </>
  );
}

export default App;
