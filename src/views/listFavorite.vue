<script setup>
import { getPokemons } from "@/components/request/pokeApi";
import { ref, watch, computed } from "vue";

import Footer from "@/components/theFooter.vue";
import { useFavoriteStore } from "@/components/store/theFavorites";
import { storeToRefs } from "pinia";
import modal from "@/components/theModel.vue";

const data = ref([]);
const filterText = ref("");

const selectedPokemons = ref();

const useFavorite = useFavoriteStore();

const { rmvFavorite } = useFavorite;

const { Favorite } = storeToRefs(useFavorite);

const dialog = ref(false);

const filteredData = computed(() => {
  const poke = Favorite.value;
  return poke.filter((data) => {
    return data.name.toLowerCase().includes(filterText.value.toLowerCase());
  });
});

watch(
  async () => {
    data.value = await getPokemons();
  },
  { immediate: true }
);

const open = (Favorite) => {
  dialog.value = true;
  selectedPokemons.value = Favorite;
};
</script>

<template>
  <div class="fondo" v-if="Favorite.length === 0">
    <div class="margin">
      <v-text-field
        type="search"
        v-model="filterText"
        placeholder="Search"
        prepend-inner-icon="mdi-magnify"
        variant="solo"
      >
      </v-text-field>
    </div>
    <div class="layout">
      <p class="mt-8">Uh-oh!</p>
      <p class="mt-8">You look lost on your journey!</p>
      <v-btn to="/theList" class="btn-home mt-8 mb-4">Go back Home</v-btn>
    </div>
  </div>

  <div div class="d-flex justify-center fondo mb-8" v-else>
    <div>
      <v-text-field
        type="search"
        v-model="filterText"
        placeholder="Search"
        prepend-inner-icon="mdi-magnify"
        variant="solo"
        class="mt-8"
      >
      </v-text-field>

      <v-list class="list" width="570">
        <v-list-item
          v-for="Fav in filteredData"
          :key="Fav"
          class="showPokemon"
          density="compact"
        >
          <v-list-item-title>
            <div class="pokemon-name" @click="open(Fav)">
              {{ Fav.name }}
            </div>
          </v-list-item-title>

          <template v-slot:append>
            <v-btn @click="rmvFavorite(Fav.name)" class="btn-fav" height="60">
              <img src="../assets//img/iconActive.png" />
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

<style>
.pokemon-name {
  display: flex;
  justify-content: start;
  align-items: center;
  cursor: pointer;
  height: 78px;
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

.fondo {
  background-color: #f9f9f9;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
}

.margin {
  margin-top: 2.5%;
  width: 570px;
}

.layout {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.list {
  background-color: #f9f9f9;
}
.btn-fav {
  border-radius: 100%;
  width: 60px;
}

.btn-home {
  display: inline-flex;
  padding: 11px 20px;
  align-items: center;
  gap: 10px;
  border-radius: 60px;
  background: #f22539;
}
</style>
