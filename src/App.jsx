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
  console.log(randomItem);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello</h1>
    </>
  );
}

export default App;
