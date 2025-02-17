function App() {
  function myFirst(callback) {
    console.log("Hello");
    callback();
  }

  function mySecond() {
    console.log("Goodbye");
  }

  myFirst(mySecond);
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello</h1>
    </>
  );
}

export default App;
