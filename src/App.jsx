import { useEffect } from "react";

function App() {
  // Define the first function that accepts a callback
  function myFirst(callback) {
    callback();
    console.log("Hello");
  }

  // Define an asynchronous function
  const mySecond = () => {
    setTimeout(() => {
      console.log("Goodbye");
    }, 5000);
  };

  // Use the myFirst function with the mySecond callback
  useEffect(() => {
    myFirst(mySecond);
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello</h1>
    </>
  );
}

export default App;
