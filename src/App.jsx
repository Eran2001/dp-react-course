const App = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-green-600">
      <h1 className="text-4xl text-white">Hello</h1>
      <input
        className="border-2 border-amber-50 text-center px-4 py-2 mt-2"
        type="text"
        name="fname"
        placeholder="First Name"
      />
      <input
        className="border-2 border-amber-50 text-center px-4 py-2 mt-2"
        type="text"
        name="lname"
        placeholder="Last Name"
      />
      <input
        className="border-2 border-amber-50 text-center text-green-500 bg-white px-4 py-2 mt-2 w-54"
        type="submit"
        value="Submit"
      />
    </div>
  );
};

export default App;
