function App() {
  const items = [
    "apple",
    "banana",
    "cherry",
    "date",
    "elderberry",
    "fig",
    "grape",
  ];

  const myFunc = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  };

  const randomItem = myFunc(items);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello</h1>
      <h2 className="text-2xl font-bold underline underline-offset-1">
        {randomItem}
      </h2>
    </>
  );
}

export default App;
