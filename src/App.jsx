import PropTypes from "prop-types";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello</h1>
      <My name="Eran" />
    </>
  );
}

export default App;

export const My = ({ name }) => {
  return (
    <div>
      <h1 className="text-amber-50">{name}</h1>
    </div>
  );
};

My.propTypes = {
  name: PropTypes.string,
};
