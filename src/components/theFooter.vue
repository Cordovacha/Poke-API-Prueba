<template>
  <div class="botones  ">
    <div>
      <v-btn class="All-btn">All</v-btn>
    </div>
    <div>
      <v-btn class="Favorites-btn" >Favorites</v-btn>
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
  top:92%;
  background-color: #fff;


}

.All-btn {
  background-color: red;
  width: 275px;
  height: 44px;
  padding: 11px 0px;
  color: white;
  border-radius: 100px;
}
.Favorites-btn {
  width: 275px;
  height: 44px;
  padding: 11px 0px;
  background-color: #bfbfbf;
  border-radius: 100px;
}
</style>
