<template>
  <div class="botones">
    <div>
      <router-link to="/theList">
        <v-btn class="All-btn">
          <img src="../assets//img/btnAll.png" alt="" class="mr-5" />All</v-btn
        >
      </router-link>
    </div>
    <div>
      <router-link to="/listFavorite">
        <v-btn class="Favorites-btn"
          ><img
            src="../assets//img/iconDisable.png"
            alt=""
            class="mr-5"
            height="30"
          />
          Favorites</v-btn
        >
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.botones {
  position: fixed;
  display: flex;
  gap: 1rem;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  top: 95%;
  background-color: #fff;
  height: 60px;
  box-shadow: 0px -5px 4px 0px rgba(0, 0, 0, 0.05);
}

.All-btn {
  background-color: red;
  width: 100px;
  height: 40px;
  padding: 11px 0px;
  color: white;
  border-radius: 100px;
  margin-bottom: 10%;
}
.Favorites-btn {
  align-items: center;
  width: 200px;
  height: 40px;
  padding: 11px 0px;
  background-color: #bfbfbf;
  border-radius: 100px;
  margin-bottom: 5%;
}
</style>
