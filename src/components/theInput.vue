<script setup>
import { getSpecificPokemon } from "@/components/request/pokeApi";
import { watch } from "vue";

watch(async () => {
  try {
    data.value = await getSpecificPokemon();
  } catch (error) {}
});


document.addEventListener('keyup', e=>{
  
if (e.target.matches('#poke')) {
  document.querySelectorAll('.pokemonId').forEach(poke =>{
    poke.textContent.toLowerCase().includes(e.target.value.toLowerCase())
    ?poke.classList.remove('filtro')
    : poke.classList.add('filtro')
  })
  
}



  console.log(e.target.value);
})

/* async function searchPokemon() {
  const searchedPokemon = searchInput.value.toLowerCase();

  try {
    const response = await fetch(URL + searchedPokemon);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(console.log(error));
  }
} */
</script>

<template>
  <div>
    <input
      type="text"
      autocomplete="off"
      placeholder="Search Pokemon"
      id="poke"
      name="poke"
    />
  </div>
</template>
