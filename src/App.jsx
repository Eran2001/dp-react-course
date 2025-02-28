import { useState } from "react";

function App() {
  const [over, setOver] = useState(false);

  const onOver = () => {
    setOver(true);
  };

  const onOut = () => {
    setOver(false);
  };

  return (
    <div className="">
      <h2 className="text-3xl font-bold underline m-4">Hello</h2>
      <button
        onMouseOver={onOver}
        onMouseOut={onOut}
        className={`cursor-pointer border-2 border-black m-4 px-4 py-2 ${
          over ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
