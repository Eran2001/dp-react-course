import { useEffect } from "react";

function App() {
  async function openFile() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("File Opened...");
        resolve();
      }, 3000);
    });
  }

  async function addSomething() {
    console.log("Something Added...");
  }

  useEffect(() => {
    async function init() {
      await openFile();
      addSomething();
    }

    init();
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello</h1>
    </>
  );
}

export default App;
