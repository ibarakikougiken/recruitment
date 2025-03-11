<script setup lang="ts">
const key = "loaded";

const loaded = ref(false);
const layout = ref();

onMounted(() => {
  if (window.localStorage.getItem(key) === "true") {
    loaded.value = true;
  } else {
    loaded.value = false;
  }
});
function loadedHandler() {
  window.localStorage.setItem(key, "true");
  loaded.value = true;
}

const router = useRouter();
useSeoMeta({
  ogUrl: `https://ibarakikougiken.github.io/recruitment${router.currentRoute.value.path}`,
});
watch(router.currentRoute, () => {
  useSeoMeta({
    ogUrl: `https://ibarakikougiken.github.io/recruitment${router.currentRoute.value.path}`,
  });
});
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator />
    <NuxtErrorBoundary />
    <Loading @loaded="loadedHandler" :class="{ hidden: loaded }" />
    <div ref="layout" :class="{ hidden: !loaded, page: loaded }">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>

<style scoped>
.hidden {
  visibility: hidden;
  max-height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
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
