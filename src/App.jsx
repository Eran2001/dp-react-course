function App() {
  const handleChange = () => {
    console.log("Changed");
  };

  return (
    <div className="">
      <h2 className="text-3xl font-bold underline m-4">Form</h2>
      <input
        onChange={handleChange}
        type="text"
        name="name"
        placeholder="Type your name"
        className="border-2 border-black"
      />
    </div>
  );
}

export default App;
