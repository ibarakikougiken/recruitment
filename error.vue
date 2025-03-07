<script setup lang="ts">
import { NuxtLayout } from "#components";

const error = useError();

setPageLayout("default");

useHead({
  title: "Error",
  meta: [
    {
      name: "description",
      content: "An error occurred",
    },
    {
      name: "robots",
      content: "noindex",
    },
  ],
});
</script>

<template>
  <NuxtLayout>
    <div class="error">
      <div v-if="error?.statusCode === 404">
        <h1>404</h1>
        <p>Page not found</p>
        <NuxtLink to="/">Home</NuxtLink>
      </div>
      <div v-else>
        <h1>An error has occurred</h1>
        <p>{{ error?.message }}</p>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped>
.error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: auto;
}
.error h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}
.error p {
  margin-bottom: 1rem;
}
.error a {
  color: #333;
}
</style>
