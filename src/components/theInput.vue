<template>
  <div class="text-field">
    <div class="mid-place">
      <v-text-field
        :hide-details="'auto'"
        class="debug"
        variant="solo"
        :label="'Search'"
        @keyup="$emit('update:value', $event.target.value)"
      />
    </div>
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
</style>
