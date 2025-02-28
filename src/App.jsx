import animals from "./animals";

function App() {
  const [x, y] = animals;
  console.log(x.sound);
  console.log(y.sound);

  return (
    <div className="">
      <h2 className="text-3xl font-bold underline m-4">Hello</h2>
    </div>
  );
}

export default App;
