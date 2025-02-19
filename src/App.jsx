function App() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const filteredNumbers = numbers.filter((number) => number % 2 == 0);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello</h1>
      <ul>
        {filteredNumbers.map((index, number) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
