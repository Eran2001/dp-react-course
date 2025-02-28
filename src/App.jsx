import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="">
      <h2 className="text-3xl font-bold underline m-4">Hello {name}</h2>
      <input
        onChange={handleChange}
        type="text"
        name="name"
        placeholder="Type your name"
        className="border-2 border-black"
      />
    </div>
  );
}

export default App;
