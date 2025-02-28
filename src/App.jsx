import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    city: "",
  });

  const [submittedData, setSubmittedData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setFormData({ name: "", email: "", age: "", city: "" });
  };

  return (
    <div className="p-4 flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold underline m-4">
        Hello {submittedData.name || "Guest"}
      </h2>
      <form onSubmit={handleSubmit} className="border-2 border-black p-4">
        <input
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Type your name"
          className="border-2 border-black block my-2 px-4 py-2"
          value={formData.name}
        />

        <input
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="Type your email"
          className="border-2 border-black block my-2 px-4 py-2"
          value={formData.email}
        />

        <input
          onChange={handleChange}
          type="number"
          name="age"
          placeholder="Enter your age"
          className="border-2 border-black block my-2 px-4 py-2"
          value={formData.age}
        />

        <input
          onChange={handleChange}
          type="text"
          name="city"
          placeholder="Enter your city"
          className="border-2 border-black block my-2 px-4 py-2"
          value={formData.city}
        />

        <input
          className="border-2 border-black block my-2 px-4 py-2 cursor-pointer bg-gray-200 hover:bg-gray-300"
          type="submit"
          name="submit"
          value="Submit"
        />
      </form>

      {submittedData.name && (
        <div className="mt-4 p-4 border-2 border-black">
          <h3 className="text-xl font-bold">Submitted Data:</h3>
          <p>
            <strong>Name:</strong> {submittedData.name}
          </p>
          <p>
            <strong>Email:</strong> {submittedData.email}
          </p>
          <p>
            <strong>Age:</strong> {submittedData.age}
          </p>
          <p>
            <strong>City:</strong> {submittedData.city}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
