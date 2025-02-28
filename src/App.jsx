import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <h2 className="text-xl font-bold">
        {isLoggedIn ? "Welcome back, User!" : "Please log in"}
      </h2>
      <button
        onClick={() => setIsLoggedIn(!isLoggedIn)}
        className="bg-red-500 text-white px-4 py-2 rounded mt-2 ml-2"
      >
        Toggle Message
      </button>
    </>
  );
}

export default App;
