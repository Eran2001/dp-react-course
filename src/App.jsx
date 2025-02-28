import animals from "./animals";

function App() {
  const [cat, dog] = animals;
  console.log(cat.sound);
  console.log(dog.sound);

  const { name: catName, sound: catSound } = cat;
  console.log(catName);
  console.log(catSound);

  return (
    <div className="">
      <h2 className="text-3xl font-bold underline m-4">Hello</h2>
    </div>
  );
}

export default App;
