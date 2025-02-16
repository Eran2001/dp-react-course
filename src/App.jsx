function App() {
  const one = [1];
  const two = [2];
  const three = [...one, ...two, 3];
  console.log(three);

  const arrow = (num1, num2, num3) => {
    console.log(num1 + num2 + num3);
  };

  arrow(...three);

  return (
    <>
      <h1 className="text-2xl font-bold underline">Hello</h1>
    </>
  );
}

export default App;
