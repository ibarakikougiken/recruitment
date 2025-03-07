<script setup lang="ts">
const loaded = ref(true);
const key = "loaded";
onMounted(() => {
  if (window.sessionStorage.getItem(key) === "true") {
    loaded.value = true;
  } else {
    loaded.value = false;
  }
});
function loadedHandler() {
  window.sessionStorage.setItem(key, "true");
  loaded.value = true;
}
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLoadingIndicator />
  <NuxtErrorBoundary />
  <Loading v-if="!loaded" @loaded="loadedHandler" />
  <NuxtLayout class="loaded" v-if="loaded">
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.loaded {
  animation: fadeIn 0.2s ease-in-out forwards;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
