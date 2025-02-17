import { useEffect } from "react";

function App() {
  function myFirst(callback) {
    callback();
    console.log("Hello");
  }

  const mySecond = () => {
    setTimeout(() => {
      console.log("Goodbye");
    }, 5000);
  };

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
