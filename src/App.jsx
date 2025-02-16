import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const myObj = {
      one: 1,
      two: 2,
    };
    setNumber(...Object.values(myObj));
  }, []);

  return (
    <>
      <h1 className="text-2xl font-bold underline">Hello</h1>
      <h2>{number}</h2>
    </>
  );
}

export default App;
