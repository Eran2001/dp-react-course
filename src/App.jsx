import { useState } from "react";

const App = () => {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");

  const changeFName = (e) => {
    setFName(e.target.value);
  };

  const changeLName = (e) => {
    setLName(e.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-green-600">
      <h1 className="text-4xl text-white">
        Hello {fname} {lname}
      </h1>
      <input
        className="border-2 border-amber-50 text-center px-4 py-2 mt-2"
        type="text"
        name="fname"
        placeholder="First Name"
        onChange={changeFName}
        value={fname}
      />
      <input
        className="border-2 border-amber-50 text-center px-4 py-2 mt-2"
        type="text"
        name="lname"
        placeholder="Last Name"
        onChange={changeLName}
        value={lname}
      />
      <input
        className="border-2 border-amber-50 text-center text-green-700 bg-white px-4 py-2 mt-2 w-54"
        type="submit"
        value="Submit"
      />
    </div>
  );
};

export default App;
