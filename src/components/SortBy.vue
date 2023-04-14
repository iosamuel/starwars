<script setup>
import { computed } from "vue";

const props = defineProps({
  sortBy: {
    type: String,
    default: "name",
  },
  sortDirection: {
    type: String,
    default: "asc",
  },
});

const emit = defineEmits(["update:sortBy", "update:sortDirection"]);

const sortBy = computed({
  get: () => props.sortBy,
  set: (value) => emit("update:sortBy", value),
});

const sortDirection = computed({
  get: () => props.sortDirection,
  set: (value) => emit("update:sortDirection", value),
});
</script>

<template>
  <label for="sort-by">Sort By</label>
  <div class="nes-select">
    <select id="sorty-by" v-model="sortBy">
      <option value="name" selected>Name</option>
      <option value="population">Population</option>
      <option value="diameter">Diameter</option>
    </select>
  </div>
  <label>
    <input
      v-model="sortDirection"
      value="asc"
      type="radio"
      class="nes-radio"
      checked
    />
    <span>ASC</span>
  </label>

  <label>
    <input
      v-model="sortDirection"
      value="desc"
      type="radio"
      class="nes-radio"
    />
    <span>DESC</span>
  </label>
</template>
