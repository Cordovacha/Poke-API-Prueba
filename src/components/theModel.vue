<template>
  <v-row justify="center">
    <v-dialog :model-value="dialog" persistent activator="parent" width="500">
      <v-card>
        {{ data?.sprites.front_default }}
        {{ data?.name }} {{ data?.weight }} {{ data?.height }}
        {{ data?.types[0]?.type?.name }}
        {{ data?.types[1]?.type?.name }}
        <v-btn @click="$emit('closeModal')">Close</v-btn>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script setup>
import { getSpecificPokemon } from "@/components/request/pokeApi";
import { ref, watchEffect } from "vue";

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
});

watchEffect(async () => {
  if (props.dialog) {
    data.value = await getSpecificPokemon(props.selectedPokemons.url);
  }
});
</script>
