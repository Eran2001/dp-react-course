function App() {
  function openFile(callback) {
    setTimeout(() => {
      console.log("File Opened...");
      callback();
    }, 3000);
  }

  function addSomething() {
    console.log("Something Added...");
  }

  function removeSomething() {
    console.log("Something Removed...");
  }

  const userInput = Number(prompt("Enter your number: "));
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
