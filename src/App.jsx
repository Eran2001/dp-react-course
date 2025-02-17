async function App() {
  const myPromise = new Promise((resolve, reject) => {
    resolve();
    reject();
  });

  try {
    await myPromise;
    console.log("Promise resolved successfully!");
  } catch {
    console.log("Promise was rejected!");
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello</h1>
    </>
  );
}

export default App;
