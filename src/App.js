import { useState, useRef } from "react";
import { useGetPokemonNameQuery } from "./services/pokemon";

function App() {
  const [pokeName, setPokeName] = useState("pikachu");
  const { data, loading, error } = useGetPokemonNameQuery(pokeName);
  const inputRef = useRef();

  const formHandler = (e) => {
    e.preventDefault();
    setPokeName(inputRef.current.value);
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div>
        {error ? (
          <>Oh no, there was an error</>
        ) : loading ? (
          <>Loading...</>
        ) : data ? (
          <>
            <h3>{data.species.name}</h3>
            <img src={data.sprites.front_shiny} alt={data.species.name} />
          </>
        ) : null}
      </div>
      <form className="flex items-center gap-2" onSubmit={formHandler}>
        <input
          ref={inputRef}
          className=" border-2 border-black py-1 px-2"
          type="text"
        />
        <button className="py-1 px-2 bg-orange-500 text-white ">Search</button>
      </form>
    </div>
  );
}

export default App;
