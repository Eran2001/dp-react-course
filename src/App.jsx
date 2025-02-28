import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="m-4 p-6 border-2 border-black flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold">
        {/* {isLoggedIn ? "Welcome back, User!" : "Please log in"} */}
        {isLoggedIn && "Welcome back, User!"}
      </h2>
      <button
        onClick={() => setIsLoggedIn(!isLoggedIn)}
        className="bg-red-500 text-white px-4 py-2 rounded mt-2 ml-2"
      >
        Toggle Message
      </button>
    </div>
  );
}

export default App;
