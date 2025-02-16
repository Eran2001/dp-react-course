function App() {
  const my = () => {
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
  };

  console.log("Start");

  setTimeout(my, 3000);
  console.log(5);
  console.log(6);
  console.log(7);
  console.log(8);

  return (
    <>
      <h1 className="text-2xl font-bold underline">Hello</h1>
    </>
  );
}

export default App;
