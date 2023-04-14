<script setup>
import PlanetsList from "./components/PlanetsList.vue";
</script>

<template>
  <div id="planets" class="nes-container is-centered">
    <h1>Star Wars Planets</h1>

    <Suspense>
      <template #fallback>
        <div>Loading...</div>
      </template>
      <PlanetsList />
    </Suspense>
  </div>
</template>

<style>
#planets {
  margin: 20px;
}
</style>
