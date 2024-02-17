<script setup></script>

<template>
  <v-row class="d-flex justify-center align-center flex-column">
    <v-col class="red-color">
      <v-img class="img">
        <v-img src="@/assets/img/Pikachu.png" />
      </v-img>
    </v-col>
    <v-col class="text">
      <h1 class="justify-center mb-4">Welcome to Pokédex</h1>

      <p class="mb-1">
        The digital encyclopedia created by Professor Oak is an invaluable tool
      </p>
      <p>to Trainers in the Pokémon world.</p>

      <v-btn variant="tonal" class="btn mt-5" to="/theList">Get Started</v-btn>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
.img {
  background-image: url("../assets/img/redColor.svg");
  background-size: 75%;
  background-position-x: center;
  background-position-y: bottom;
}

.red-color {
  justify-content: center;
  display: flex;
  align-items: flex-end;
  width: 325px;
  height: 300px;
}
.text {
  font-size: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}

.btn {
  background-color: #c00e20 !important;
  color: #fff;
  border-radius: 60px;
  width: 150px;
}
</style>
