function App() {
  const openFile = (callback) => {
    setTimeout(() => {
      console.log("File Opened...");
      callback();
    }, 3000);
  };

  const addSomething = () => {
    console.log("Something Added...");
  };

  const removeSomething = () => {
    console.log("Something Removed...");
  };

  const userInput = 1;
  if (userInput === 1) {
    openFile(addSomething);
  } else {
    openFile(removeSomething);
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello</h1>
    </>
  );
}

export default App;
