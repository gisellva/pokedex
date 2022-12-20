import React from "react";
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";


const Pokedex = (props) => {
  const { pokemons, page, setPage, total, loading } = props;

  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
  };

  const nextPage = () => {
    const nextPage = Math.min(page + 1, total - 1);
    setPage(nextPage);
  };

  return (
    <div>
      <div className="header">
        <h1>Pokedex</h1>
        <img src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c31f.png" alt="pokemon" className="pokebola"  width={50} height={50}/>
        <Pagination
          page={page + 1}
          totalPages={total}
          onLeftClick={lastPage}
          onRightClick={nextPage}
        />
      </div>
      {loading ? (
        <div className="loadin">
          <img src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c32b.png" alt="pokemon" className="pokebola"  width={200} height={200}/>
          <p className="parrafoloading">cargando pokemones.....</p>
        </div>
      ) : (
        <div className="pokedex-grid">
          {pokemons.map((pokemon, idx) => {
            return <Pokemon pokemon={pokemon} key={pokemon.name} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
