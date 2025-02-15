import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello</h1>
      <h2 className="text-2xl ml-4">{count}</h2>
      <button
        type="button"
        className="border border-#fff-600 rounded-2xl cursor-pointer p-4 bg-amber-500"
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Increase
      </button>
    </>
  );
}

export default App;
