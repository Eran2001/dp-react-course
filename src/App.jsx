import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(inputValue);
    setInputValue("");
  };

  return (
    <div className="">
      <h2 className="text-3xl font-bold underline m-4">Hello {name}</h2>
      <form onSubmit={handleSubmit} className="border-2 border-black p-4">
        <input
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Type your name"
          className="border-2 border-black"
          value={inputValue}
        />
        <input
          className="border-2 border-black block my-2 px-4 py-2"
          type="submit"
          name="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}

export default App;
