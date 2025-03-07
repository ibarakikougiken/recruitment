<script setup lang="ts">
const loaded = ref(false);
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
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator />
    <NuxtErrorBoundary />
    <div v-if="loaded" class="page">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
    <Loading v-else @loaded="loadedHandler" />
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.page {
  animation: fadeIn 0.5s;
}
</style>
