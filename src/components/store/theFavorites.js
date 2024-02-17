import { defineStore } from "pinia";
import { ref } from "vue";

export const useFavoriteStore = defineStore("Favorite", () => {
  const Favorite = ref([]);

  const addToFavorite = (pokemon) => {
    Favorite.value.push(pokemon);
  };

  const rmvFavorite = (name) => {
    Favorite.value = Favorite.value.filter((item) => item.name !== name);
  };

  const checkPokemon = (pokemon) => {
    const check = Favorite.value.filter(
      (listFavorite) => pokemon.name === listFavorite.name
    );

    if (check == true) {
      return rmvFavorite;
    } else if (check == false) {
      return addToFavorite;
    }
  };

  return {
    Favorite,
    addToFavorite,
    rmvFavorite,
    checkPokemon,
  };
});
