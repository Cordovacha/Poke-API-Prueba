<script setup>
import { getPokemons } from "@/components/request/pokeApi";
import { ref, watch } from "vue";
/* import inputMenu from "@/components/theInput.vue"; */
import Footer from "@/components/theFooter.vue";
import modal from "@/components/theModel.vue";

const data = ref(null);
const dialog = ref(false);

const selectedPokemons = ref(null);

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
  <!-- input de busqueda -->
  <div class="text-field">
    <div class="mid-place">
      <v-text-field
        :hide-details="'auto'"
        class="mb-8"
        variant="solo"
        :label="'Search'"
        @keyup="$emit('update:value', $event.target.value)"
      />
    </div>
  </div>
  <modal :dialog="dialog" @close-modal="dialog = false" :selected-pokemons="selectedPokemons"/>

  <!-- separacion para la lista de pokemon -->
  <div class="d-flex justify-center fondo">
    <div>
      <v-list lines="one" width="570" class="list">
        <v-list-item
          v-for="pokemon in data"
          :key="pokemon"
          :title="pokemon.name"
          class="showPokemon"
          density="compact"
          @click="open(pokemon)"
        >
          <template v-slot:append>
            <img src="../assets/img/iconActive.png" @click="addToFavorite" />
          </template>
        </v-list-item>
      </v-list>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.text-field {
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #f9f9f9;
}

.mid-place {
  width: 30%;
}
.img-start {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: #f9f9f9;
}
.showPokemon {
  font-size: 15rem;
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

.debug {
  border: 1px solid red;
}
</style>
