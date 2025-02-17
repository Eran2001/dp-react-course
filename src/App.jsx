import { useEffect } from "react";

function App() {
  useEffect(() => {
    const handlePromise = async () => {
      const myPromise = new Promise((resolve, reject) => {
        resolve();
        // reject(); // Uncomment to test failure case
      });

      try {
        await myPromise;
        console.log("Success");
      } catch (error) {
        console.log("Failed");
      }
    };

    handlePromise();
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello</h1>
    </>
  );
}

export default App;
