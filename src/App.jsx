import { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  return (
    <>
      <h1 className="text-3xl text-center font-bold underline">Hello</h1>
      <ul className="m-4">
        {posts.map((post) => {
          return (
            <li key={post.id} className="mb-4 p-4 border border-amber-950">
              <h2 className="text-xl">{post.title}</h2>
              <p>{post.body}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
