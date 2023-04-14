<script setup>
import SortBy from "./SortBy.vue";

import { computed, ref } from "vue";
import { shortNumber, isUnknown } from "../utils";

const { results } = await fetch("https://swapi.dev/api/planets").then((res) =>
  res.json()
);

const sortBy = ref("name");
const sortDirection = ref("asc");

const sortedPlanets = computed(() => {
  if (sortBy.value === "name") {
    return [...results].sort((a, b) => {
      if (sortDirection.value === "desc") {
        [a, b] = [b, a];
      }

      return a[sortBy.value].localeCompare(b[sortBy.value]);
    });
  }

  return [...results].sort((a, b) => {
    if (isUnknown(a[sortBy.value])) return 1;
    if (isUnknown(b[sortBy.value])) return -1;

    if (sortDirection.value === "desc") {
      [a, b] = [b, a];
    }

    return Number(a[sortBy.value]) - Number(b[sortBy.value]);
  });
});
</script>

<template>
  <SortBy v-model:sort-by="sortBy" v-model:sort-direction="sortDirection" />
  <ul id="planets-list">
    <li v-for="planet in sortedPlanets" :key="planet.name">
      <div class="nes-container with-title">
        <p class="title">{{ planet.name }}</p>
        <p>Population: {{ shortNumber(planet.population) }}</p>
        <p>Diameter: {{ planet.diameter }}</p>
      </div>
    </li>
  </ul>
</template>

<style>
#planets-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 10px;
  list-style: none;
  padding: 0;
  margin-top: 20px;
}
</style>
