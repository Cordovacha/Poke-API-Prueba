export const getPokemons = async () => {
  const fetchData = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const dataToJson = await fetchData.json();
  return dataToJson.results;
};

// eslint-disable-next-line no-unused-vars
export const getSpecificPokemon = async (URL) => {
  const fetchData = await fetch(URL);
  const dataToJson = await fetchData.json();
  return dataToJson;
};
