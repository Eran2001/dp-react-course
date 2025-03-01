import { useState } from "react";

const App = () => {
  const [fullname, setFullName] = useState({
    fName: "",
    lName: "",
  });

  const changeFullName = (e) => {
    setFullName(e.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-green-600">
      <h1 className="text-4xl text-white">
        Hello {fullname.fName} {fullname.lName}
      </h1>
      <input
        className="border-2 border-amber-50 text-center px-4 py-2 mt-2"
        type="text"
        name="fname"
        placeholder="First Name"
        onChange={changeFullName}
        value={fullname.fName}
      />
      <input
        className="border-2 border-amber-50 text-center px-4 py-2 mt-2"
        type="text"
        name="lname"
        placeholder="Last Name"
        onChange={changeFullName}
        value={fullname.lName}
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
