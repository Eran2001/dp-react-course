const App = () => {
  const name = ["John", "Doe"];
  const randomName = name[Math.floor(Math.random() * name.length)];

  return (
    <div>
      <h1 className="text-5xl font-bold underline">Hello, World!</h1>
      <h3 className="text-3xl font-bold">{randomName}</h3>
    </div>
  );
};

export default App;
