function App() {
  function myFirst(callback) {
    callback();
    console.log("Hello");
  }

  function mySecond() {
    setTimeout(() => {
      console.log("Goodbye");
    }, 5000);
  }

  myFirst(mySecond);
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello</h1>
    </>
  );
}

export default App;
