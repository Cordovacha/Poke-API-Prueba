<script setup>
import { ref, watch, computed, watchEffect } from "vue";
import { getPokemons } from "@/components/request/pokeApi";
import { useFavoriteStore } from "@/components/store/theFavorites";
import modal from "@/components/theModel.vue";
import Footer from "@/components/theFooter.vue";

const data = ref([]);
const filterText = ref("");

const filteredData = computed(() => {
  const poke = data.value;
  return poke.filter((data) => {
    return data.name.toLowerCase().includes(filterText.value.toLowerCase());
  });
});

const dialog = ref(false);

const selectedPokemons = ref();

const { addToFavorite, rmvFavorite, checkPokemon } = useFavoriteStore();

watch(
  async () => {
    data.value = await getPokemons();
  },
  { immediate: true }
);

const open = (pokemon) => {
  dialog.value = true;
  selectedPokemons.value = pokemon;
};
</script>

<template>
  <div class="d-flex justify-center mb-8 fondo">
    <div class="fondo">
      <v-text-field
        type="search"
        v-model="filterText"
        placeholder="Search"
        prepend-inner-icon="mdi-magnify"
        variant="solo"
        class="marg"
        width="570"
      >
      </v-text-field>

      <v-list width="570" class="list">
        <v-list-item
          v-for="pokemon in filteredData"
          :key="pokemon.name"
          class="showPokemon"
          density="compact"
        >
          <v-list-item-title>
            <div class="pokemon-name" @click="open(pokemon)">
              {{ pokemon.name }}
            </div>
          </v-list-item-title>

          <template v-slot:append>
            <v-btn
              @click="addToFavorite(pokemon)"
              v-if="checkPokemon(pokemon)"
              class="btn-fav"
            >
              <img src="../assets/img/iconDisable.png" />
            </v-btn>
            <v-btn @click="rmvFavorite(pokemon.name)" v-else class="btn-fav">
              <img src="../assets/img/iconActive.png" />
            </v-btn>
          </template>
        </v-list-item>
      </v-list>
    </div>
  </div>

  <modal
    :dialog="dialog"
    @close-modal="dialog = false"
    :selected-pokemons="selectedPokemons"
  />

  <Footer />
</template>

<style scoped>
.pokemon-name {
  display: flex;
  justify-content: start;
  align-items: center;
  cursor: pointer;
  height: 70px;
  border-radius: 8px;
  transition: 0.3s ease;
  font-size: 1.8rem;
  font-family: Lato;
}

.showPokemon {
  text-transform: capitalize;
  margin-bottom: 8px;
  background-color: #fff;
}

.list {
  background-color: #f9f9f9;
}
.fondo {
  background-color: #f9f9f9;
}

.marg {
  margin-top: 8%;
  width: 100%;
}

.btn-fav {
  height: 60px;
  width: 60px;
  border-radius: 100%;
}
</style>
