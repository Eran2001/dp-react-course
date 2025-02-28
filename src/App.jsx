import animals from "./animals";

function App() {
  const [cat, dog] = animals;

  return (
    <div className="">
      <h2 className="text-3xl font-bold underline m-4">Hello</h2>
      <h3>{JSON.stringify(cat)}</h3>
      <h3>{JSON.stringify(dog)}</h3>
    </div>
  );
}

export default App;
