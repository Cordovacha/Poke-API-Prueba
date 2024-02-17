<script setup>
import { getSpecificPokemon } from "@/components/request/pokeApi";
import { computed, ref, watchEffect } from "vue";

const data = ref(null);

const props = defineProps({
  dialog: {
    type: Boolean,
    required: true,
  },
  selectedPokemons: {
    type: Object,
    required: true,
  },
  addToFavorite: {
    type: Boolean,
    required: true,
  },
});

watchEffect(async () => {
  if (props.dialog) {
    data.value = await getSpecificPokemon(props.selectedPokemons.url);
  }
});
</script>

<template>
  <div justify="center">
    <v-dialog :model-value="dialog" persistent activator="parent" width="500">
      <v-btn @click="$emit('closeModal')" color="white" width="10">
        <v-icon color="primary" class="icon">mdi-close-circle</v-icon>
      </v-btn>

      <v-card class="img-background">
        <v-img :src="data?.sprites.front_default"></v-img>
      </v-card>

      <v-card class="size">
        <h2 class="ml-8 mt-8">
          Name :
          {{ data?.name }}
        </h2>
        <br />
        <h2 class="ml-8">Peso: {{ data?.weight }}</h2>
        <br />
        <h2 class="ml-8">Altura: {{ data?.height }}</h2>
        <br />
        <h2 class="ml-9 mb-9">
          Types: {{ data?.types[0]?.type?.name }},
          {{ data?.types[1]?.type?.name }}
        </h2>
        <div class="espacio">
          <div>
            <v-btn id="btn" color="#F22539" class="btn">
              Share to my friends
            </v-btn>
          </div>
          <div>
            <v-btn class="btn-fav">
              <img src="../assets/img/iconActive.png" class="move" />
            </v-btn>
          </div>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<style scoped>
.center {
  border-radius: 10px;
}
.btn {
  height: 50px;
  border-radius: 60px;
}
.espacio {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
}
.icon {
  justify-content: end;
}

.size {
  color: #5e5e5e;

  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 27px */
}

.btn-fav {
  border-radius: 100%;
  height: 60px;
  width: 60px;
}

.img-background {
  background-image: url("@/assets/img/backgroundImg.png");
  height: 200px;
  background-repeat: no-repeat;
}
</style>
