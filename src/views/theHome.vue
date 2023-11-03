<script setup></script>

<template>
  <v-row class="d-flex justify-center align-center flex-column">
    <v-col class="red-color">
      <v-img src="../assets/img/Pikachu.png" class="img" />
    </v-col>
    <v-col class="text">
      <h2 class="justify-center mb-4">Welcome to Pokédex</h2>

      <p class="mb-1">
        The digital encyclopedia created by Professor Oak is an invaluable tool
      </p>
      <p>to Trainers in the Pokémon world.</p>

      <v-btn variant="tonal" class="btn mt-5  " to="/theList">Get Started</v-btn>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
.red-color {
  justify-content: center;
  display: flex;
}
.text {
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.img {
  width: 325px;
  height: 288px;
  display: block;
}

.btn {
  background-color: #c00e20!important;
  color: #fff;
  border-radius: 60px;
  width: 150px;

}
</style>
