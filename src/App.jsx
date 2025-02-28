import { useState } from "react";

function App() {
  const [over, isOver] = useState(false);

  const onOver = () => {
    isOver(!over);
  };

  return (
    <div className="">
      <h2 className="text-3xl font-bold underline m-4">Hello</h2>
      <button
        onMouseOver={onOver}
        className={`cursor-pointer border-2 border-black m-4 px-4 py-2 ${
          isOver ? "bg-black text-white" : "bg-white text-black"
        }  `}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
