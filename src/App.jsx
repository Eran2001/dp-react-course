import animals from "./animals";

function App() {
  const [cat, dog] = animals;

  const { name: catName, sound: catSound } = cat;

  return (
    <div className="">
      <h2 className="text-3xl font-bold underline m-4">Hello</h2>
      <h3>{cat.name}</h3>
      <h3>{dog.sound}</h3>
      <h3>{catName}</h3>
      <h3>{catSound}</h3>
    </div>
  );
}

export default App;
