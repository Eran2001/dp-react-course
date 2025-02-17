function App() {
  const myPromise = new Promise((resolve, reject) => {
    resolve();
    reject();
  });

  myPromise.then(
    () => {
      console.log("Success");
    },
    () => {
      console.log("Failed");
    }
  );

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello</h1>
    </>
  );
}

export default App;
