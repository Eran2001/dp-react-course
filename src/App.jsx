const App = () => {
  const vegetables = [1, 2, 3, 4, 5];
  const fruits = [...vegetables, 6, 7, 8, 9, 10];
  console.log(fruits);

  return (
    <div>
      <h1 className="text-4xl text-white">Hello</h1>
    </div>
  );
};

export default App;
